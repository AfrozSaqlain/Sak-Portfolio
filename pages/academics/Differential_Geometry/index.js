import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import Image from 'next/image';

const Electromag = () => {
    const sections = [
        {
            title: 'Doing calculus on \\( \\mathbb{R}^n \\)',
            
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

                    The linear map \\( Df|_x \\), if it exists, is the differential of \\(f\\) at \\(x\\).
                    <br/>
                    <br/>
                    For \\( f : \\mathbb{R}^n \\to \\mathbb{R} \\), \\( Df|_x \\) is a linear map from \\( \\mathbb{R}^n \\to \\mathbb{R} \\) and must be of the form: 
                    \\[
                        \\begin{align}
                        Df|_x (h) &= D_1 f|_x h^1 + D_2 f|_x h^2 + \\ldots + D_n f|_x h^n \\\\
                        &= D_i f|_x h^i
                        \\end{align}
                    \\]
                    <br/>
                    What is \\( D_i f|_x h^i \\) ? To see this, let's consider \\( h = (h^1, 0, 0, \\ldots, 0) \\). Now,
                    \\[
                        \\begin{align}
                            &\\lim_{|h| \\to 0} \\frac{| f(x+h) -f(x) - D_1f|_x h^1 |}{|h^1|} = 0\\\\
                            &\\implies D_1f|_x = \\lim_{|h^1| \\to 0} \\frac{| f(x^1+h^1, x^2, \\ldots, x^n) -f(x^1, x^2, \\ldots, x^n)|}{|h^1|}\\\\
                            &\\equiv \\text{ partial derivative of } f \\text{ wrt } x^1 \\text{ at the point } (x^1, x^2, \\ldots, x^n)
                        \\end{align}  
                    \\]
                    Thus,
                    \\[
                    df = \\left( \\frac{\\partial f}{\\partial x^1} \\right) dx^1 + \\left( \\frac{\\partial f}{\\partial x^2} \\right) dx^2 + \\ldots + \\left( \\frac{\\partial f}{\\partial x^n} \\right) dx^n = \\left( \\frac{\\partial f}{\\partial x^i} \\right) dx^i
                    \\]

                    We reserve the more common notation \\( \\frac{\\partial f}{\\partial x^i} \\big|_{(x^1, x^2, \\ldots, x^n)} \\) for a related, but slightly different purpose.
                    <br/>
                    <br/>
                    A function \\( f : \\mathbb{R}^m \\to \\mathbb{R}^n \\) can be thought of as n-tuple of n-functions \\( (f^1, f^2, \\ldots, f^n) \\) ,each of m real variables. So,
                    \\[
                        Df|_x (h) = \\begin{pmatrix} Df^1|_x (h) \\\\ Df^2|_x (h) \\\\ \\vdots \\\\ Df^n|_x (h) \\end{pmatrix} = \\begin{pmatrix} D_1 f^1|_x h^1 + D_2 f^1|_x h^2 + \\ldots + D_m f^1|_x h^m \\\\ D_1 f^2|_x h^1 + D_2 f^2|_x h^2 + \\ldots + D_m f^2|_x h^m \\\\ \\vdots \\\\ D_1 f|_x h^1 + D_2 f|_x h^2 + \\ldots + D_m f^n|_x h^m \\end{pmatrix}
                    \\]
                    Thus, \\(Df\\) can be represented by Jacobian matrix \\( Df|_x (h) = Jh \\), where 
                    \\[
                        J = \\begin{pmatrix}    
                        D_1f^1|_x & D_2f^1|_x \\ldots D_mf^1|_x \\\\
                        D_1f^2|_x & D_2f^2|_x \\ldots D_mf^2|_x \\\\
                        \\vdots \\\\
                        D_1f^n|_x & D_2f^n|_x \\ldots D_mf^n|_x \\\\
                        \\end{pmatrix}
                    \\]
                    <br/>
                    <div class='bg-slate-50/10 p-1 rounded-md'>
                    Can the definition of differentiability be extended to the case when the domain is a subset of \\( \\mathbb{R}^m \\), i.e. for \\( f : U \\subset \\mathbb{R}^m \\to \\mathbb{R}^n \\) ?
                    <br/>
                    We should be able to make sense of \\( f(x+h) \\forall x \\in U \\), atleast if \\( ||h|| \\) is small enough. So, \\(U\\) must be open set of \\( \\mathbb{R}^m \\). We can talk of differentiability on a closed set, but the problem will arise for points on the boundary.
                    </div>
                    <br/>
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Manifolds: a more general setting for calculus</p>
                    Let \\( \\mathscr{M} \\) be a set. A chart \\( (U, \\phi) \\) on \\( \\mathscr{M} \\) is an ordered pair, where \\( U \\subset \\mathscr{M} \\) and \\( \\phi : U \\to \\mathbb{R}^n \\) is a 1-1 map with \\( \\phi(U) \\) an open subset of \\( \\mathbb{R}^n \\).
                    `
                },
                // Add more subsections
        {
            title: 'Charts on Manifolds',
            subsections: [
                {
                    title: 'Part 1',
                    content: 'The definition of total flux...',
                },
                {
                    title: 'Part 2',
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
                        {processContent('Differential Geometry')}
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
                </div>
            </div>
        </div>
    );
};


export default Electromag;
