import React from 'react';
import PropTypes from 'prop-types';
import KaTeXComponent from './KaTeXComponent';

const MarkdownWithKaTeX = ({ content }) => {
  const regex = /\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g;
  let match;
  let currentIndex = 0;
  const parts = [];

  while ((match = regex.exec(content)) !== null) {
    const matchIndex = match.index;

    // Add text before the match
    if (currentIndex !== matchIndex) {
      parts.push(content.substring(currentIndex, matchIndex));
    }

    // Add KaTeX component based on the match type
    if (match[1]) {
      // Block KaTeX
      parts.push(<KaTeXComponent key={currentIndex} mathExpression={match[1]} />);
    } else if (match[2]) {
      // Inline KaTeX
      parts.push(<KaTeXComponent key={currentIndex} mathExpression={match[2]} inline />);
    }

    currentIndex = matchIndex + match[0].length;
  }

  // Add any remaining text after the last match
  if (currentIndex < content.length) {
    parts.push(content.substring(currentIndex));
  }

  return <div>{parts}</div>;
};

MarkdownWithKaTeX.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownWithKaTeX;
