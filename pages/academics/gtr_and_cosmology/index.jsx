import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import CardLeft from '../../../components/CardLeft';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import Image from 'next/image';

const GtrAndCosmology = () => {
    const sections = [
        {
            title: 'Newtonian Spacetime',
                    content: `
                    
                    `
                },
        {
            title: 'Lagrange Equation of Motion and Geodesic Equation',
                    content: `
                    We know that for a free particle (with no external force), \\( \\mathcal{L} = T - V \\), becomes \\( \\mathcal{L} = T \\) as \\( V = 0 \\).
                    <br/>
                    <br/>
                    <p class='underline underline-offset-8 text-white inline-block font-semibold'>General Form </p> : \\( T = M_0 + \\sum\\limits_{\\substack{j}} M_j \\hspace{1pt} \\dot{q}_j + \\frac{1}{2} \\sum\\limits_{\\substack{jk}} M_{jk} \\hspace{1pt} \\dot{q}_j \\hspace{1pt} \\dot{q}_k \\)
                    <br/>
                    Assumption : \\( M_0 = 0 \\) (scalar) and \\( M_j = 0 \\) (vector). Thus,
                    \\[
                        T = \\frac{1}{2} \\sum\\limits_{\\substack{jk}} M_{jk} \\hspace{1pt} \\dot{q}_j \\hspace{1pt} \\dot{q}_k = \\mathcal{L} 
                    \\]
                    As generalized coordinates depend on degree of freedom. So, 1 particles will have 3 d.o.f and N-particles will have 3N d.o.f which implies \\( j \\to 1, \\hspace{2pt} 3N \\). We will use only single particles, thus we have \\( q_i = x^i \\implies \\dot{q}_i = \\dot{x}^i \\) and instead of \\( M_{jk} \\) we write \\( g_{jk} \\). Thus,
                    \\[
                        \\begin{align}
                           \\mathcal{L} = T &= \\frac{1}{2} \\sum\\limits_{\\substack{jk}} g_{ij} \\hspace{1pt} \\dot{x}^i \\hspace{1pt} \\dot{x}^j\\\\
                           \\mathcal{L} &= \\frac{1}{2} g_{ij} \\hspace{1pt} \\dot{x}^i \\hspace{1pt} \\dot{x}^j
                        \\end{align}
                    \\]
                    Note that \\( g_{ij} \\) is symmetric matrix \\( \\implies g{ij} = g_{ji} \\). Also, \\( \\dot{x}^i \\hspace{1pt} \\dot{x}^j \\) is symmetric, which we can see very easily as:
                    \\[
                        \\begin{pmatrix}
                        \\dot{x}^1 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^1 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^1 \\hspace{1pt} \\dot{x}^3\\\\
                        \\dot{x}^2 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^2 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^2 \\hspace{1pt} \\dot{x}^3\\\\
                        \\dot{x}^3 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^3 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^3 \\hspace{1pt} \\dot{x}^3\\\\
                        \\end{pmatrix}
                    \\]
                    We go from cartesian to polar coordinates as \\( x = r \\cos{\\theta} \\) and \\( y = r \\sin{\\theta} \\). And hence kinetic energy will transform from \\( K.E. = \\frac{1}{2} (\\dot{x}^2 + \\dot{y}^2) \\) to \\( K.E. = \\frac{1}{2} (\\dot{r}^2 + r^2 \\dot{\\theta}^2) \\). But let's say we do coordinate transformationin polar coordinate itself as
                    \\[
                        \\begin{align}
                            \\theta &\\to \\theta' + \\omega t\\\\
                            \\implies \\dot{\\theta} &\\to \\dot{\\theta}' + \\omega
                        \\end{align} 
                    \\]
                    Thus,
                    \\[
                        \\begin{align}
                            K.E. &= \\frac{1}{2} [\\dot{r}^2 + r^2(\\dot{\\theta}' + \\omega)^2]\\\\
                            &= \\frac{1}{2} [\\underbrace{\\dot{r}^2 + r^2\\dot{\\theta}'^2}_{\\text{2nd order in geralized velocity}} + \\underbrace{r^2 \\omega^2}_{\\text{scalar}} + \\underbrace{2 \\omega \\dot{\\theta}' r^2}_{\\text{1st order in geralized velocity}}]
                        \\end{align} 
                    \\]
                    We are interested in coordinate system which allows only 2nd order in geralized velocity terms.
                    <br/>
                    <br/>
                    We know that Lagrange's Equation of motion is given as
                    \\[
                        \\frac{d}{dt} \\underbrace{\\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{x}^i} \\right)}_{\\text{generalized momenta}} = \\frac{\\partial \\mathcal{L}}{\\partial x^i}

                    \\]
                    <div class='bg-slate-50/10 p-1 rounded-md'>
                        \\[
                            \\begin{align}
                                p_i &= \\frac{\\partial}{\\partial \\dot{x}^i} \\left[ \\frac{1}{2} \\hspace{2pt} g_{jk} \\hspace{2pt} \\dot{x}^j \\hspace{2pt} \\dot{x}^k \\right]\\\\
                                &= \\frac{1}{2} g_{jk} [\\hspace{2pt} \\dot{x}^k \\delta^j_i + \\dot{x}^j \\delta^k_j \\hspace{2pt}]\\\\
                                &= \\frac{1}{2} g_{ik} \\hspace{2pt} \\dot{x}^k + \\frac{1}{2} g_{ji} \\hspace{2pt} \\dot{x}^j\\\\
                                &= \\frac{1}{2} g_{il} \\hspace{2pt} \\dot{x}^l + \\frac{1}{2} g_{li} \\hspace{2pt} \\dot{x}^l\\\\
                                &= g_{il} \\hspace{2pt} \\dot{x}\\\\
                            \\end{align}
                        \\]
                        So,
                        \\[
                            \\frac{d}{dt} \\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{x}^i} \\right) = \\frac{d}{dt} (g_{il} \\hspace{2pt} \\dot{x}^l) = \\frac{\\partial}{\\partial t} g_{il} \\hspace{2pt} \\dot{x}^l + \\frac{\\partial}{\\partial x^k} g_{il} \\hspace{2pt} \\frac{d x^k}{dt} \\dot{x}^l + g_{il} \\hspace{2pt} \\ddot{x}^l
                        \\]
                        When \\( \\mathcal{L} \\) does not explicitly depend on time, the first term goes to zero, as \\( V=0 \\).
                    </div>
                    `
                },
        {
            title: 'Light Cone and STR',
                    content: `
                    
                    `
                },
        {
            title: 'New Dynamics',
                    content: `
                    
                    `
                },
        {
            title: 'Introduction to the Tensors',
                    content: `
                    
                    `
                },
        {
            title: 'Invariance of Proper Time',
                    content: `
                    
                    `
                },
        {
            title: 'The Metric Tensor',
                    content: `
                    
                    `
                },
    ];

    const [openSection, setOpenSection] = useState(null);
    const [openSubsection, setOpenSubsection] = useState(null);

    const toggleSection = (sectionIndex) => {
        if (sectionIndex === openSection) {
            setOpenSection(null);
        } else {
            setOpenSection(sectionIndex);
            setOpenSubsection(null);
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
                        {processContent('General Relativity and Cosmology')}
                    </h1>
                    {sections.map((section, index) => (
                        <ExpandableSection
                            key={index}
                            title={processContent(`${index + 1}. ${section.title}`)}
                            isOpen={openSection === index}
                            toggle={() => toggleSection(index)}
                            hasSubsections={section.subsections && section.subsections.length > 0}
                        >
                            {section.subsections && section.subsections.length > 0 && (
                                <>
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
                                </>
                            )}
                            {section.content && processContent(section.content)}
                        </ExpandableSection>
                    ))}
                    <div className="flex justify-center">
                        <div className="lg:hidden pb-2 mb-10">
                            <CardLeft link="/notes/gr.pdf" place="David Tong's Lecture" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="hidden lg:flex fixed bottom-0 left-0 p-4">
                <CardLeft link="/notes/gr.pdf" place="David Tong's Lecture" />
            </div>
        </div>
    );
};


export default GtrAndCosmology;
