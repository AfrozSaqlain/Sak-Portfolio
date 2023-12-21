// import React from 'react';
// import PropTypes from 'prop-types';
// import KaTeXComponent from './KaTeXComponent';

// const MarkdownWithKaTeX = ({ content }) => {
//   const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g;
//   let match;
//   let currentIndex = 0;
//   const parts = [];

//   while ((match = regex.exec(content)) !== null) {
//     const matchIndex = match.index;

//     // Add text before the match
//     if (currentIndex !== matchIndex) {
//       parts.push(content.substring(currentIndex, matchIndex));
//     }

//     // Add KaTeX component based on the match type
//     if (match[1]) {
//       // Block KaTeX
//       parts.push(<KaTeXComponent key={currentIndex} mathExpression={match[1]} />);
//     } else if (match[2]) {
//       // Inline KaTeX
//       parts.push(<KaTeXComponent key={currentIndex} mathExpression={match[2]} inline />);
//     }

//     currentIndex = matchIndex + match[0].length;
//   }

//   // Add any remaining text after the last match
//   if (currentIndex < content.length) {
//     parts.push(content.substring(currentIndex));
//   }

//   return <div>{parts}</div>;
// };

// MarkdownWithKaTeX.propTypes = {
//   content: PropTypes.string.isRequired,
// };

// export default MarkdownWithKaTeX;






import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const MarkdownWithKaTeX = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
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
        // Add more custom styles as needed for other elements
      }}
    />
  );
};

export default MarkdownWithKaTeX;




// // Inside MarkdownWithKaTeX.js

// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
// import rehypeRaw from 'rehype-raw';
// import 'katex/dist/katex.min.css';

// const MarkdownWithKaTeX = ({ content }) => {
//   return (
//     <ReactMarkdown
//       children={content}
//       remarkPlugins={[remarkMath]}
//       rehypePlugins={[rehypeKatex, rehypeRaw]}
//       className="text-white font-bold"
//       components={{
//         p: ({ node, ...props }) => <p className="text-white font-normal" {...props} />,
//         strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
//         h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-white my-4" {...props} />,
//         h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-white my-3" {...props} />,
//         h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-white my-2" {...props} />,
//         code: ({ node, inline, className, children, ...props }) => {
//           const isMultiLine = !inline;

//           if (isMultiLine) {
//             // Handle multiline code blocks
//             return (
//               <pre className={`bg-gray-800 text-white p-1 rounded-md ${className}`}>
//                 <code {...props}>{children}</code>
//               </pre>
//             );
//           }

//           // Default behavior for inline code
//           return <code className="bg-gray-800 text-white p-1 rounded-md" {...props}>{children}</code>;
//         },
//       }}
//     />
//   );
// };

// export default MarkdownWithKaTeX;
