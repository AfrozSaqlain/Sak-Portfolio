import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';

const Electromag = () => {
    const sections = [
        {
            title: 'Doing calculus on \\( \\mathbb{R}^n \\)',
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

    const processContent = (content) => <MathJaxWrapper content={content} />;

    return (
        <div className="relative h-full bg-black/40">
            <div className="h-full translate-y-16 overflow-y-auto scroll-smooth overflow-visible overscroll-y-auto pb-24 pt-4">
                <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                    <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">
                        {processContent('Differential Geometry')}
                    </h1>
                    {sections.map((section, index) => (
                        <ExpandableSection
                            key={index}
                            title={processContent(`${index + 1}. ${section.title}`)}
                            isOpen={openSection === index}
                            toggle={() => toggleSection(index)}
                        >
                            {section.subsections.map((subsection, subIndex) => (
                                <Subsection
                                    key={subIndex}
                                    title={processContent(`${index + 1}.${subIndex + 1} ${subsection.title}`)}
                                    isOpen={openSubsection === subIndex && openSection === index}
                                    toggle={() => toggleSubsection(subIndex)}
                                >
                                    {processContent(subsection.content)}
                                </Subsection>
                            ))}
                        </ExpandableSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Electromag;
