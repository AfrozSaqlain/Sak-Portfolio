import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
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
                    `,
                },
                {
                    title: 'Equations',
                    content: 'This is block equation \\[\\alpha\\]',
                },
                // Add more subsections
            ],
        },
        {
            title: 'Stellar astrophysics I: Basic theoretical ideas and observational data',
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
        <div className="relative h-full bg-black/40">
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Astrophysics</h1>
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
