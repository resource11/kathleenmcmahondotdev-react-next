import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/react/MDXComponents.jsx';

/**
 * @param {{ children: React.ReactNode }} props
 */
export default function MDXClientWrapper({ children }) {
	return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
}
