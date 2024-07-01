import React, { useState } from 'react';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import MarkdownWithKaTeX from '../../../components/MarkdownWithKaTeX';

const Condensed_Matter = () => {
  const sections = [
    {
      title: 'Total Flux',
      subsections: [
        {
          title: 'Definition',
          content: `# Hello, world! \n\n This is a **markdown** string with some inline math: $x^2 + y^2 = z^2$. \n \n ## Computer \n $\\int_0^1 e^x dx$
          `,
        },
        {
          title: 'Calculation',
          content: `How to calculate the total flux...
          `,
        },
      ],
    },
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
        <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl md:w-[70rem] md:-translate-x-10 rounded-lg">
          <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Condensed Matter Physics</h1>
          {sections.map((section, index) => (
            <ExpandableSection
              key={index}
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
                  <MarkdownWithKaTeX content={subsection.content} />
                </Subsection>
              ))}
            </ExpandableSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Condensed_Matter;


