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
                    <p class='underline underline-offset-8 text-blue-500 inline-block font-semibold'>General Form </p> : \\( T = M_0 + \\sum\\limits_{\\substack{j}} M_j \\hspace{1pt} \\dot{q}_j + \\frac{1}{2} \\sum\\limits_{\\substack{jk}} M_{jk} \\hspace{1pt} \\dot{q}_j \\hspace{1pt} \\dot{q}_k \\)
                    <br/>
                    Assumption : \\( M_0 = 0 \\) (scalar) and \\( M_j = 0 \\) (vector). Thus,
                    \\[
                        T = \\frac{1}{2} \\sum\\limits_{\\substack{jk}} M_{jk} \\hspace{1pt} \\dot{q}_j \\hspace{1pt} \\dot{q}_k = \\mathcal{L} 
                    \\]
                    As generalized coordinates depend on degree of freedom. So, 1 particles will have 3 d.o.f and N-particles will have 3N d.o.f which implies \\( j \\to 1, \\hspace{2pt} 3N \\). We will use only single particles, thus we have \\( q_i = x^i \\implies \\dot{q}_i = \\dot{x}^i \\) and instead of \\( M_{jk} \\) we write \\( g_{jk} \\). Thus,
                    \\[
                        \\begin{align}
                           \\mathcal{L} = T &= \\frac{1}{2} \\sum\\limits_{\\substack{ij}} g_{ij} \\hspace{1pt} \\dot{x}^i \\hspace{1pt} \\dot{x}^j\\\\
                           \\mathcal{L} &= \\frac{1}{2} g_{ij} \\hspace{1pt} \\dot{x}^i \\hspace{1pt} \\dot{x}^j
                        \\end{align}
                    \\]
                    Note that \\( g_{ij} \\) is symmetric matrix \\( \\implies g^{ij} = g_{ji} \\). Also, \\( \\dot{x}^i \\hspace{1pt} \\dot{x}^j \\) is symmetric, which we can see very easily as:
                    \\[
                        \\begin{pmatrix}
                        \\dot{x}^1 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^1 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^1 \\hspace{1pt} \\dot{x}^3\\\\
                        \\dot{x}^2 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^2 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^2 \\hspace{1pt} \\dot{x}^3\\\\
                        \\dot{x}^3 \\hspace{1pt} \\dot{x}^1 & \\dot{x}^3 \\hspace{1pt} \\dot{x}^2 & \\dot{x}^3 \\hspace{1pt} \\dot{x}^3\\\\
                        \\end{pmatrix}
                    \\]
                    We go from cartesian to polar coordinates as \\( x = r \\cos{\\theta} \\) and \\( y = r \\sin{\\theta} \\). And hence kinetic energy will transform from \\( K.E. = \\frac{1}{2} (\\dot{x}^2 + \\dot{y}^2) \\) to \\( K.E. = \\frac{1}{2} (\\dot{r}^2 + r^2 \\dot{\\theta}^2) \\). But let's say we do coordinate transformation in polar coordinate itself as
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
                                &= g_{il} \\hspace{2pt} \\dot{x}^l\\\\
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
                    <br/>
                    <br/>
                    The tangent vector, sometimes we call velocity is given by \\( \\vec{v} = \\frac{d X(\\lambda) }{d \\lambda} \\). If \\( \\mathscr{M} \\) has norm defined, we have length of tangent vector \\( \\frac{d X^a(\\lambda) }{d \\lambda} \\cdot \\frac{d X_a(\\lambda) }{d \\lambda} \\). We assume that we can normalize the tangent vector \\( \\dot{X}^a \\cdot \\dot{X}_a = 1 \\), where \\( \\dot{X}^a = \\frac{d X^a(\\lambda)}{d \\lambda} \\). Otherwise we can parameterise the curve, such that the tangent vector is a unit vector. Now for the acceleration, \\( A^a = \\frac{d V^a}{d \\lambda} \\). Some interesting results if, \\( V^a \\cdot V_a = 1 \\), then \\( V^a \\cdot A_a = 0 \\).
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Motion of free particle</p>
                    Let's say we want to move from a point (event with A coordinate, \\( \\{x^a_1\\} = \\{t_1, x_1, y_1, z_1\\} \\)) to another point (B with \\( \\{x^a_2\\} = \\{t_2, x_2, y_2, z_2\\} \\) ), in absence of any force.
                    \\[\\overset{}{A\\{x^a_1\\}} \\xrightarrow{\\hspace{0.5em}\\hspace{8.5em}} \\overset{}{B{\\{x^a_1\\}}}\\]
                    \\[ ds^2 = dt^2 - dx^2 - dy^2 -dz^2 \\]
                    This is valid when distance is very very close to each other.
                    <br/>
                    <br/>
                    Let's say this distance is not small and we have a trajectory of force free particle going from event A to event B
                    <Image
                        src="/gtr_and_cosmo/3_.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Let \\( X^a(\\lambda) \\) be the trajectory taken by a free particle. Let the spacetime velocity \\( u^a \\) is given by
                    \\[
                        u^a = \\frac{d X^a}{d \\lambda} = \\dot{X}^a    
                    \\]
                    If the particle moves along the timelike curve, we may normalise the curve
                    \\[
                        u^a u_a = \\left( \\frac{dt}{d \\lambda} \\right)^2 - \\left( \\frac{dx}{d \\lambda} \\right)^2 - \\left( \\frac{dy}{d \\lambda} \\right)^2 - \\left( \\frac{dz}{d \\lambda} \\right)^2 = 1
                    \\]
                    \\[
                        \\implies d \\lambda = ds    
                    \\]
                    So, if \\(ds\\) is same as parameter, then normalization is naturally satisfied.
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2"> If the particle move along timelike curve, we may normalise the vector.
                        \\[
                            u^a u_a = \\left( \\frac{dt}{d \\lambda} \\right)^2 - \\left( \\frac{dx}{d \\lambda} \\right)^2 - \\left( \\frac{dy}{d \\lambda} \\right)^2 - \\left( \\frac{dz}{d \\lambda} \\right)^2 = 1
                        \\]
                        \\[
                            \\implies d \\lambda = ds    
                        \\]
                        This is called "arc-length parameterization".
                        </li>
                        <li class="mb-2"> If the particle moves along lightlike or null curve, we cannot normalize, because
                        \\[ds^2 = 0 \\text{ or } u^au_a = 0\\]
                        </li>
                        <li class="mb-2"> We are not interested in spacelike trajectories, which are not possible as per basic postulates of STR. </li>
                    </ul>
                    We could apply Newton's \\(2^{\\text{nd}}\\) law of motion in 4 dimensional spacetime \\( \\frac{dp^a}{dt} = 0 \\), or we can solve Lagrangian equation of motion. Since, now time is also a generalized coordinate, the kinetic energy is given by
                    \\[
                        T = \\frac{1}{2}[\\dot{t}^2 - \\dot{x}^2 - \\dot{y}^2 - \\dot{z}^2]    
                    \\]
                    For free particle, there's no potential and hence \\( \\mathcal{L} = T \\).
                    <br/>
                    <br/>
                    From our construction itself, we have, \\( \\mathcal{L} = 1 \\), for timelike curve and \\( \\mathcal{L} = 0 \\), for lightlike curve.
                    <div class='bg-blue-300/30 px-3 py-[0.1pt] rounded-md my-1 mx-auto max-w-max'>
                        We get \\( \\ddot{x}^a = 0 \\) for \\( a=0,1,2,3 \\) or an equation like \\( \\ddot{x}^a + \\Gamma^a_{bc} \\dot{x}^b \\dot{x}^c = 0 \\) as we have seen previously.
                    </div>
                    <p class='text-lg text underline text-center underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Some remarks on notation</p>
                    \\( u^a = \\gamma(1, \\vec{v}) \\) with normalization \\( \\gamma \\) such that \\( u^au_a = 1 \\). \\( u_a = \\gamma(1, -\\vec{v}) \\) and \\( 1 = \\gamma^2 (1-v^2) \\). And for light \\( u^a = (1, \\vec{k}) \\) and \\( 1-k^2 = 0 \\) (for lightlike curve). With the new notation, \\( u^a = (\\dot{t}, \\dot{x}, \\dot{y}, \\dot{z}) = \\left( \\frac{dt}{ds}, \\ldots, \\frac{dz}{ds} \\right) \\). Thus,
                    \\[
                        \\begin{align}
                            u^a &= \\frac{dt}{ds} \\left( 1, \\frac{dx}{ds} \\frac{ds}{dt}, \\frac{dy}{ds} \\frac{ds}{dt}, \\frac{dz}{ds} \\frac{ds}{dt}, \\right) \\\\
                            &= \\frac{dt}{ds} \\left( 1, \\frac{dx}{dt}, \\frac{dy}{dt}, \\frac{dz}{dt} \\right)
                        \\end{align}
                    \\]
                    Now comparing with old notation,
                    \\[
                        \\gamma = \\frac{dt}{ds} \\hspace{5pt} \\text{ and } \\hspace{5pt} \\vec{v} = \\left( \\frac{dx}{dt}, \\frac{dy}{dt}, \\frac{dz}{dt} \\right)
                    \\]
                    `
                },
        {
            title: 'Introduction to the Tensors',
                    content: `
                    Geometry of Newtonian mechanics is \\( \\mathbb{R}^N \\), basically \\( \\mathbb{R}^4 \\). The geometry we want to talk about is not \\( \\mathbb{R}^N \\), which means that the entire space cannot be mapped to \\( \\mathbb{R}^N \\), or \\( \\nexists \\text{ any transformation } \\mathscr{M} \\to \\mathbb{R}^N \\) as a whole. The geometry however is locally flat, which means, we take any point and then an open neighbourhood around that point, then that can be mapped to \\( \\mathbb{R}^N \\).
                    <Image
                        src="/gtr_and_cosmo/4_.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Thus at each point \\(P\\), a neighbourhood can be mapped to \\( \\mathbb{R}^N \\). The \\( \\mathbb{R}^N \\) is called coordinate patch.
                    <Image
                        src="/gtr_and_cosmo/5.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    When we say coordinate transformation, it is the transformation between coordinate patch -1 and coordinate patch - 2. The law of physics lives on \\( \\mathscr{M} \\), so when we do coordinate transformation, the law of physics should remain invariant.
                    <Image
                        src="/gtr_and_cosmo/6.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    \\( X^a(\\lambda) \\in \\mathbb{R}^N \\), the coordinate patch.
                    <br/>
                    <br/>
                    Tangent vector, \\( v^a = \\frac{d X^a(\\lambda)}{d \\lambda} \\).
                    <br/>
                    <br/>
                    Let's take a set of all smooth curves passing through point \\(P\\) and represent it as \\( \\{ X^a (\\lambda) \\} \\), class of all curves passing through \\(P\\) which are smooth. Let's take a look at \\( \\{v^a\\} \\) such that \\( v^a = \\frac{d X^a(\\lambda)}{d \\lambda} \\). We can easily see that \\( \\{v^a\\} \\) forms a vector space.
                    <br/>
                    <br/>
                    Our goal to define vector space is because we want to use different coordinate system to do our physics, as this may help in simplifying certain problems.
                    <br/>
                    <br/>
                    Let's take 
                    <Image
                        src="/gtr_and_cosmo/7_.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    So,
                    \\[
                        \\begin{align}
                            X^a &:= X^a(X'^a) \\\\
                            X'a &:= X'^a(X^ax)
                        \\end{align}
                    \\]
                    Thus giving 
                    \\[
                        v^a = \\frac{d X^a}{d \\lambda} \\hspace{12pt} \\text{ and } \\hspace{12pt} v'^a = \\frac{d {X'}^a}{d \\lambda}
                    \\]
                    Thus we get our transformation equation like,
                    \\[
                        v'^a = \\frac{d X'^a}{d \\lambda} = \\frac{\\partial X'^a}{\\partial X^b} \\frac{d X^b}{d \\lambda}    
                    \\]
                    <div class='bg-blue-300/30 px-3 py-[0.01pt] rounded-md my-1 mx-auto max-w-max'>
                        \\[
                            v'^a = \\frac{\\partial X'^a}{\\partial X^b} v^b
                        \\]
                    </div>
                    Vectors which transform using above transformation are called contra-variant vector, i.e. \\( {A'}^k = \\frac{\\partial {X'}^a}{\\partial X^b} A^i \\).
                    <br/>
                    <br/>
                    Let's say we have a function \\( f(X^a) : \\mathbb{R}^N \\to \\mathbb{R} \\). \\( f(X^a) \\) is fuction at point \\(P\\) and \\( f({X'}^a) \\) is same point \\(P\\), but in another coordinate patch.
                    <br/>
                    <br/>
                    \\( f(X^a) = \\) constant, is a set of hyper-surfaces.
                    <br/>
                    <br/>
                    The normal vector \\(n^a\\) to \\( f(X^a) = \\) constant, at point \\(P\\) is given by
                    \\[
                        n_a = \\frac{\\partial f(X^a)}{\\partial X^a}    
                    \\]
                    in coordinate patch \\(X^a\\) or \\(c^1\\)
                    and
                    \\[
                        n_a' = \\frac{\\partial f({x'}^a)}{\\partial {x'}^a}    
                        \\]
                    in coordinate patch \\({X'}^a\\) or \\(c^2\\).
                    <br/>
                    <br/>
                    These form a vector space at \\(P\\).
                    <br/>
                    <br/>
                    Now again using the chain rule,we get
                    \\[
                        {n'}_a = \\frac{\\partial f}{\\partial {X'}^a} = \\frac{\\partial f}{\\partial X^b} \\frac{\\partial X^b}{\\partial {X'}^a}   
                    \\]
                    <div class='bg-blue-300/30 px-3 py-[0.01pt] rounded-md my-1 mx-auto max-w-max'>
                        \\[
                            {n'}_a = \\frac{\\partial X^b}{\\partial {X'}^a} n_b
                        \\]
                    </div>
                    The vectors which transform using above rule are called co-variant vector.
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Outer Product</p>
                    Let \\(u^a\\) and \\(v^a\\) be vectors, and their outer product is written as \\( u \\otimes v \\).
                    \\[
                        \\begin{align}
                            u = u^a &= \\{ u^0, u^1, \\ldots, u^{n-1} \\} \\\\
                            v = v^a &= \\{ v^0, v^1, \\ldots, v^{n-1} \\}
                        \\end{align}
                    \\]
                    The outer product \\( u \\otimes v = u \\cdot v^T \\) is an \\( n \\times n \\) matrix.
                    \\[
                        (u \\otimes v)^{ab} = u^a \\cdot v^b    
                    \\]
                    Under coordinate transformation \\( X \\to X' \\), we get
                    \\[
                        (u \\otimes v)^{ab} \\to {(u \\otimes v)'}^{ab}
                    \\]
                    \\[
                        {u'}^a{v'}^b = \\frac{ \\partial {X'}^a}{\\partial X^p} \\frac{\\partial {X'}^b}{\\partial X^q} u^p v^q
                    \\]
                    So, \\( u \\otimes v \\) is a second-rand tensor, which transforms as given above.
                    <br/>
                    <br/>
                    The second rank contra-variant tensor is given as,
                    \\[
                        {A'}^{ab} = \\frac{\\partial {X'}^a}{\\partial X^p} \\frac{\\partial {X'}^b}{\\partial X^q} A^{pq}
                    \\]
                        
                    The second rank co-variant tensor is given as,
                    \\[
                        {A'}_{ab} = \\frac{\\partial {X}^p}{\\partial {X'}^a} \\frac{\\partial X^q}{\\partial {X'}^b} A_{pq}
                    \\]
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Mixed Tensor</p>
                    \\[
                        {A'}^a_b = \\frac{\\partial {X'}^a}{\\partial X^q} \\frac{\\partial X^p}{\\partial {X'}^b} A^q_p    
                    \\]
                    This is a mixed tensor of one co-variant and one contra-variant tensor.
                        
                    <p class='text-lg text underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Important Corollary</p>
                    If a vector/ tensor is zero in one coordinate patch, then it is zero in all other coordinate patch.
                    `
                },
        {
            title: 'Invariance of Proper Time',
                    content: `
                    <p class='text-lg text-center mt-5 mb-2 font-semibold text-green-500'>\\(ds^2\\) = Proper Time</p>
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-blue-500'>Story so far</p>
                    Now we are dealing with not just space and time seperately, but with spacetime. The 4 dimensional degree of freedom, given by \\( x^a = (t,x,y,z) \\) and 4 velocity is given by \\( u^a = \\dot{x}^a = (\\dot{t}, \\dot{x}, \\dot{y}, \\dot{z}) \\). If the particle is time-like, we can use arc-length parameterization to describe the motion of particle. For time-like case we know that \\( u^a \\cdot u_a = 1 \\). For light-like case, we have \\( u^a \\cdot u_a = 0 \\).
                    <br/>
                    <br/>
                    Lagrangian for force free particle is \\[ \\mathcal{L} = \\frac{1}{2} [\\dot{t}^2 -\\dot{x}^2 - \\dot{y}^2 - \\dot{z}^2] = \\begin{cases} \\frac{1}{2} , \\text{ for time-like} \\\\ \\\\ 0 \\text{ , for light-like} \\end{cases} \\]
                    We could even add potential to \\( \\mathcal{L} \\) and that would define relativistic dynamics.
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Invariance of \\(ds^2\\)</p>
                    Let us have two events \\(A\\) and \\(B\\). Let these two events are observed by two different Lorentz observers \\(\\mathcal{O}_1\\) and \\(\\mathcal{O}_2\\).
                    <Image
                        src="/gtr_and_cosmo/8.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Is there any relation between \\(ds^2\\) and \\( {ds'}^2 \\)?
                    <br/>
                    <br/>
                    For better understanding, let us assume a null path or light-like path connects the events \\(A\\) and \\(B\\). From the basic postulates of relativity, the velocity of light is universal constant and same for all observers. So, the events \\(A\\) and \\(B\\) are light-like for both observers and hence \\( ds^2 = {ds'}^2 = 0 \\).
                    <br/>
                    <br/>
                    With the same argument, we say that for time-like connected events too \\( ds^2 =  {ds'}^2 \\) for inertial frames (\\mathcal{O}_1\\) and \\(\\mathcal{O}_2\\).
                    <br/>
                    <br/>
                    As we know that Lorentz transformation is written as a matrix, whose determinant is \\(1\\). This means that the length of a vector is preserved under Lorentz transformation. This is similar to rotation or similarity transformation. Length of spacetime interval between two events is invariant or same in all Lorentz frame.
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Rest and Moving Observer</p>
                    The four velocity of an observer at rest in a Lorentz frame \\( \\mathcal{O} \\) is given by \\( u^a = (1,0,0,0) \\). Unline Newtonian rest observer, this four velocity can't be (0,0,0,0) because time has to flow. The spatial velocity is given by \\( \\vec{v} = (0,0,0) \\).
                    <Image
                        src="/gtr_and_cosmo/9.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Spacetime interval after a time \\(dt\\) is \\(ds = dt\\), and that's why \\(ds\\) is sometimes called 'Proper Time'.
                    <br/>
                    <br/>
                    The four velocity for observer moving at constant speed is given by \\( u^a = (\\dot{t}, \\dot{x}, \\dot{y}, \\dot{z}) = \\gamma (1, v_x, v_y, v_z) \\). Spacetime interval after a time \\(dt\\) is 
                    \\[
                        \\begin{align}
                            ds^2 &= dt^2 - dx^2 \\\\
                            &= dt^2 \\left( 1 - \\frac{{dx}^2}{{dt}^2} \\right)\\\\
                            &= dt^2 (1 - v_x^2)\\\\
                            &= \\frac{1}{\\gamma^2} dt^2 \\\\
                            \\text{Or, } \\hspace{12pt} ds &= \\frac{1}{\\gamma} dt
                        \\end{align}
                    \\]
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Moving Lorentz Observer</p>
                    Let \\( \\mathcal{O} \\) and \\( \\mathcal{O'} \\) be two Lorentz observers / frames, moving with relative velocity \\(v^a\\). We have seen that the 4-velocity can be written as \\( v^a = (\\dot{t}, \\dot{x}, \\dot{y}, \\dot{z}) = \\gamma(1, \\vec{v}) \\), where \\( \\gamma = \\frac{1}{\\sqrt{1 - v^2}} \\) and \\(\\vec{v}\\) is the spatial velocity of the frame.
                    <br/>
                    <br/>
                    Without loss of generality we may assume the frame \\( \\mathcal{O} \\) is at rest and \\( \\mathcal{O'} \\) is moving with the velocity \\(v^a\\). Let \\( \\{ t,x,y,z \\} \\) be the coordinate in frame \\(\\mathcal{O}\\) and \\( \\{ t',x',y',z' \\} \\) be the coordinate in frame \\( \\mathcal{O'} \\) and they are related by Lorentz transformation.
                    \\[
                        t' = \\gamma(t-vx) \\hspace{10pt} \\text{ and } \\hspace{10pt} x' = \\gamma(x - vt)
                    \\]
                    (Basic idea here is to keep \\(ds^2 = {ds'}^2\\) )
                    So now,
                    \\[
                        dt' = \\gamma(dt-vdx) \\hspace{10pt} \\text{ and } \\hspace{10pt} dx' = \\gamma(dx - vdt)
                    \\]
                    \\[
                        \\begin{align}
                            {dt'}^2 &= \\gamma^2 [dt^2 + v^2 dx^2 - 2v \\hspace{1pt} dx \\hspace{1pt} dt] \\\\
                            {dx'}^2 &= \\gamma^2 [dx^2 + v^2 dt^2 - 2v \\hspace{1pt} dx \\hspace{1pt} dt]
                        \\end{align}
                    \\]
                    Subtracting \\( {dx'}^2 \\text{ from } {dt'}^2 \\), we get
                    \\[
                        {dt'}^2 - {dx'}^2 = \\gamma^2 [dt^2 (1 - v^2) -dx^2 (1 - v^2)] = dt^2 - dx^2    
                    \\]
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Time Dilation</p>
                    Let us take two events \\(A\\) and \\(B\\), which are at same spatial location in Lorentz frame \\( \\mathcal{O'} \\).
                    <Image
                        src="/gtr_and_cosmo/10.png"
                        alt="time dilation"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    The coordinates are \\( A = \\{ t_0', 0, 0, 0 \\} \\) and \\( B = \\{ t_1' , 0, 0, 0 \\} \\). The spacetime intervals for the event \\(A\\) and \\(B\\) is given by \\( ds^2 = {dt'}^2 = (t_1' - t_0')^2 \\). With \\(c=1\\), the spacetime interval \\(ds\\) has the same unit as time, that is why it is called 'proper time'.
                    <Image
                        src="/gtr_and_cosmo/11.png"
                        alt="time dilation"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Let's say our Lorentz frame \\( \\mathcal{O'} \\) is moving at a spatial speed \\( v^a = (1, v_x) \\) wrt. frame \\( \\mathcal{O} \\) or lab frame and observes the events \\(A\\) and \\(B\\). We may assume both the frames coincide at \\(t=t_0\\). THe coordinates of the events in frame \\( \\mathcal{O'} \\) are
                    \\[ A = \\{ t_0', 0, 0, 0 \\} \\hspace{12pt} \\text{ and } \\hspace{12pt} B = \\{ t_1' , 0, 0, 0 \\} \\]
                    The spacetime interval in frame \\( \\mathcal{O} \\) is given as
                    \\[ A = \\{ t_0, 0, 0, 0 \\} \\hspace{12pt} \\text{ and } \\hspace{12pt} B = \\{ t_1 , dx, dy, dz \\} \\]
                    Since, the proper time has to be invariant \\[ {ds}^2 = {dt'}^2 = {ds'}^2 \\] Since, the \\( dx', dy' \\text{ and } dz' \\) themselves are zero, we have
                    \\[
                        \\begin{align}
                            ds^2 = {dt'}^2 = {ds'}^2 &= (dt^2 - dx^2 - dy^2 - dz^2) \\\\
                            &= \\left( 1 - \\frac{dx^2}{dt^2} - \\frac{dy^2}{dt^2} - \\frac{dz^2}{dt^2} \\right) dt^2 \\\\
                            &= (1 - v^2) {dt}^2\\\\
                            \\text{Or, } \\hspace{5pt} {dt'} &= dt \\sqrt{1 - v^2}
                        \\end{align}
                    \\]
                    This is called time dilation. It is coming from invariance of proper time or \\( {ds}^2 \\).
                    `
                },
        {
            title: 'The Metric Tensor',
                    content: `
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Tangent Vector Space</p>
                    We know that our space might not be able to be mapped to \\( \\mathbb{R}^N \\).
                    <Image
                        src="/gtr_and_cosmo/5.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    We know that transformation equations can be written as:
                    \\[
                        \\begin{align}
                            x'^a &= x'^a (x^a)\\\\
                            x^a &= x^a (x'^a)
                        \\end{align}
                    \\]
                    <br/>
                    Now we can consider all the smooth curves passing through \\(P\\). We know that, the set of all tangent to these curves \\( \\left\\{ v = \\frac{dx^a(\\lambda)}{d \\lambda} \\right\\} \\) form a vector space and is called tangent space.
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Metric Tensor</p>
                    In order to do any meaningful physics, we need a dot product on tangent space. The element of tangent space, we called contra-variant vectors. The scalar product is the mapping from \\( \\{ V \\} \\to \\mathbb{R} \\), i.e. for any two vectors \\(v^a\\) and \\(u^a\\), we can write:
                    \\[
                        \\langle v \\vert u \\rangle = \\langle u \\vert v \\rangle = g_{ab} v^a u^b
                    \\]
                    Here the coefficient which is used to define the dot product between the two vectors is called the metric tensor. In general \\(g_{ab}\\) is a function of coordinates. Within the standard framework \\(g_{ab}\\) is symmetric, i.e. \\( g_{ab} = g_{ba} \\) because of the nature of dot product. Example: The spacetime metric for the Minkowski spacetime is given by \\( g_{ab} = \\eta_{ab} = \\text{diag}(1,-1,-1,-1) \\).
                    <br/>
                    <br/>
                    <div class='bg-slate-50/10 p-1 rounded-md mb-3 pl-2'>
                    <p class='text-lg mb-2 font-semibold text-red-400'>Show that the spacetime metric \\(g_{ab}\\) transforms like a co-variant tensor of rank 2.</p>
                    Reminder: <br/>
                    \\[
                        \\begin{align}
                            \\text{Contra-variant tensor transforms like:  } {v'}^a = \\frac{\\partial {x'}^a}{\\partial x^p} v^p \\\\
                            \\text{Co-variant tensor transforms like:  } {v'}_a = \\frac{\\partial {x}^p}{\\partial {x'}^a} v_p \\\\
                        \\end{align}
                    \\]
                    From our definition
                    \\[
                        \\begin{align}
                            |v|^2 = g_{ab} v^a v^b &= g'_{ab} {v'}^a {v'}^b \\\\
                            &= g'_{ab} \\frac{\\partial {x'}^a}{\\partial x^p} v^p \\frac{\\partial {x'}^b}{\\partial x^q} v^q \\\\
                            &= \\frac{\\partial {x'}^a}{\\partial x^p} \\frac{\\partial {x'}^b}{\\partial x^q} g'_{ab} v^p v^q
                        \\end{align}
                    \\]
                    as \\(a,b,p \\text{ and } q\\) are dummy variables, we can equally write
                    \\[
                        g'_{ab} {v'}^a {v'}^b =  \\frac{\\partial {x'}^p}{\\partial x^a} \\frac{\\partial {x'}^q}{\\partial x^b} g'_{pq} v^a v^b
                    \\]
                    \\[
                        \\implies g_{ab} = \\frac{\\partial {x'}^p}{\\partial x^a} \\frac{\\partial {x'}^q}{\\partial x^b} g'_{pq}
                    \\]
                    Hence, \\(g_{ab}\\) transforms like a co-variant tensor of rank 2.
                    </div>
                    <p class='text-lg underline underline-offset-8 mt-5 mb-0 font-semibold text-center text-blue-500'>Elsewhere in parallel universe</p>
                    <Image
                        src="/gtr_and_cosmo/5.png"
                        alt="trajectory"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />
                    Now we consider all the smooth hyper-surfaces at \\(P\\). We know that the set of all normal to these surfaces \\( \\left\\{ v = \\frac{\\partial f(x^a)}{\\partial x^b} \\right\\} \\) forms a vector space, and is dual to tangent space.
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Elsewhere in parallel universe there is another metric tensor</p>
                    In order to do any meaningful physics, we need a dot product on our co/ dual vector space. The element of co/ dual vector space, we called co-variant vectors. The scalar product is the mapping from \\( \\{ V \\} \\to \\mathbb{R} \\), i.e. for any two vectors \\(v_a\\) and \\(u_a\\), we can write:
                    \\[
                        \\langle v \\vert u \\rangle = \\langle u \\vert v \\rangle = g^{ab} v_a u_b
                    \\]
                    In general \\(g^{ab}\\) is a function of coordinates. Within the standard framework \\(g_{ab}\\) is symmetric, i.e. \\( g_{ab} = g_{ba} \\) because of the nature of dot product. Example: The spacetime metric for the Minkowski spacetime is given by \\( g^{ab} = \\eta^{ab} = \\text{diag}(1,-1,-1,-1) \\).
                    <br/>
                    <br/>
                    <div class='bg-slate-50/10 p-1 rounded-md mb-3 pl-2'>
                    <p class='text-lg mb-2 font-semibold text-red-400'>Show that the spacetime metric \\(g^{ab}\\) transforms like a contra-variant tensor of rank 2.</p>
                    Reminder: <br/>
                    \\[
                        \\begin{align}
                            \\text{Contra-variant tensor transforms like:  } {v'}^a = \\frac{\\partial {x'}^a}{\\partial x^p} v^p \\\\
                            \\text{Co-variant tensor transforms like:  } {v'}_a = \\frac{\\partial {x}^p}{\\partial {x'}^a} v_p \\\\
                        \\end{align}
                    \\]
                    From our definition
                    \\[
                        \\begin{align}
                            |v|^2 = g^{ab} v_a v_b &= {g'}^{ab} {v'}_a {v'}_b \\\\
                            &= {g'}^{ab} \\frac{\\partial x^p}{\\partial {x'}^a} v^p \\frac{\\partial x^q}{\\partial {x'}^b} v^q \\\\
                            &= \\frac{\\partial {x}^p}{\\partial {x'}^a} \\frac{\\partial {x}^q}{\\partial {x'}^b} {g'}^{ab} v^p v^q
                        \\end{align}
                    \\]
                    as \\(a,b,p \\text{ and } q\\) are dummy variables, we can equally write
                    \\[
                        {g'}^{ab} {v'}_a {v'}_b =  \\frac{\\partial {x}^a}{\\partial {x'}^p} \\frac{\\partial {x}^b}{\\partial {x'}^q} {g'}^{ab} v^p v^q
                    \\]
                    \\[
                        \\implies g^{ab} = \\frac{\\partial {x}^a}{\\partial {x'}^p} \\frac{\\partial {x}^b}{\\partial {x'}^q} {g'}^{ab}
                    \\]
                    Hence, \\(g^{ab}\\) transforms like a co-variant tensor of rank 2.
                    </div>
                    <p class='text-lg underline underline-offset-8 mt-5 mb-2 font-semibold text-center text-blue-500'>Should the parallel universesbe connected</p>
                    Should \\( g_{ab} \\) and \\( g^{ab} \\) be related?
                    <br/>
                    <br/>
                    It is good to have a relation between \\( g_{ab} \\) and \\( g^{ab} \\). A sensible relation is:
                    <div class='bg-blue-300/30 px-3 py-[0.1pt] rounded-md my-1 mx-auto max-w-max'>
                        \\[ g_{ap}g^{\\hspace{1.5pt} pb} ==\\delta^b_a \\]
                    </div>
                    They can be inverse of each other!
                    <br/>
                    <br/>
                    This allows us to establish a unique relation between a co-variant and contra-variant tensor as
                    <div class='bg-blue-300/30 px-3 py-[0.1pt] rounded-md my-1 mx-auto max-w-max'>
                        \\[ v^a = g^{ab} v_b \\hspace{12pt} \\text{ and } \\hspace{12pt} v_a = g_{ab} v^b \\]
                    </div>
                    `
                },
                {
                    title: 'Permutation Tensor',
                            content: `
                            We are working in \\( \\mathbb{R}^3 \\). So, \\( g_{ab} = \\delta_{ab} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix} \\)
                            <br/>
                            Define: Permutation tensor in \\( \\mathbb{R}^3 \\) or 3-D
                            \\[
                                \\epsilon^{ijk} = \\epsilon_{ijk} = 
                                \\begin{cases} 
                                    1 , \\hspace{12pt} \\text{ if i, j, k do even permutation} \\\\
                                    -1 , \\hspace{5pt} \\text{ if i, j, k do odd permutation} \\\\
                                    0, \\hspace{15pt} \\text{if any two indices are the same}
                                \\end{cases}    
                            \\]
                            Note: When metric is diag\\( (1,1,1) \\), there is no difference between covariant and contravariant.
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
