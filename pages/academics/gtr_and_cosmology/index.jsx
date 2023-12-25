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
                    <div class='bg-slate-50/10 p-1 rounded-md mb-3'>
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
                            \\begin{align}
                                \\frac{d}{dt} \\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{x}^i} \\right) &= \\frac{d}{dt} (g_{il} \\hspace{2pt} \\dot{x}^l) = \\frac{\\partial}{\\partial t} g_{il} \\hspace{2pt} \\dot{x}^l + \\frac{\\partial}{\\partial x^k} g_{il} \\hspace{2pt} \\frac{d x^k}{dt} \\dot{x}^l + g_{il} \\hspace{2pt} \\ddot{x}^l\\\\
                                \\frac{dp_i}{dt} &= \\frac{\\partial \\hspace{1pt} g_{ij}}{\\partial x^k} \\hspace{2pt} \\dot{x}^k \\dot{x}^j + g_{ij} \\hspace{2pt} \\ddot{x}^j
                            \\end{align}
                        \\]
                        When \\( \\mathcal{L} \\) does not explicitly depend on time, the first term goes to zero, as \\( V=0 \\). Now,
                        \\[
                            \\begin{align}
                                \\frac{\\partial \\mathcal{L}}{\\partial x^i} &= \\frac{\\partial}{\\partial x^i} \\left[ \\frac{1}{2} g_{kl} \\hspace{1pt} \\dot{x}^k \\dot{x}^l \\right]\\\\
                                &= \\frac{1}{2} \\frac{\\partial \\hspace{1pt} g_{kl}}{\\partial x^i} \\dot{x}^k \\dot{x}^l
                            \\end{align}
                        \\]
                    </div>
                    Thus we get 
                    \\[
                        \\begin{align}
                            g_{ij} \\hspace{2pt} \\ddot{x}^j + \\frac{\\partial g_{ij}}{\\partial x^k} \\dot{x}^j \\dot{x}^k - \\frac{1}{2} \\frac{\\partial g_{jk}}{\\partial x^i} \\dot{x}^j \\dot{x}^k &= 0\\\\
                            g_{ij} \\hspace{2pt} \\ddot{x}^j + \\frac{1}{2} \\frac{\\partial g_{ij}}{\\partial x^k} \\dot{x}^j \\dot{x}^k + \\frac{1}{2} \\frac{\\partial g_{ik}}{\\partial x^j} \\dot{x}^j \\dot{x}^k - \\frac{1}{2} \\frac{\\partial g_{jk}}{\\partial x^i} \\dot{x}^j \\dot{x}^k &= 0\\\\
                            g_{ij} \\hspace{2pt} \\ddot{x}^j + \\frac{1}{2} \\left[ \\frac{\\partial g_{ij}}{\\partial x^k} + \\frac{\\partial g_{ik}}{\\partial x^j} - \\frac{\\partial g_{jk}}{\\partial x^i} \\right] \\dot{x}^j \\dot{x}^k &= 0
                        \\end{align}
                    \\]
                    Note that we symmetrize just \\( j \\text{ and } k \\) by \\( A_{ik} = \\frac{1}{2}[A_{ik} + A_{ki}] \\).
                    <br/>
                    <br/>
                    Let \\( g^{ij} \\) be the inverse matrix of \\( g_{ij} \\). So, \\( g^{ij}g_{jl} = \\delta^i_l \\). And let's multiply the previous equation by \\( g^{li} \\), thus getting
                    \\[
                        \\begin{align}
                            g^{li} g_{ij} \\hspace{2pt} \\ddot{x}^j + \\frac{1}{2} g^{li} \\left[ \\frac{\\partial g_{ij}}{\\partial x^k} + \\frac{\\partial g_{ik}}{\\partial x^j} - \\frac{\\partial g_{jk}}{\\partial x^i} \\right] \\dot{x}^j \\dot{x}^k &= 0\\\\
                            \\delta^l_j \\hspace{2pt} \\ddot{x}^j + \\frac{1}{2} g^{li} \\left[ \\frac{\\partial g_{ij}}{\\partial x^k} + \\frac{\\partial g_{ik}}{\\partial x^j} - \\frac{\\partial g_{jk}}{\\partial x^i} \\right] \\dot{x}^j \\dot{x}^k &= 0
                        \\end{align}
                    \\]
                    <div class='bg-blue-300/30 px-3 py-[0.1pt] rounded-md my-1 mx-auto max-w-max'>
                        \\[
                            \\ddot{x}^l + \\Gamma^{l}_{jk} \\dot{x}^j \\dot{x}^k = 0
                        \\]
                    </div>
                    This is known as Geodesic Equation. As Lagrangian is obtained by minimizing the K.E., which gives the shortest or least energy path between the points, which gives us geodesic motion.
                    `
                },
        {
            title: 'Light Cone and STR',
                    content: `
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Velocity and Inertial Frames</p>
                    Let \\( \\mathcal{O}_1 \\) and \\( \\mathcal{O}_2 \\) be two inertial frames. Let \\( \\mathcal{O}_2 \\) be moving with a velocity \\( \\vec{v} \\) wrt. \\( \\mathcal{O}_1 \\). If a particle has velocity \\( \\vec{u}_2 \\) on frame \\( \\mathcal{O}_2 \\) and \\( \\vec{u}_1 \\) on frame \\( \\mathcal{O}_1 \\), with \\( \\vec{u}_1 = \\vec{u}_2 + \\vec{v} \\).
                    <br/>
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Basic Postulates about speed of light in STR</p>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> Speed of light is same in all reference frames. </li>
                        <li class="mb-2"> It is independent of velocity of emitter, observer and direction of propagation. </li>
                    </ul>
                    <Image
                        src="/gtr_and_cosmo/1.png"
                        alt="speed_of_c_in_different_frames"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    These two observers should not be seeing the velocity of light as different. However, the Galiliean transformation says that the velocity should change as \\( c+v \\text{ and } c-v \\), respectively. One way this can happen is, if observers \\( \\mathcal{O}_1 \\) and \\( \\mathcal{O}_2 \\) don't follow the same clock. By fixing speed of light, we lost the concept of global time and now the time depends on frame.
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Idea of Space Time</p>
                    Minkowski developed the idea of spacetime, in which each inertial frame is represented by space and time. In fact,time becomes one of the dynamical degrees pf freedom. Each event is represented by four quantity, one time and three spatial coordinates. For example - \\( A = \\{ t_1, x_1, y_1, z_1 \\} \\) and \\( B = \\{ t_2, x_2, y_2, z_2 \\} \\) and so on. The distance between them is called spacetime interval and is given by
                    \\[
                        ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2    
                    \\]
                    The fact that nothing can travel faster than light, divides the spacetime events into time-like, light-like and space-like seperated.
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Light Cone</p>
                    For an observer, all event can be classified into three types. Let \\( A = \\{ t_1, x_1, y_1, z_1 \\} \\) and \\( B = \\{ t_2, x_2, y_2, z_2 \\} \\) be two spacetime events. The spacetime interval between them is given by
                    \\[
                        \\begin{align}
                            ds^2 &= c^2 dt^2 - dx^2 - dy^2 - dz^2 \\\\
                            ds^2 &= c^2 (t_2 - t_1)^2 - (x_2 - x_1)^2 - (y_2 - y_1)^2 - (z_2 - z_1)^2
                        \\end{align}
                    \\]
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> <p class='font-bold text-white inline-block'>Timelike : </p> The events A and B are timelike if the spacetime interval \\( ds^2 > 0 \\). The event can exchange signal with the help of massive particle or light. </li>
                        <li class="mb-2"> <p class='font-bold text-white inline-block'>Lightlike or Null : </p> The events A and B are timelike if the spacetime interval \\( ds^2 = 0 \\). The event can exchange signal with the help of light only. </li>
                        <li class="mb-2"> <p class='font-bold text-white inline-block'>Spacelike : </p> The events A and B are timelike if the spacetime interval \\( ds^2 < 0 \\). These events cannot exchange any meaningful signal. </li>
                    </ul>
                    <Image
                        src="/gtr_and_cosmo/2.jpeg"
                        alt="light_cone"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Since speed of light is a universal constant, one can make a complete system of physical unit assuming speed of light to be unity. \\(c\\) has the dimension of velocity or \\( [L]\\backslash [T] \\), and if we set \\(c=1\\), we have length and time have same physical dimension as \\( [L] = [T] \\).
                    <br/>
                    <br/>
                    Mostly people use physical dimension of time for length.
                    `
                },
        {
            title: 'New Dynamics',
                    content: `
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Dynamics with speed limit</p>
                    After putting limit of maximum possible speed, we have the modified Newtonian mechanics, called "The Special Theory of Relativity".
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> <p class='font-bold text-white inline-block'>Newton's first law of motion or Galilean principle of inertial frame gets modified as: </p> There are some interesting frames in which, in the absence of external force, a particles at rest will continue to remain at rest while a particle moving with a constant velocity will continue to move at the same velocity. In addition, speed of light is the maximum attainable velocity in an inertial frame. </li>
                        <li class="mb-2"> <p class='font-bold text-white inline-block'>Newton's 2nd Law essentially remains the same : </p> In an inertial frame, the rate of change of momentum is equal to the force. </li>
                    </ul>
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Curve</p>
                    A curve is a mapping  from \\( \\mathbb{R} \\) or \\( [a.b] \\in \\mathbb{R} \\) to the open space \\( \\mathscr{M} \\), say for example \\( \\mathbb{R}^N \\), i.e. if \\( \\lambda \\in [a,b] \\), then \\( X(\\lambda) \\in \\mathscr{M} \\).
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
