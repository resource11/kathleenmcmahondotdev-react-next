/** @jsxImportSource: react */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodePen } from 'mdx-embed/dist/components/codepen';
import { YouTube } from 'mdx-embed/dist/components/youtube';

const components = {
    CodePen,
    YouTube,
  };
  


export default (props) => <MDXProvider components={components}>{props.children}</MDXProvider>;