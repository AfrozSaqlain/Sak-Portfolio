// pages/index.js (or your desired file)

import React from 'react';

const ChessBaseEmbed = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src="https://livetactics.chessbase.com"
        width="500"
        height="540"
        className="border border-gray-500 rounded-md shadow-md bg-white"
        title="ChessBase Embed"
      ></iframe>
    </div>
  );
};

export default ChessBaseEmbed;
