import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const GW = () => {
    const sections = [
        {
            title: 'Analysis of Time Series Data',
            subsections: [
                {
                    title: 'Signals in Noise',
                    content: `
                    Let \\( x_j \\) denote a sample of the experimental data (the random variable) and \\( \\mathbf{x} = (x_0, x_1, \\ldots x_{N-1}) \\)  denotes the entire data set of \\(N\\) samples, which is called the stochastic process. The expected signal will be denoted by \\(h_j\\) and the noise by \\( n_j \\).
                    `,
                },
                {
                    title: 'Detection',
                    content: `
                    Since the output of the detector depends on whether a signal is present or not, the pdf of the data must be different in the two cases. If there is no signal we call the joint PDF \\( p_0 (x) \\); if the signal is present we call it \\( p_1(x) \\). To decide which PDF applies to a particular measurement \\( \\mathbf{x} \\), we have to devise a rule called the test, which decides whether the observed data were more likely to come from a distribution with PDF \\(p_0\\) or \\(p_1\\). It does this by dividing the range of possible values of \\( \\mathbf{x} \\) into two sets \\(R\\) and its complement \\(R'\\)
                    in such a way that we decide the PDF is \\( p_1 (x) \\text{ if } \\mathbf{x} \\in R \\) and PDF is \\( p_0 (x) \\text{ if } \\mathbf{x} \\in R' \\).
                    `,
                    code: `# Example code
print("Hello, World!")
print(1+2)`, // Add code for this subsection
                },
                // Add more subsections
            ],
        },
        {
            title: 'Total Flux',
            subsections: [
                {
                    title: 'Definition',
                    content: 'The definition of total flux...',
                },
                {
                    title: 'Calculation',
                    content: `How to calculate the total flux...
                    `,
                    code: `# Another example code
result = 42 * 2`,
                },
                // Add more subsections
            ],
        },
        // Add more sections
    ];

//     const [openSection, setOpenSection] = useState(null);
//     const [openSubsection, setOpenSubsection] = useState(null);

//     const toggleSection = (sectionIndex) => {
//         if (sectionIndex === openSection) {
//             setOpenSection(null);
//         } else {
//             setOpenSection(sectionIndex);
//             setOpenSubsection(null); // Close any open subsections when opening a section
//         }
//     };

//     const toggleSubsection = (subsectionIndex) => {
//         if (subsectionIndex === openSubsection) {
//             setOpenSubsection(null);
//         } else {
//             setOpenSubsection(subsectionIndex);
//         }
//     };

//     return (
//         <div className="relative h-full bg-black/40">
//             <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
//                 <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
//                     <div className="max-w-4xl mx-auto mb-12 p-4 pt-6 shadow-2xl rounded-lg">
//                         <h1 className="text-3xl font-semibold text-center pb-2 font-mono justify-center text-accent mb-4">Analysis of Low-Frequency Gravitational Wave Data</h1>
//                         {sections.map((section, index) => (
//                             <ExpandableSection key={index} title={`${index + 1}. ${section.title}`}>
//                                 {section.subsections.map((subsection, subIndex) => (
//                                     <Subsection
//                                         key={subIndex}
//                                         title={`${index + 1}.${subIndex + 1} ${subsection.title}`}
//                                     >
//                                         <MathJaxWrapper content={subsection.content} />

//                                         {/* Check if there's code for this subsection */}
//                                         {subsection.code && (
//                                             <LiveProvider code={subsection.code}>
//                                                 <LiveEditor />
//                                                 {/* <LiveError /> */}
//                                                 <LivePreview />
//                                             </LiveProvider>
//                                         )}
//                                     </Subsection>
//                                 ))}
//                             </ExpandableSection>
//                         ))}
//                     </div>
//                 </SimpleBar>
//             </div>
//         </div>
//     );
// };


const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);

  const toggleSection = (sectionIndex) => {
    if (sectionIndex === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionIndex);
      setOpenSubsection(null); // Close any open subsections when opening a section
    }
  };

  const toggleSubsection = (sectionIndex, subsectionIndex) => {
    if (sectionIndex === openSection && subsectionIndex === openSubsection) {
      setOpenSubsection(null);
    } else {
      setOpenSection(sectionIndex);
      setOpenSubsection(subsectionIndex);
    }
  };

  return (
    <div className="relative h-full bg-black/40">
      <div className="h-full translate-y-16 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
        <div className="max-w-4xl mx-auto mb-12 p-4 pt-6 shadow-2xl rounded-lg">
          <h1 className="text-3xl font-semibold text-center pb-2 font-mono justify-center text-accent mb-4">Analysis of Low-Frequency Gravitational Wave Data</h1>
          {sections.map((section, index) => (
            <ExpandableSection
              key={index}
              title={`${index + 1}. ${section.title}`}
              isOpen={openSection === index}
              toggle={() => toggleSection(index)}
            >
              {section.subsections.map((subsection, subIndex) => (
                <Subsection
                  key={subIndex}
                  title={`${index + 1}.${subIndex + 1} ${subsection.title}`}
                  isOpen={openSubsection === subIndex && openSection === index}
                  toggle={() => toggleSubsection(index, subIndex)}
                >
                  <MathJaxWrapper content={subsection.content} />

                  {/* Check if there's code for this subsection */}
                  {subsection.code && (
                    <LiveProvider code={subsection.code}>
                      <LiveEditor />
                      {/* <LiveError /> */}
                      <LivePreview />
                    </LiveProvider>
                  )}
                </Subsection>
              ))}
            </ExpandableSection>
          ))}
        </div>
      </div>
    </div>
  );
};


export default GW;
