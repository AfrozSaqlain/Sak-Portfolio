// // pages/api/run-python-code.js
// export default async (req, res) => {
//     const { code } = req.body;
  
//     try {
//       // Execute Python code here and capture the output
//       // For example, you can use a child process to run the Python script
//       const { execSync } = require('child_process');
//       const output = execSync(`python -c "${code}"`, { encoding: 'utf-8' });
  
//       res.status(200).json({ output });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred while running the code.' });
//     }
//   };
  

// pages/api/run-python-code.js

const runPythonCode = async (req, res) => {
  const { code } = req.body;

  try {
    // Execute Python code here and capture the output
    // For example, you can use a child process to run the Python script
    const { execSync } = require('child_process');
    const output = execSync(`python -c "${code}"`, { encoding: 'utf-8' });

    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while running the code.' });
  }
};

export default runPythonCode;
