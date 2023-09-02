// import React, { useState } from 'react';

// const PythonCodeRunner = ({ initialCode }) => {
//   const [code, setCode] = useState(initialCode || '');
//   const [output, setOutput] = useState('');

//   const runCode = async () => {
//     try {
//       const response = await fetch('/api/run-python-code', {
//         method: 'POST',
//         body: JSON.stringify({ code }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       const data = await response.json();
//       setOutput(data.output);
//     } catch (error) {
//       console.error(error);
//       setOutput('An error occurred while running the code.');
//     }
//   };

//   return (
//     <div>
//       <h2>Python Code Runner</h2>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         rows={10}
//         cols={40}
//         className='prose text-black font-semibold font-mono bg-white/10 rounded-lg m-4'
//       />
//       <br />
//       <button onClick={runCode}>Run Code</button>
//       <br />
//       <h3>Output:</h3>
//       <pre>{output}</pre>
//     </div>
//   );
// };

// export default PythonCodeRunner;


import React, { useState } from 'react';

const PythonCodeRunner = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const codeLines = code.split('\n'); // Split the code into lines
      let finalOutput = '';

      for (const line of codeLines) {
        const response = await fetch('/api/run-python-code', {
          method: 'POST',
          body: JSON.stringify({ code: line }), // Execute one line at a time
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        finalOutput += data.output + ''; // Append output and newline

        // Optional: Add a delay between execution of lines (if needed)
        // await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setOutput(finalOutput);
    } catch (error) {
      console.error(error);
      setOutput('An error occurred while running the code.');
    }
  };

  return (
    <div>
      <h2>Python Code Runner</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={40}
        className='prose focus:outline-none text-black font-semibold font-mono p-1 bg-white/10 rounded-lg m-4'
      />
      <br />
      <button onClick={runCode} className='border bg-slate-950/40 hover:bg-blue-900/10 rounded-lg p-1'>Run Code</button>
      <br />
      <h3 className='m-1'>Output:</h3>
      <pre className='prose text-white font-semibold p-3 bg-black/10 rounded-lg m-4'>{output}</pre>
    </div>
  );
};

export default PythonCodeRunner;
