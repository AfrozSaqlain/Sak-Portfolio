import React, { useState } from 'react';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

const Condensed_Matter = () => {
  const sections = [
    {
      title: 'X-Ray Diffraction',
      subsections: [
        {
          title: 'Introduction',
          content: 'This is the introduction to specific intensity...',
        },
        {
          title: 'Equations',
          content: `Here are the equations related to specific intensity...
                    \\[
                        \\phi = \\int_0^1 x dx    
                    \\]
                    `,
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
        },
        // Add more subsections
      ],
    },
    // Add more sections
  ];

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

  const toggleSubsection = (subsectionIndex) => {
    if (subsectionIndex === openSubsection) {
      setOpenSubsection(null);
    } else {
      setOpenSubsection(subsectionIndex);
    }
  };

  return (
    <div className="relative h-full bg-black/40">
      <div className="h-full translate-y-16 overflow-y-auto scroll-smooth overflow-visible overscroll-y-auto pb-24 pt-4">
      {/* <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'> */}
        <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
          <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Condensed Matter Physics</h1>
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
                  toggle={() => toggleSubsection(subIndex)}
                >
                  <MathJaxWrapper content={subsection.content} />
                </Subsection>
              ))}
            </ExpandableSection>
          ))}
        </div>
        {/* </SimpleBar> */}
      </div>
    </div>
  );
};

export default Condensed_Matter;
