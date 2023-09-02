import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const CodeSandboxEmbed = ({ src }) => {
  return (
    <iframe
      src={src}
      title="CodeSandbox Embed"
      width="80%"
      height="600px" // You can adjust the height as needed
      style={{ border: '0', borderRadius: '4px', overflow: 'hidden' }}
      className='translate-x-28 translate-y-20'
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    ></iframe>
  );
};

const App = () => {
  // Replace this with the CodeSandbox URL of your project
  const codeSandboxSrc = 'https://codesandbox.io/s/fancy-https-nty67m';

  return (
    <div className="relative h-full">
      <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-20 pt-4">
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
          <h1 className='translate-y-16 text-center items-center sm:translate-x-7 font-semibold'>CodeSandbox Embed Example</h1>
          <CodeSandboxEmbed src={codeSandboxSrc} />
        </SimpleBar>
      </div>
    </div>
  );
};

export default App;