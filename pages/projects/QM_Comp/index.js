import React from 'react';

const CodeSandboxEmbed = ({ src }) => {
  return (
    <iframe
      src={src}
      title="CodeSandbox Embed"
      width="80%"
      height="600px" // You can adjust the height as needed
      style={{ border: '0', borderRadius: '4px', overflow: 'hidden' }}
      className='translate-x-24 translate-y-20'
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
  );
};

const App = () => {
  // Replace this with the CodeSandbox URL of your project
  const codeSandboxSrc = 'https://codesandbox.io/s/fancy-https-nty67m';

  return (
    <div>
      <h1 className='translate-y-16 translate-x-24 font-semibold'>CodeSandbox Embed Example</h1>
      <CodeSandboxEmbed src={codeSandboxSrc} />
    </div>
  );
};

export default App;


