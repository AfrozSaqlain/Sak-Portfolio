import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';

const Astro = () => {
    const sections = [
        {
            title: 'Specific Intensity',
            subsections: [
                {
                    title: 'Introduction',
                    content: 'This is the inline equation \\(\\alpha\\)',
                },
                {
                    title: 'Equations',
                    content: 'This is block equation \\[\\alpha\\]',
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
                    content: 'How to calculate the total flux...',
                },
                // Add more subsections
            ],
        },
        // Add more sections
    ];

    return (
        <div className="relative h-full">
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-2xl font-semibold text-center font-mono justify-center text-accent mb-4">Astrophysics</h1>
                        {sections.map((section, index) => (
                            <ExpandableSection key={index} title={`${index + 1}. ${section.title}`}>
                                {section.subsections.map((subsection, subIndex) => (
                                    <Subsection
                                        key={subIndex}
                                        title={`${index + 1}.${subIndex + 1} ${subsection.title}`}
                                    >
                                        <MathJaxWrapper content={subsection.content} />
                                    </Subsection>
                                ))}
                            </ExpandableSection>
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
};

export default Astro;
