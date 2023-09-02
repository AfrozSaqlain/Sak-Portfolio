import React from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';

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

    return (
        <div className="relative h-full bg-black/40">
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Condensed Matter Physics</h1>
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

export default Condensed_Matter;
