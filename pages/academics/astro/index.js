import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
import Image from 'next/image';

const Astro = () => {
    const sections = [
        {
            title: 'Theory of Radiative Transfer',
            subsections: [
                {
                    title: 'Radiative Field',
                    content: `
                    Let us first consider how we can provide the mathematical description of radiation at a given point in space. It is particularly easy to give a mathematical description of blackbody radiation, which is homogeneous and isotropic inside
                    a container. We know Planck's law specifies the energy density \\( U_\\nu \\) in the frequency range \\( \\nu \\) to \\( \\nu + d\\nu \\):

                    \\[
                        U_\\nu d\\nu = \\frac{8 \\pi h}{c^3} \\frac{\\nu^3 d\\nu}{exp \\left( \\frac{h\\nu}{k_B T} \\right) - 1}    
                    \\]

                    In general, however, the radiation in an arbitrary situation is not isotropic.

                    <Image
                        src="/intro_to_astro/radiative_transfer.png"
                        alt="radiative transfer"
                        width={10}
                        height={50}
                        class="mx-auto scale-75 rounded-lg"
                    />

                    We consider an area element \\(dA\\) in space. Let us consider that \\( dE_\\nu d\\nu \\) amount of radiation is passing through this area in time \\(dt\\) making solid angle \\( d\\omega \\) in the frequency range \\( \\nu \\) to \\( \\nu + d\\nu \\). Then,
                    <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                    \\[
                        dE_\\nu \\hspace{3pt} d\\nu = I_\\nu (\\vec{r}, t, \\hat{n}) \\hspace{3pt} cos(\\theta) \\hspace{3pt} dA \\hspace{3pt} dt \\hspace{3pt} d\\Omega \\hspace{3pt} d\\nu 
                    \\]
                    </div>
                    Here, \\( I_\\nu \\) is known as <span class="italic">Specific Intensity</span>. If \\(I_\\nu (r, t, \\hat{n})\\) is specified for all directions at every point of a region at a time, then we have a complete prescription of the radiation field in that region at that time. In this elementary treatment, we shall restrict ourselves only to radiation fields which are independent of time.
                    <br/>
                    <br/>
                    It is possible to calculate various quantities like flux, energy density and pressure of radiation if we know the radiation field at a point in space. For example, radiation flux is simply the total energy of radiation coming from all directions at a point per unit area per unit time. Hence Radiation flux for a certain intensity is:
                    <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                    \\[
                        F_\\nu = \\int I_\\nu \\hspace{3pt} cos(\\theta) \\hspace{3pt} d\\Omega    
                    \\]
                    </div>
                    whereas the total radiation flux is
                    \\[
                        F = \\int F_\\nu \\hspace{3pt} d\\nu    
                    \\]
                    <p class='text-md text-center text underline underline-offset-1 font-semibold text-white'>Energy Density</p>

                    Let us consider energy \\( dE_\\nu \\) of radiation associated with frequency \\( \\nu \\). This energy passes through area \\(dA\\) in time dt in the direction \\( \\hat{n} \\). Since the radiation traverses a distance \\(c dt\\) in time \\(dt\\), we expect this radiation \\( dE_\\nu \\) to fill up a cylinder with base \\(dA\\) and axis of length \\(c dt\\) in the direction \\( \\hat{n} \\). The volume of such a cylinder being \\(cos\\theta \\hspace{3pt} dA \\hspace{3pt} c dt\\), the energy density of this radiation is:
                    \\[
                        \\frac{dE_\\nu}{cos\\theta \\hspace{3pt} dA \\hspace{3pt} c dt} = \\frac{I_\\nu}{c}d\\Omega
                    \\]
                    To get the total energy density of radiation at a point associated with frequency \\( \\nu \\), we have to integrate over radiation coming from different directions so that
                    <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                    \\[
                        U_\\nu = \\int \\frac{I_\\nu}{c}d\\Omega    
                    \\]
                    </div>

                    <p class='text-md text-center text underline underline-offset-1 font-semibold text-white'>Pressure due to radiation</p>

                    The pressure of the radiation field over a surface is given by the flux of momentum perpendicular to that surface. The momentum associated with energy \\( dE_\\nu \\) is \\( dE_\\nu / c \\) and its component normal to the surface \\( dA \\) is \\( dE_\\nu cos \\theta / c\\). By dividing this by \\( dA dt \\), we get the momentum flux associated with \\( dE_\\nu \\) , which is
                    \\[
                        \\frac{dE_\\nu cos \\theta}{c}\\frac{1}{dA \\hspace{3pt} dt} = \\frac{I_\\nu}{c} cos^2 \\theta \\hspace{3pt} d \\Omega  
                    \\]
                    The pressure \\( P_\\nu \\) is obtained by integrating this over all directions, such that
                    <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                    \\[
                        P_\\nu = \\frac{1}{c} \\int I_\\nu cos^2\\theta \\hspace{3pt} d\\Omega    
                    \\]
                    </div>
                    If the radiation field is isotropic, then we get
                    \\[
                        P_\\nu = \\frac{4\\pi}{3}\\frac{I_\\nu}{c}    
                    \\]
                    Note that we can write
                    \\[
                        P_\\nu = \\frac{1}{3} U_\\nu    
                    \\]
                    `,
                },
                {
                    title: 'Radiative Transfer Equation',
                    content: `
                    If matter is present, then in general the specific intensity keeps changing as we move along a ray path. Before we consider the effect of matter, first let us find out what happens to the specific intensity in empty space as we move along a
                    ray path.
                    <br/>
                    <br/>
                    Let \\(dA_1\\) and \\(dA_2\\) be two area elements separated by a distance \\(R\\) and placed perpendicularly to a ray path.  Let \\(I_{\\nu 1}\\) and \\(I_{\\nu 2}\\) be the specific intensity of radiation in the direction of the ray path at \\(dA_1\\) and \\(dA_2\\). We want to find out the amount of radiation passing through both \\(dA_1\\) and \\(dA_2\\) in time \\(dt\\) in the frequency range  \\( \\nu \\) to \\( \\nu + d\\nu \\). If \\( d\\Omega_2\\) is the solid angle subtended by \\(dA_1\\) and \\(dA_2\\), the radiation falling on \\( dA_2 \\) in time \\(dt\\) after passing through \\( dA_1 \\) is
                    \\[
                        I_{\\nu_2} \\hspace{3pt} dA_2 \\hspace{3pt} dt \\hspace{3pt} d\\Omega_2 \\hspace{3pt} d\\nu
                    \\]
                    `,
                },
                // Add more subsections
            ],
        },
        {
            title: 'Stellar astrophysics I: Basic theoretical ideas and observational data',
            subsections: [
                {
                    title: 'Introduction',
                    content: `It appears from observational data that various quantities pertaining to stars have some relations amongst each other. For example, a more massive star usually has a higher luminosity and also a
                    higher surface temperature. To explain such observed relations theoretically, we have to figure out the equations which should hold inside a star and then solve them to construct models of stellar structure.
                    `,
                },
                {
                    title: 'Basic equations of stellar structure',
                    content: `
                    We now establish the basic equations of stellar structure by assuming the star to be spherically symmetric. If the star is rotating sufficiently rapidly, then there will be some flattening in the direction of the rotation axis. Again, if the star has strong magnetic fields, that can be another cause of departure from spherical symmetry. Such complications are neglected in the first treatment of stellar structure.
                    <br/>
                    <br/>
                    The rotational flattening of the Sun is negligible. Although the solar corona is highly non-spherical due to the presence of magnetic fields, the magnetic fields are not strong enough to cause departures from spherical symmetry below the surface of the Sun.
                    <br/>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-accent'>Hydrostatic equilibrium in stars</p>
                    <br/>
                    Let \\(M_r\\) be the mass inside the radius \\(r\\) of a star. Then the mass inside \\( r + dr \\) should be \\( M_r + dM_r \\), which means that \\(dM_r\\) is the mass of the spherical shell between radii \\( r \\) and \\( r + dr \\). If \\( \\rho \\) is the density inside radius \\( r \\), then
                    \\[
                        dM_r = 4 \\pi r^2 \\rho dr
                    \\]
                    from which
                    \\[
                        \\frac{dM_r}{dr} = 4 \\pi r^2 \\rho    
                    \\]
                    This is the first of our stellar structure equations.
                    <br/>
                    <br/>
                    Let us now consider a small portion of the shell between \\(r\\) and \\(r + dr\\). If \\(dA\\) is the transverse area of this small element, the forces exerted by pressure acting on its inward and outward surfaces are \\(P dA\\) and \\(-(P + dP) dA\\), where \\(P\\) and \\(P + dP\\) are respectively the pressures at radii \\(r\\) and \\(r + dr\\). So the net force
                    arising out of pressure is \\(-dP dA\\), which should be balanced by gravity under equilibrium conditions. The gravitational field at \\(r\\) is caused by the mass \\(M_r\\) inside \\(r\\) and is equal to \\(-GM_r /r^2\\). Since the mass of the small element under consideration is \\(\\rho dr dA\\), the force balance condition for it is

                    \\[
                        - dP dA - \\frac{GM_r}{r^2} \\hspace{3pt} \\rho \\hspace{3pt} dr \\hspace{3pt} dA = 0    
                    \\]

                    from which

                    \\[
                        \\frac{dP}{dr} = - \\frac{GM_r}{r^2} \\hspace{3pt} \\rho    
                    \\]
                    This is the second of the stellar structure equations.

                    <br/>
                    <br/>
                    We need additional equations for temperature and energy generation to solve the stellar structure.
                    <br/>
                    <br/>
                    `,
                },
                // Add more subsections
            ],
        },
        {
            title: "Elements of Stellar Dynamics",
            subsections: [
                {
                    title: 'Introduction',
                    content: `
                    Since gravity is a long-range attractive force, any star in a galaxy attracts all the other stars in the galaxy all the time. For simplicity, we can regard the stars as point particles. Then a galaxy or a star cluster can be regarded as a collection of particles in which all the particles are attracting each other through an inverse square law of force. The aim of stellar dynamics is to study the dynamics of such a system of self-gravitating particles.
                    <br/>
                    <br/>
                    The fundamental question of stellar dynamics is: why do collections of self-gravitating mass particles tend to take certain particular configurations in preference to many other possible configurations?
                    <br/>
                    <br/>
                    We know that the gravitational attraction of the stars has to be balanced by their motions, to ensure that the stars do not all fall towards the centre of the stellar system together due to their mutual gravitational attraction. The considerations nvolved here are analogous to the considerations of why the gas particles in an atmosphere do not all settle at the bottom, even though they are pulled by gravity downwards. It is basically the random motions of the gas particles which prevent this from happening.
                    <br/>
                    <br/>
                    The motions (they need not necessarily be random) of stars can 'balance' the gravity in such a way that the system remains in a steady state. We shall obtain a relation connecting the total kinetic energy with the total gravitational energy.
                    <br/>
                    <br/>
                    If the mass and the chemical composition of a star are given, we saw that how the structure of the star can be theoretically calculated. We do not have to know the details of the initial conditions, such as the nature of the gas cloud from which the star formed. In the case of a galaxy, is it even in principle possible to calculate its structure from a knowledge of, say, the mass distribution of the stars which make up the galaxy and the total kinetic energy? Or do the details of the initial conditions in the formation stage of the galaxy determine what the galaxy is going to be like?
                    `
                }
            ]
        }
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

    return (
        <div className="relative h-full bg-black/10">
            <div className="h-full translate-y-16 overflow-y-auto scroll-smooth overflow-visible overscroll-y-auto pb-24 pt-4">
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Astrophysics</h1>
                        {sections.map((section, index) => (
                            <ExpandableSection
                                key={index}
                                title={`${index + 1}. ${section.title}`}
                                isOpen={openSection === index}
                                toggle={() => toggleSection(index)}
                            >
                                {section.subsections.map((subsection, subIndex) => (
                                    <Subsection
                                        key={subIndex}
                                        title={`${index + 1}.${subIndex + 1} ${subsection.title}`}
                                        isOpen={openSubsection === subIndex && openSection === index}
                                        toggle={() => toggleSubsection(subIndex)}
                                    >
                                        <MathJaxWrapper content={subsection.content} />
                                    </Subsection>
                                ))}
                            </ExpandableSection>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default Astro;
