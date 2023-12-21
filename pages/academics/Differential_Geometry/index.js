import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import Image from 'next/image';

const Electromag = () => {
    const sections = [
        {
            title: 'Doing calculus on \\( \\mathbb{R}^n \\)',
            subsections: [
                {
                    title: 'Introduction',
                    content: `
                    Elementary calculus works best for functions like \\( f : \\mathbb{R} \\to \\mathbb{R} \\), and with some tweaks we can make clculus work for functions like \\( g : \\mathbb{R}^m \\to \\mathbb{R}^n \\). Howver, in physics we need much more general functions like \\( h : U \\to V \\). Elementary calculus cannot be used in this sense, unless we have some help and that help is provided by Differentiable Manifolds.
                    <br/>
                    <br/>
                    Lets' recallthe definition of derivative from our elementary calculus 
                    \\[
                        f'(x) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}    
                    \\]

                    Some properties of real numbers that have been used in this definition are:
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> Cauchy Completeness </li>
                        <li class="mb-2"> \\( x_0 + h \\implies \\) addition must make sense (on domain) </li>
                        <li class="mb-2"> \\( f(x_0 + h) - f(x_0) \\implies \\) subtraction must work (on the range) </li>
                        <li class="mb-2"> \\( \\frac{f(x_0 + h) - f(x_0)}{h} \\implies \\) division must work </li>
                    </ul>

                    Now let's see what's the problem in doing calculus on \\( f : \\mathbb{R}^m \\to \\mathbb{R}^n \\)
                    \\[
                        \\lim_{\\vec{h} \\to 0} \\frac{\\vec{f}(\\vec{x_0} + \\vec{h}) - \\vec{f}(\\vec{x_0})}{\\vec{h}}    
                    \\]

                    The problem is that we cannot devide one vector with another of arbitrary dimensions.

                    <p class='text-center text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>The Differential</p>

                    Key Idea: A small enough piece of any smooth curve is like a straight line.
                    <Image
                        src="/differential_geometry/differential.png"
                        alt="differential"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> \\( f(x+h) = f(x) + f'(x)h + \\Delta \\) where \\( \\Delta \\) vanishes very fast as \\( h \\to 0 \\) for a smooth curve, <br/> 
                        \\[
                            \\lim_{|h| \\to 0} \\frac{|\\Delta|}{|h|} = 0
                        \\]
                        </li>
                        <li class="mb-2"> \\( f'(x)h \\) is the value of a map that takes h to \\( f'(x)h \\): a linear map ( let's call it \\( Df|_x \\) ) </li>
                    </ul>

                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Equivalent definition of differentiability</p>
                    A function \\( f : \\mathbb{R} \\to \\mathbb{R} \\) is differentiable at \\( x \\in \\mathbb{R} \\), if \\( \\exists \\) a linear map \\( Df|_x : \\mathbb{R} \\to \\mathbb{R} \\) such that 
                    \\[
                        \\lim_{|h| \\to 0} \\frac{| f(x+h) -f(x) - Df|_x (h) |}{|h|} = 0
                    \\] 
                    where \\( Df|_x (h) = f'(x)h \\). And we can easilty prmote this definition for a function of form \\( f: \\mathbb{R}^m \\to \\mathbb{R}^n \\).
                    <br/>
                    <br/>
                    A function \\( f: \\mathbb{R}^m \\to \\mathbb{R}^n \\) is differentiable at \\( x \\in \\mathbb{R}^m \\), if \\( \\exists \\) a linear map \\( Df|_x : \\mathbb{R}^m \\to \\mathbb{R}^n \\) such that 
                    \\[
                        \\lim_{||h|| \\to 0} \\frac{|| f(x+h) -f(x) - Df|_x (h) ||}{||h||} = 0
                    \\] 

                    `
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
