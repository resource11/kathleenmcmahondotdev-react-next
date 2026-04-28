import { visit } from 'unist-util-visit';

const IMPORT_PATH = '@/components/react/CodeBlock/CodeBlock.jsx';

/**
 * Transforms ```react-live (and ```jsx react-live) fenced blocks into
 *   <CodeBlock client:load react-live language="jsx" codeString={...} />
 * Injects the CodeBlock import once per file when needed.
 */
export function remarkReactLive() {
	return (tree) => {
		let touched = false;

		visit(tree, 'code', (node, index, parent) => {
			if (parent == null || index == null) return;

			const isReactLive =
				node.lang === 'react-live' ||
				(node.meta && /(^|\s)react-live(\s|$)/.test(node.meta));
			if (!isReactLive) return;

			const language = node.lang === 'react-live' ? 'jsx' : node.lang || 'jsx';
			const code = node.value ?? '';

			parent.children[index] = {
				type: 'mdxJsxFlowElement',
				name: 'CodeBlock',
				attributes: [
					{ type: 'mdxJsxAttribute', name: 'client:load', value: null },
					{ type: 'mdxJsxAttribute', name: 'react-live', value: null },
					{ type: 'mdxJsxAttribute', name: 'language', value: language },
					{
						type: 'mdxJsxAttribute',
						name: 'codeString',
						value: {
							type: 'mdxJsxAttributeValueExpression',
							value: JSON.stringify(code),
							data: {
								estree: {
									type: 'Program',
									sourceType: 'module',
									body: [
										{
											type: 'ExpressionStatement',
											expression: {
												type: 'Literal',
												value: code,
												raw: JSON.stringify(code),
											},
										},
									],
								},
							},
						},
					},
				],
				children: [],
			};
			touched = true;
		});

		if (!touched) return;

		const alreadyImported = tree.children.some(
			(n) =>
				n.type === 'mdxjsEsm' &&
				typeof n.value === 'string' &&
				n.value.includes(IMPORT_PATH),
		);
		if (alreadyImported) return;

		tree.children.unshift({
			type: 'mdxjsEsm',
			value: `import { CodeBlock } from '${IMPORT_PATH}';`,
			data: {
				estree: {
					type: 'Program',
					sourceType: 'module',
					body: [
						{
							type: 'ImportDeclaration',
							specifiers: [
								{
									type: 'ImportSpecifier',
									imported: { type: 'Identifier', name: 'CodeBlock' },
									local: { type: 'Identifier', name: 'CodeBlock' },
								},
							],
							source: {
								type: 'Literal',
								value: IMPORT_PATH,
								raw: `'${IMPORT_PATH}'`,
							},
						},
					],
				},
			},
		});
	};
}

export default remarkReactLive;
