import { preToCodeBlock } from 'mdx-utils';
import CodeBlock from '@/components/react/CodeBlock/CodeBlock';
import { LiveScope } from '@/components/react/liveScope';

export const MDXComponents = {
	...LiveScope,
	pre: (preProps) => {
		const props = preToCodeBlock(preProps);
		return props ? (
			<CodeBlock
				client:load
				{...props}
			/>
		) : (
			<pre {...preProps} />
		);
	},
};

export default MDXComponents;
