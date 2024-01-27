import React, { useState, useRef } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import SectionListSidebar from '../../../components/SectionListSidebar';
// import ScrollToTop from 'react-scroll-to-top';

const Electromag = () => {
    const sections = [
        {
            title: 'Specific Intensity',
            subsections: [
                {
                    title: 'Introduction',
                    content: `When \\(a \\ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$`
                },
                {
                    title: 'Equations',
                    content: 'Here are the equations related to specific intensity...',
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
                    \\[
                        \\Phi = \\int \\vec{E} \\cdot \\vec{dA}    
                    \\]
                    `,
                },
                // Add more subsections
            ],
        },
        // Add more sections
    ];

  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);
  const contentRef = useRef(null); // Reference to the content container

  const toggleSection = (sectionIndex) => {
    if (sectionIndex === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionIndex);
      setOpenSubsection(null);
      scrollToSection(sectionIndex);
    }
  };

  const toggleSubsection = (subsectionIndex) => {
    if (subsectionIndex === openSubsection) {
      setOpenSubsection(null);
    } else {
      setOpenSubsection(subsectionIndex);
      scrollToSection(openSection, subsectionIndex);
    }
  };

  const scrollToSection = (sectionIndex, subsectionIndex = null) => {
    if (contentRef.current && sectionIndex !== null) {
      const sectionElement = contentRef.current.querySelector(`#section-${sectionIndex}`);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative h-full flex">
      <SectionListSidebar sections={sections} onSectionClick={toggleSection} />
      <div className="flex-1 h-full overflow-y-auto scroll-smooth overflow-visible overscroll-y-auto pb-24 pt-4" ref={contentRef}>
        <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
          <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Electricity and Magnetism</h1>
          {sections.map((section, index) => (
            <div id={`section-${index}`} key={index}>
              <ExpandableSection
                title={`${index + 1}. ${section.title}`}
                isOpen={openSection === index}
                toggle={() => toggleSection(index)}
                hasSubsections={section.subsections && section.subsections.length > 0}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electromag;