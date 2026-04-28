import { Fragment } from 'react';
// import { useMDXComponents } from '@mdx-js/react';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import { Highlight, themes } from 'prism-react-renderer';
import { LiveScope } from '@/components/react/liveScope';
import { DisplayBox } from '@/components/react/DisplayBox/DisplayBox';

// inspired by Twitch Livestream with Jason Lengstorf
// and Chris Biscardi's blog post:
// https://www.christopherbiscardi.com/post/using-mdx-scope-in-react-live-scope/

export const CodeBlock = ({ codeString, language, ...props }) => {
	// This hook pulls the components from the MDXProvider we'll create in step 2

	// if (typeof window === 'undefined') return <div />;
	// const contextComponents = useMDXComponents();
	// const liveScope = { ...MDXComponents };
	// const components =
	// 	contextComponents && Object.keys(contextComponents).length > 0
	// 		? contextComponents
	// 		: LiveScope;

	// const components = { ...LiveScope, ...props.scope };

	if (props['react-live']) {
		return (
			<LiveProvider
				code={codeString}
				// scope={components}
				theme={themes.nightOwl}
			>
				<DisplayBox>
					<LivePreview />
				</DisplayBox>
				<LiveEditor style={{ margin: 0, fontSize: '1.25rem' }} />
				<LiveError />
			</LiveProvider>
		);
	}

	if (props['displaybox']) {
		return (
			<Fragment>
				<LiveProvider
					code={codeString}
					// scope={components}
					theme={themes.nightOwl}
				>
					<DisplayBox>
						<LivePreview />
					</DisplayBox>
				</LiveProvider>
				<Highlight
					code={codeString}
					language={language}
					theme={themes.nightOwl}
				>
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<pre
							className={className}
							style={{ ...style, fontSize: '1.25rem' }}
						>
							{tokens.map((line, i) => (
								<div
									key={i}
									{...getLineProps({ line, key: i })}
								>
									{line.map((token, key) => (
										<span
											key={key}
											{...getTokenProps({ token, key })}
										/>
									))}
								</div>
							))}
						</pre>
					)}
				</Highlight>
			</Fragment>
		);
	}

	// Default: Static Highlight
	return (
		<Highlight
			code={codeString}
			language={language}
			theme={themes.nightOwl}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={style}
				>
					{tokens.map((line, i) => (
						<div
							key={i}
							{...getLineProps({ line, key: i })}
						>
							{line.map((token, key) => (
								<span
									key={key}
									{...getTokenProps({ token, key })}
								/>
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
