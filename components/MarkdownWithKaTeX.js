import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MarkdownWithKaTeX = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
      className="text-white font-bold"
      components={{
        p: ({ node, ...props }) => <p className="text-white font-normal" {...props} />, // Customize paragraph color
        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />, // Make bold text bolder
        h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-white my-4" {...props} />, // Customize heading 1
        h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-white my-3" {...props} />, // Customize heading 2
        h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-white my-2" {...props} />, // Customize heading 3
        code: ({ node, ...props }) => <code className="bg-gray-800 text-white p-1 rounded-md" {...props} />, // Customize inline code
        br: ({ node, ...props }) => <br {...props} />,
        // Add more custom styles as needed for other elements
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownWithKaTeX;

