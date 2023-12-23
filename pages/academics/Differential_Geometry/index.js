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
                    content: `
                    <Image
                        src="/differential_geometry/2.png"
                        alt="chart"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    A chart assigns coordinates \\( (x^1, x^2, \\ldots , x^n) \\) to every point \\( p \\in U \\subset M \\). 
                    <br/>
                    <br/>
                    \\( \\phi(p) = (x^1(p), x^2(p), \\ldots , x^n(p)) : x^i : M \\to \\mathbb{R} \\) is the i-th coordinate funtion for the chart \\( (U, \\phi) \\).
                    <br/>
                    <br/>
                    Since, \\( \\phi : U \\to \\mathbb{R}^n \\) is \\( 1 - 1 \\), it is invertible, if the range is restricted to \\( \\phi(U) \\), and we denote \\( \\phi^{-1} \\), the inverse map from \\( \\phi(U) \\) to \\( M \\).
                    <br/>
                    <br/>
                    Given a function \\( f : M \\to \\mathbb{R} \\), we can seek answer to the question, "is \\(f\\) differentiable at \\(p\\)" by looking at whether \\( F = f \\hspace{1pt} o \\hspace{1pt} \\phi^{-1} : \\phi(U) \\to \\mathbb{R} \\) is differentiable .at \\( \\phi(p) \\in \\mathbb{R}^n \\). Of course this will make sense only if we take \\( p \\in U \\).
                    <Image
                        src="/differential_geometry/3.png"
                        alt="chart"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Note - \\(M\\) is not manifold yet. Manifold is the set \\(M\\) in addition to the differential structure on it.
                    <br/>
                    <br/>
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Some examples of charts</p>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> 
                            \\( M = \\mathbb{R}^n, \\hspace{4pt} U = M, \\hspace{4pt} \\phi = id \\)<br/>
                            \\( \\mathbb{R}^n, id \\) is a chart on \\( \\mathbb{R}^n \\). The coordinate assigned to a point \\(p\\) here is trivially the components of \\(p\\). Two important points that tells how \\( \\mathbb{R}^n, id \\) satisfies as chart are:
                            <ul class='list-disc ml-8 my-1'>
                            <li class="mb-1"> 
                                The map \\(id\\) is \\(1 - 1\\)
                            </li>
                            <li class="mb-1"> 
                                \\( id(\\mathbb{R}^n) = \\mathbb{R}^n \\) is an open set in \\( \\mathbb{R}^n \\)
                            </li>
                        </ul>
                        </li>
                        <li class="mb-2"> 
                        \\( M = \\mathbb{R}^2, \\hspace{4pt} (U,\\phi) \\implies \\) polar coordinates on \\( \\mathbb{R}^2 \\)<br/>
                        \\[ \\phi : (x,y) \\to (r,\\theta) \\text{ , where } \\begin{cases}
                            x = r \\cos(\\theta) \\\\
                            y = r \\sin(\\theta) \\\\
                            \\end{cases} 
                        \\]
                        This function is not well defined at \\( (0,0) \\). We could try \\( U = \\mathbb{R}^2 \\hspace{2pt} \\backslash {(0,0)} \\), but then \\( \\phi(U) = (0, \\infty) \\times [0,2\\pi) \\to \\) not an open set (the points \\( (r, 0) \\) are boundary points). A possible choice is \\( U = \\mathbb{R}^2 \\hspace{2pt} \\backslash \\{(x,0) : x \\geq 0\\} \\) and in this case \\( \\phi(U) = (0,\\infty) \\times (0,2\\pi) \\to \\) open set.
                        </li>
                        <li class="mb-2"> 
                            \\( M = \\text{Mat}(2, \\mathbb{R}) \\) = the set of all \\( 2 \\times 2 \\) real matrices, \\( U = M, \\phi : U \\to \\mathbb{R}^4 \\) such that \\[ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\to (a, b, c, d) \\]
                            This map is obviously \\(1 - 1 \\) and \\( \\phi(U) = \\mathbb{R}^4 \\) is an open set.
                        </li>
                        <li class="mb-2"> 
                            \\( M = \\text{GL}(2, \\mathbb{R}) = \\{A \\in \\text{M}(2, \\mathbb{R}) : det A \\neq 0 \\} \\) \\[
                                    = \\left\\{ \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} : (a, b, c, d) \\in \\mathbb{R}^4 \\hspace{2pt} \\text{ and } \\hspace{2pt} ad-bc \\neq 0 \\right\\}
                                \\]
                                \\( U = M \\text{GL}(2, \\mathbb{R}), \\phi : U \\to \\mathbb{R}^4 \\)
                                <br/>
                                <br/>
                                This is obviously \\(1-1\\) map. Now, \\( \\phi(U) = \\mathbb{R}^4 \\hspace{2pt} \\backslash \\{ (a,b,c,d) \\in \\mathbb{R}^4 : ad - bc = 0 \\} \\). Using the resuls from differential geometry of surfaces, we know that \\( \\{ (a,b,c,d) \\in \\mathbb{R}^4 : ad - bc = 0 \\} \\) is a level-set (hyper surface in \\( \\mathbb{R}^4 \\)) and if we take out a hyper surface from \\( \\mathbb{R}^4 \\), we are left with an open set.
                                <br/>
                                <br/>
                                <div class='bg-slate-50/10 p-1 rounded-md'>
                                But what if we don't know this result? How to know if \\( \\phi(U) \\) is an open set?
                                <br/>
                                <br/>
                                Let \\( x_0 \\in \\phi(U) \\). The distance of \\( x_0 \\) from \\( \\phi(U)^C = \\{ (a,b,c,d) \\subset \\mathbb{R}^4 : ad - bc = 0 \\} \\) is
                                \\[
                                    d = \\inf\\limits_{\\substack{x \\hspace{1pt} \\in \\hspace{1pt} \\phi(U)} } f(x)
                                \\]
                                where \\( d(x, x_0) \\to \\) euclidean distance between \\(x\\) amd \\(x_0\\) and inf \\(\\to\\) infimum of these bunch of distances as \\(x\\) ranges over the set.
                                <br/>
                                <br/>
                                It is intuitively obvious that \\( d > 0 \\). Then, \\( B_{x_0}(d) \\cap \\phi(U)^C = \\{\\} \\), where \\( B_{x_0}(d) \\) is a ball of radius \\(d\\) surrounding \\(x_0\\), which implies \\( B_{x_0}(d) \\subset \\phi(U) \\). So, \\( \\phi(U) \\) is open set.
                                </div>
                                <br/>
                                <div class='bg-slate-50/10 p-1 rounded-md'>
                                Is \\(d\\) really \\( > 0\\)?
                                <br/>
                                <br/>
                                Let's try to minimize \\( (x^1 - x^1_0)^2 + (x^2 - x^2_0)^2 + (x^3 - x^3_0)^2 + (x^4 - x^4_0)^2 \\) subject to \\( x^1x^4 - x^2x^3 = 0 \\). Use Lagrange multiplier:
                                \\[
                                    (x^1 - x^1_0)dx^1 + (x^2 - x^2_0)dx^2 + (x^3 - x^3_0)dx^3 + (x^4 - x^4_0)dx^4 + \\lambda (x^4dx^1 - x^3 dx^2 - x^2 dx^3 + x^1 dx^4) = 0
                                \\]
                                <br/>
                                This gives us four sets of equations, which are:
                                \\[
                                    \\begin{align}
                                        x^1 + \\lambda x^4 &= x^1_0\\\\
                                        x^2 - \\lambda x^3 &= x^2_0\\\\
                                        x^3 - \\lambda x^2 &= x^3_0\\\\
                                        x^4 + \\lambda x^1 &= x^4_0\\\\
                                    \\end{align}
                                \\]
                                Now,
                                \\[
                                    \\begin{align}
                                \\begin{pmatrix}
                                x^1 \\\\ x^4
                                \\end{pmatrix} &= \\begin{pmatrix}
                                1 & \\lambda \\\\ \\lambda & 1
                                \\end{pmatrix}^{-1} \\begin{pmatrix}
                                x^1_0 \\\\ x^4_0
                                \\end{pmatrix} = (1 - \\lambda^2)^{-1} \\begin{pmatrix}
                                x^1_0 - \\lambda x^4_0 \\\\ -\\lambda x^1_0 + x^4_0
                                \\end{pmatrix} \\\\
                                \\begin{pmatrix}
                                x^2 \\\\ x^3
                                \\end{pmatrix} &= \\begin{pmatrix}
                                1 & \\lambda \\\\ \\lambda & 1
                                \\end{pmatrix}^{-1} \\begin{pmatrix}
                                x^2_0 \\\\ x^3_0
                                \\end{pmatrix} = (1 - \\lambda^2)^{-1} \\begin{pmatrix}
                                x^2_0 - \\lambda x^3_0 \\\\ -\\lambda x^2_0 + x^3_0
                                \\end{pmatrix}
                                \\end{align}
                                \\]
                                Now applying the constraint, i.e. \\( x^1x^4 = x^2x^3 \\) we get
                                \\[
                                    \\begin{align}    
                                        &\\implies (x^1_0 - \\lambda x^4_0)(-\\lambda x^1_0 + x^4_0) = (x^2_0 + \\lambda x^3_0)(\\lambda x^2_0 + x^3_0) \\\\
                                        &\\implies \\lambda^2 - \\lambda \\frac{(x^1_0)^2 + (x^2_0)^2 + (x^3_0)^2 + (x^4_0)^2}{x^1_0 x^4_0 - x^2_0 x^3_0} + 1 = 0 \\\\
                                        &\\implies \\lambda \\neq 0
                                    \\end{align}
                                \\]
                                Discriminant \\( \\geq 0 \\)
                                \\[
                                    \\begin{align}
                                        &\\implies (x^1_0)^2 + (x^2_0)^2 + (x^3_0)^2 + (x^4_0)^2 \\geq 2[x^1_0 x^4_0 - x^2_0 x^3_0] \\\\
                                        &\\implies (x^1_0 \\pm x^4_0)^2 + (x^2_0 \\mp x^3_0)^2 \\geq 0
                                    \\end{align}
                                \\]
                                \\( \\lambda \\) has real roots! For every \\( x_0 \\) we can find a point \\( x \\neq x_0 \\) which is at a minimum distance from it.
                                </div>
                        </li>
                    </ul>
                    `,
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
                <div className="max-w-4xl mx-auto mb-20 p-4 shadow-2xl rounded-lg">
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
