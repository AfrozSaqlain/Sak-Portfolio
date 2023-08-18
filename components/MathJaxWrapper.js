import { useEffect } from 'react';

const MathJaxWrapper = ({ content }) => {
  useEffect(() => {
    // Load MathJax and render equations
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
      script.async = true;
      document.head.appendChild(script);
      return () => {
        // Cleanup: Remove the dynamically added script when the component is unmounted
        document.head.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MathJaxWrapper;
