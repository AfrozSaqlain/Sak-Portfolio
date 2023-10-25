import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import { ExpandableSection, Subsection } from '../../../components/ExpandableSection';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import ScrollToTopArrow from '../../../components/ScrollToTopArrow';
// import ScrollToTop from "react-scroll-to-top";

const QFT = () => {
    const sections = [
        {
            title: 'Classical Field Theory',
            subsections: [
                {
                    title: 'Introduction: Classical Field Theory',
                    content: `
                    Field is a function of space and time. Example: Electric field \\((\\vec{x}, t) \\to \\vec{E}(\\vec{x}, t)\\) and Magnetic Field \\((\\vec{x}, t) \\to \\vec{B}(\\vec{x}, t)\\) <br/>
                    <br/>
                    Field has \\(\\infty\\) degrees of freedom. <br/> <br/>
                    Notation: \\(\\phi(\\vec{x}, t)\\) <br/> <br/>
                    The field may be:
                    <ul class="list-disc ml-8 my-4">
                        <li class="mb-2">Fundamental Field</li>
                        <li class="mb-2">Component of an object \\( \\phi^A (t, \\vec{x}) \\)</li>
                        <li class="mb-2">Can be part of internal space: \\[ \\phi^A (t, \\vec{x}) = \\int \\phi_k e^{ik \\cdot x} d^3k \\]</li>
                    </ul>
                    <br/>
                    In general:
                    \\[
                        \\begin{align}
                            \\text{For } \\hspace{3pt} \\phi(\\vec{x}, t) : \\hspace{15pt} \\mathcal{L} &= \\mathcal{L}(\\phi(x^\\mu), \\partial_\\mu \\phi(x^\\mu))\\\\
                            x^\\mu &= (x^0, \\vec{x}) = (t, \\vec{x})
                        \\end{align}
                    \\]
                    <br/>
                    Action:
                    \\[
                        S = \\int \\mathcal{L} d^4x \\to \\text{Lagrangian Density}
                    \\]
                    <br/>
                    No we look into Notations:
                    \\[
                        x^\\mu = (x^0, \\vec{x}) = (ct, \\vec{x}) , \\text{  } [c=\\hbar = 1 \\text{ in  natural units}]
                    \\]
                    \\[
                        \\eta_{\\mu \\nu} = \\text{Diagonal}(1, -1, -1, -1)
                    \\]
                    \\[
                        \\eta^{\\mu \\nu} = \\text{Diagonal}(1, -1, -1, -1)
                    \\]
                    \\[
                        \\eta^{\\mu \\nu} \\eta_{\\mu \\nu} = \\mathbb{1}  
                    \\]
                    \\[    
                        x_\\mu = \\eta_{\\mu \\nu} x^\\nu = (t, -\\vec{x})  
                    \\]
                    \\[    
                        A \\cdot B = \\eta_{\\mu \\nu} A^\\mu B^\\nu = A^0 B^0 - A^i B^i 
                    \\]    
                    \\[    
                        A^\\mu = (A^0, \\vec{A}) 
                    \\] 
                    \\[
                        A_\\mu = (A^0, -\\vec{A})
                    \\]
                    \\[    
                        A^2 = A^0 A^0 - A^i A^i  \\begin{cases}
                            > 0, \\text{ timelike}\\\\
                            = 0, \\text{ lightlike}\\\\
                            < 0, \\text{ spacelike}
                        \\end{cases}
                        \\\\
                    \\]
                    \\[
                        \\partial_\\mu = \\frac{\\partial}{\\partial x^\\mu} = (\\frac{\\partial}{\\partial t}, \\vec{\\nabla})
                    \\]
                    \\[
                        \\partial^\\mu = \\eta^{\\mu \\nu} \\partial_\\nu = (\\frac{\\partial}{\\partial t}, -\\vec{\\nabla})    
                    \\]
                    \\[
                        \\partial_\\mu A^\\mu = \\partial_0 A^0 + \\partial_i A^i
                    \\]
                    \\[
                        \\begin{align}
                            p^\\mu &= i\\partial^\\mu = \\left( i \\frac{\\partial}{\\partial t}, - i \\vec{\\nabla} \\right) = (E, \\vec{p})\\\\
                            p_\\mu &= (E, -\\vec{p})\\\\
                            p^2 &= p_\\mu p^\\mu = E^2 - \\vec{p}^2
                        \\end{align}
                    \\]
                    Einstein's Equation:
                    \\[
                        E^2 = \\vec{p}^2 + m^2\\\\
                    \\]
                    \\[
                        p^2 = m^2    \\tag{ "on shell" }
                    \\]
                    \\[
                        \\square = \\partial_\\mu \\partial^\\mu = \\frac{\\partial^2}{\\partial t^2} - \\nabla^2    
                    \\]
                    \\[
                        \\begin{align}
                            x \\cdot p &= \\eta_{\\mu \\nu} x^\\mu p^\\nu \\\\ 
                                       &= x^0 p^0 - x^i p^j\\\\ 
                                       &= Et - \\vec{x} \\cdot \\vec{p} = \\text{Invariant}   
                        \\end{align}
                    \\]
                    We have Euler Lagrange Equation given as:
                    \\[
                        \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = 0
                    \\]
                    At this point let's note down some properties of Lagrangian:
                    
                    <ul class="list-disc ml-8 my-4">
                        <li class="mb-2">Quadratic in fields.</li>
                        <li class="mb-2">Contains derivative of fields.</li>
                        <li class="mb-2">S must be poincare invariant.</li>
                        <li class="mb-2">\\( \\mathcal{L} \\) must be poincare invariant.</li>
                        <li class="mb-2">\\( \\mathcal{L} \\) must be real.</li>
                        <li class="mb-2">If observables show some symmetry, \\( \\mathcal{L} \\) should also show that. This is known as Noether's Theorem.</li>
                        <li class="mb-2">If there is some redundancy in D.O.F., \\( \\mathcal{L} \\) should also show that.</li>
                        <li class="mb-2">Gauge symmetry should exist.</li>
                    </ul>  

                    Now, let us take an example of Maxwell's Equation: 
                    \\[
                        \\mathcal{L} = -\\frac{1}{4} F_{\\mu \\nu} F^{\\mu \\nu}    
                    \\]
                    where \\(F_{\\mu \\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu \\)
                    <br/>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>Gauge Invariance</p>
                    <ul class="list-disc ml-8 my-4">
                        <li class="mb-2">\\(A_\\mu \\to A_\\mu + \\partial_\\mu K^\\mu\\) remains invariant. We can write action for \\(\\mathcal{L}\\) as: \\(S = \\int \\mathcal{L} d^4x \\) and for \\(\\mathcal{L}'\\) as: \\(S' = \\int \\mathcal{L}' d^4x \\). Now,
                        \\[
                            \\begin{align}
                                \\delta S' &= \\delta \\int \\mathcal{L} d^4x + \\delta \\int d^4 x \\partial_\\mu K^\\mu \\\\
                                           &= \\delta \\int \\mathcal{L} d^4x + \\int d^4 x \\partial_\\mu (\\delta K^\\mu) \\\\
                                           &= \\delta \\int \\mathcal{L} d^4x + \\delta K^\\mu|_{\\text{surface}} \\\\
                                           &= \\delta \\int \\mathcal{L} d^4x\\\\
                                           &= 0
                            \\end{align}    
                        \\]
                            Hence E.O.M. remains invariant if two \\(\\mathcal{L}\\) are separated by a total derivative of any arbitrary field.
                        </li>
                        <li class="mb-2">Lorentz Invariance is not required</li>
                    </ul>
                    <br/>
                    Fields are continuous functions of space and time and they die asympotically. <br/>
                    <br/>
                    Let's take an example of a free scalar field:
                    \\[
                        \\mathcal{L} = \\frac{1}{2} \\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2} m^2 \\phi^2
                    \\]
                    Now, we can write Euler Lagrange Equation as:
                    \\[
                        \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = 0
                    \\]
                    where,
                    \\[
                        \\begin{align}
                        \\frac{\\partial \\mathcal{L}}{\\partial \\phi} &= -m^2 \\phi \\\\
                        \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) &= \\partial_\\mu \\partial^\\mu \\phi
                        \\end{align}
                    \\]
                    where \\( \\frac{\\partial \\mathcal{L}}{\\partial \\phi} = -m^2 \\phi \\) and for \\(\\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right)\\) let's first find out \\( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\) and for that we change the subscript \\(\\mu\\) to say \\(\\alpha\\) in \\(\\mathcal{L}\\) and let's solve now:
                    \\[
                        \\begin{align}
                            \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} &= \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\frac{1}{2} \\left(\\partial_\\alpha \\phi \\partial^\\alpha \\phi - m^2 \\phi^2 \\right) \\\\
                            &= \\frac{1}{2} \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\left(\\eta^{\\nu \\alpha} \\partial_\\alpha \\phi \\partial_\\nu \\phi \\right) - \\frac{1}{2} \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\left( m^2 \\phi^2 \\right) \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\alpha} \\left[\\partial_\\nu \\phi \\frac{\\partial \\partial_\\alpha \\phi}{\\partial (\\partial_\\mu \\phi)} + \\partial_\\alpha \\phi \\frac{\\partial \\partial_\\nu \\phi}{\\partial (\\partial_\\mu \\phi)} \\right] \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\alpha} \\left[\\partial_\\nu \\phi \\delta^\\mu_\\alpha + \\partial_\\alpha \\phi \\delta^\\mu_\\nu \\right] \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\mu} \\partial_\\nu \\phi + \\frac{1}{2} \\eta^{\\mu \\alpha} \\partial_\\alpha \\phi \\\\
                            &= \\frac{1}{2} \\partial^\\mu \\phi + \\frac{1}{2} \\partial^\\mu \\phi \\\\
                            &= \\partial^\\mu \\phi
                        \\end{align}
                    \\]
                    Thus, we have: \\(\\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right)\\) as \\(\\partial_\\mu \\partial^\\mu \\phi\\) and hence we have:
                    \\[
                        \\begin{align}
                            \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) &= 0\\\\ 
                            \\implies \\partial_\\mu \\partial^\\mu \\phi + m^2 \\phi &= 0 \\\\
                            \\implies (\\square + m^2) \\phi (x^\\mu) &= 0
                        \\end{align}
                    \\]
        
                    <div class='border-solid border-2 border-red-500/75 px-3 rounded mx-auto max-w-max'>
                        Warning: \\(\\eta = (-1,1,1,1)\\)
                        \\[
                            \\mathcal{L} = -\\frac{1}{2}\\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2} m^2 \\phi^2    
                        \\]
                    </div>
        
                    <br/>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>A Bit About: Tensor</p>
                    <br/>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2">
                        Tensor = Symmetric + Anti-Symmetric
                            \\[
                                \\begin{align}
                                B_{\\mu \\nu} &= \\frac{1}{2} (B_{\\mu \\nu} + B_{\\nu \\mu} - B_{\\nu \\mu} + B_{\\mu \\nu}) \\\\
                                              &= \\frac{1}{2} (B_{\\mu \\nu} + B_{\\nu \\mu}) + \\frac{1}{2} (B_{\\mu \\nu} - B_{\\nu \\mu}) \\\\
                                              &= S_{\\mu \\nu} + A_{\\mu \\nu}
                                \\end{align}
                            \\]
                            where \\(S_{\\mu \\nu}\\) is Symmetric and \\(A_{\\mu \\nu}\\) is Anti-Symmetric
                        </li>
                        <li class="mb-2">
                                \\( \\underbrace{A_{\\alpha \\beta \\gamma} B^{\\alpha \\beta \\gamma}}_{\\text{sum over all indices}} \\to \\) a scalar number
                        </li>
                        <li class="mb-2">
                                \\( A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} = X^\\delta_\\gamma \\)
                                <br/>
                                Statement: wrt. \\( \\alpha, \\beta \\): \\( S \\to \\text{symmetric}, A \\to \\text{anti-symmetric} \\). Thus,
                                \\[
                                    \\begin{align}
                                    A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} &= - A_{\\beta \\alpha \\gamma} S^{\\alpha \\beta \\delta}\\\\
                                            &= - A_{\\beta \\alpha \\gamma} S^{\\beta \\alpha \\delta}\\\\
                                            &= - A_{\\alpha \\beta \\gamma} S^{\\beta \\alpha \\delta} \\\\
                                            &(\\ldots{} \\text{ } \\alpha, \\beta \\text{ are running indices}) \\\\
                                            \\implies A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} &= 0    
                                    \\end{align}
                                \\]
                        </li>
                    </ul>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>Maxwell's Equation</p>
                    \\begin{align}
                        \\mathcal{L} &= -\\frac{1}{4} F_{\\mu \\nu} F^{\\mu \\nu} - j_\\mu A^\\mu \\\\
                    \\end{align}
                    where \\(j_\\mu\\) is the current density, \\(F_{\\mu \\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu\\) and \\( A^\\mu = (\\phi, \\vec{A}) \\). Note that \\( F_{\\mu \\nu} \\) is anti-symmetric. <br/>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2">
                            \\(A^\\mu (x^\\mu) \\stackrel{\\text{Lorentz}}{\\underset{\\text{Transformation}}{---->}} A'^\\mu (x^\\mu) = \\Lambda^\\mu_\\nu A^\\mu (x^\\mu)\\)
                        </li>
                    </ul>
                    <br/>
                    Now let's solve this equation:
                    \\begin{align}
                        \\mathcal{L} &= \\underbrace{-\\frac{1}{4} F_{\\alpha \\beta} F^{\\alpha \\beta}}_{\\text{Free Lagrangian}} - \\underbrace{j_\\alpha A^\\alpha}_{\\text{source term } \\equiv \\text{ qE}} \\\\
                        &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} F_{\\alpha \\beta} F_{\\rho \\sigma} - j_\\alpha A^\\alpha \\\\
                    \\end{align}
                    Euler - Lagrange Equation of motion is:
                    \\[
                        \\frac{\\partial \\mathcal{L}}{\\partial A_\\nu} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu A_\\nu)} \\right) = 0
                    \\]
                    Now,
                    \\begin{align}
                        \\frac{\\partial \\mathcal{L}}{\\partial A_\\nu} &= - \\frac{\\partial j_\\alpha A^\\alpha}{\\partial A_\\nu}\\\\
                        &= - j_\\alpha \\eta^{\\alpha \\gamma} \\frac{\\partial A_\\gamma}{\\partial A_\\nu}\\\\
                        &= -j_\\alpha \\eta^{\\alpha \\gamma} \\delta^\\nu_\\gamma\\\\
                        &= -j^\\nu
                    \\end{align}
                    and,
                    \\begin{align}
                    \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu A_\\nu)} &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ \\frac{\\partial F_{\\alpha \\beta}}{\\partial (\\partial_\\mu A_\\nu)} F_{\\rho \\sigma} + \\frac{\\partial F_{\\rho \\sigma}}{\\partial (\\partial_\\mu A_\\nu)} F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ \\frac{\\partial (\\partial_\\alpha A_\\beta - \\partial_\\beta A_\\alpha}{\\partial (\\partial_\\mu A_\\nu)} F_{\\rho \\sigma} + \\frac{\\partial (\\partial_\\rho A_\\sigma - \\partial_\\sigma A_\\rho)}{\\partial (\\partial_\\mu A_\\nu)} F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ (\\delta^\\mu_\\alpha \\delta^\\nu_\\beta - \\delta^\\mu_\\beta \\delta^\\nu_\\alpha) F_{\\rho \\sigma} + (\\delta^\\mu_\\rho \\delta^\\nu_\\sigma - \\delta^\\mu_\\sigma \\delta^\\nu_\\rho) F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\left[ (\\delta^\\mu_\\rho \\delta^\\nu_\\sigma - \\delta^\\mu_\\sigma \\delta^\\nu_\\rho) F_{\\rho \\sigma} + (\\delta^\\mu_\\alpha \\delta^\\nu_\\beta - \\delta^\\mu_\\beta \\delta^\\nu_\\alpha) F_{\\alpha \\beta} \\right]\\\\
                    &= -\\frac{1}{4} \\left[ (F_{\\mu \\nu} - F_{\\nu \\mu}) + (F_{\\mu \\nu} - F_{\\nu \\mu}) \\right]\\\\
                    &= -\\frac{1}{4} \\left[ (F_{\\mu \\nu} + F_{\\mu \\nu}) + (F_{\\mu \\nu} + F_{\\mu \\nu}) \\right] *\\\\
                    &= - F_{\\mu \\nu}
                    \\end{align}
                    Thus, we have our Euler - Lagrange Equation of motion as:
                    <br/>
                    <br/>
                    <div class='border-solid border-2 border-blue-500/75 px-3 rounded mx-auto max-w-max'>
                        \\[
                            \\partial_\\mu F^{\\mu \\nu} = j^\\nu 
                        \\]
                    </div>
                    `,
                },
                {
                    title: 'Hamiltonian Formalism',
                    content: `
                        We know from Classical Mechanics that:
                        \\[
                            \\begin{align}
                                p &= \\frac{\\partial }{\\partial \\dot{q}} L (q, \\dot{q})\\\\
                                H(q,p) &= \\dot{q}_r p_r - L
                            \\end{align}    
                        \\]
                        and we also know that:
                        \\[
                            \\begin{align}
                                \\frac{\\partial H}{\\partial p} &= \\dot{q} \\\\
                                \\frac{\\partial H}{\\partial q} &= -\\dot{p}
                            \\end{align}    
                        \\]
                        Poisson bracket gives us:
                        \\[
                            \\begin{align}
                                [f_1, f_2]_p &= \\frac{\\partial f_1}{\\partial q_r} \\frac{\\partial f_2}{\\partial p_r} - \\frac{\\partial f_1}{\\partial p_r} \\frac{\\partial f_2}{\\partial q_r} \\\\
                                [q_r, p_s] &= \\delta_{rs} \\\\
                                \\dot{q} &= [q,H]_p\\\\
                                \\dot{p} &= [p,H]_p\\\\
                                \\dot{f} &= \\frac{df}{dt} = \\frac{\\partial f}{\\partial t} + [f,H]_p
                            \\end{align}    
                        \\]
                        Now, let's look into the Hamiltonian Formalism of Field Theory, where we define \\(\\Pi_A\\) which is the canonical momenta, as
                        \\[
                            \\Pi_A = \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\phi_A}}
                        \\]
                        and let's look at:
                        \\[
                            \\begin{align}
                            \\frac{\\delta \\dot{\\phi^B} (t, \\vec{y})}{\\delta \\dot{\\phi^A} (t, \\vec{x})} &= \\delta_A^B \\delta^3 (\\vec{x} - \\vec{y})\\\\
                            \\frac{\\delta \\phi^B (t, \\vec{y})}{\\delta \\dot{\\phi^A} (t, \\vec{x})} &= 0
                            \\end{align}\\\\ 
                        \\]
                        \\[
                            H = \\Pi_A \\dot{\\phi^A} - \\mathcal{L}    
                        \\]
                        Now let's write the Hamiltonian for Klein Gordon field:
                        \\[
                            \\begin{align}
                            \\mathcal{L} &= \\frac{1}{2}\\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2}m^2 \\phi^2 \\\\
                            &= \\frac{1}{2}\\dot{\\phi^2} - \\nabla^2 \\phi - \\frac{1}{2}m^2 \\phi^2 \\\\
                            \\implies \\Pi &= \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\phi}} = \\dot{\\phi}\\\\
                            \\therefore H &= \\Pi \\dot{\\phi} - \\mathcal{L}\\\\
                            &= \\dot{\\phi^2} - \\frac{1}{2}\\dot{\\phi^2} + \\nabla^2 \\phi + \\frac{1}{2}m^2 \\phi^2 \\\\
                            &= \\frac{1}{2}\\dot{\\phi^2} + \\nabla^2 \\phi + \\frac{1}{2}m^2 \\phi^2
                            \\end{align}
                        \\]
                        In field theory we have two motions,
                        <ul class="list-disc ml-8 my-4">
                            <li class='mb-2'> <strong>Kinetic Term :</strong> Billinear in fields. Ex \\(\\partial_\\mu \\partial^\\mu, m^2 \\phi^2, F_{\\mu \\nu} F^{\\mu \\nu}\\) etc.</li>
                            <li class='mb-2'><strong>Interaction Term :</strong> Ex. \\(V(\\phi) = \\lambda \\phi^3, \\alpha \\phi^4\\) </li>
                        </ul>
                    `,
                },
                {
                    title: 'Symmetries',
                    content: `
                        \\[\\phi(x) \\to \\phi'(x) = \\phi(x) + \\underbrace{\\delta \\phi(x)}_{\\text{continuous symmetry}}\\]
                        \\[\\delta \\mathcal{L} = \\partial_\\mu F^\\mu \\to \\text{symmetry} \\]
                        <p class='text-center text-md text font-semibold text-white'>E.O.M. remains same</p>
                        Now we introduce a parameter \\(\\alpha\\) in the Lagrangian to add some perturbation. Thus, we have
                        \\[
                            \\begin{align}
                                \\frac{\\delta \\mathcal{L}}{\\delta \\alpha} &= \\frac{\\delta \\mathcal{L}}{\\delta \\phi_a} \\frac{{\\delta \\phi_a}}{\\delta \\alpha} + \\frac{\\delta \\mathcal{L}}{\\delta (\\partial_\\mu \\phi_a)} \\frac{{\\delta (\\partial_\\mu \\phi_a)}}{\\delta \\alpha} \\\\
                                &= \\frac{\\delta \\mathcal{L}}{\\delta \\phi_a} \\frac{{\\delta \\phi_a}}{\\delta \\alpha} + \\frac{\\delta \\mathcal{L}}{\\delta (\\partial_\\mu \\phi_a)} \\frac{{\\partial_\\mu (\\delta \\phi_a)}}{\\delta \\alpha} \\\\
                                &= \\underbrace{ \\left[ \\frac{\\partial \\mathcal{L}}{\\partial \\phi_a} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi_a)} \\right) \\right]}_{\\text{= 0 by E.L Equation of motion}} \\frac{\\delta \\phi_a}{\\delta \\alpha} + \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi_a)}\\frac{\\delta \\phi_a}{\\delta \\alpha} \\right)
                            \\end{align}
                        \\]
                        Now, \\[
                                \\partial_\\mu F^\\mu = \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi_a)}\\frac{\\delta \\phi_a}{\\delta \\alpha} \\right) \\
                            \\]
                            \\[
                                \\begin{align}
                                    \\implies \\partial_\\mu \\left[ \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi_a)}\\frac{\\delta \\phi_a}{\\delta \\alpha} - F^\\mu \\right] &= 0\\\\
                                    \\ \\partial_\\mu j^\\mu = 0\\\\
                                \\end{align}
                            \\]
                        <ul class="list-disc ml-8 my-4">
                            <li class='mb-2'>For every continuous symmetry of \\(\\mathcal{L}\\) there is a conserved 4-current \\(j^\\mu\\)
                                <div class="flex flex-row items-center">
                                <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                                    \\[
                                        \\partial_\\mu j^\\mu = 0 
                                    \\]
                                </div>
                                    <p class="text-md text left font-semibold xl:-translate-x-56 text-white"> ---> Noether's theorem</p>
                                </div>
                                Note: The reverse statement is not true
                            </li>
                        </ul>
                        \\[
                            \\therefore \\partial_\\mu j^\\mu = \\frac{\\partial \\vec{j}}{\\partial t} + \\vec{\\nabla} \\vec{j} = 0
                        \\]
                        Now, 
                        \\[
                            \\begin{align}
                                Q &= \\int d^3x j \\to \\text{ function of time}\\\\
                                \\frac{dQ}{dt} &= \\int_{\\mathbb{R}^3} d^3x \\frac{\\partial j^0}{\\partial t}\\\\
                                &= - \\int_{\\mathbb{R}^3} \\vec{\\nabla} \\cdot \\vec{j} d^3x\\\\
                                &= -\\vec{j}|_{_{\\text{surface of } \\mathbb{R}^3}} = 0 \\to \\text{ asymtotically}
                            \\end{align}
                        \\]
                        <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                            \\[
                                \\frac{dQ}{dt} = 0
                            \\]
                        </div>
                        Q can be called 'charge', but do not restrict yourself to this terminology for Q.
                        <div class="border-t border-gray-300/20 my-4"></div>
                        Example:<span class='ml-4'></span> \\(\\mathcal{L} = \\partial_\\mu \\phi \\partial^\\mu \\phi^* - m^2 \\phi \\phi^*\\). Thus, our Lagrangian is a function of \\(\\mathcal{L}(\\phi, \\phi^*, \\partial_\\mu \\phi, \\partial_\\mu \\phi^*)\\) and we can see that there are two fields which compose this Lagrangian and thus this is where the subscript "a" comes from in \\(\\phi_a\\).
                        <br/>
                        <br/>
                        Now, let's do: \\(\\phi \\to \\phi' = \\phi(x) e^{i \\alpha} \\). Note that this is global symmetry.
                        <br/>
                        <br/>
                        <p class="text-md text left font-semibold text-pink-300">I go to point x and rotate the field by \\(\\alpha\\). This is called "Phase Rotation", and the Lagrangian remains constant.
                        \\[\\implies \\mathcal{L} = \\mathcal{L}' \\implies \\delta \\mathcal{L} = 0 \\]
                        \\[\\implies F^\\mu = 0 \\text{ or constant} \\]
                        </p>
                        <p class="text-md text left font-semibold text-pink-300">I go to point x and rotate the field by \\(\\alpha\\). Under a transformation if \\( \\delta \\mathcal{L} \\neq \\partial_\\mu F^\\mu \\implies \\) asymmetry.</p>
                        <br/>
                        \\[
                            \\begin{align}
                                j^\\mu &= \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi_a)}\\frac{\\delta \\phi_a}{\\delta \\alpha} - F^\\mu\\\\
                                &= \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\underbrace{ \\frac{\\delta \\phi}{\\delta \\alpha} }_{ i\\phi } + \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi^*)} \\underbrace{ \\frac{\\delta \\phi^*}{\\delta \\alpha} }_{ i\\phi^* }
                            \\end{align}
                        \\]
                        <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                            \\[
                                j^\\mu = -i\\left( \\phi \\partial^\\mu \\phi^* - \\phi^* \\partial^\\mu \\phi \\right)
                            \\]
                        </div>
                        As we know \\(\\partial_\\mu j^\\mu = 0\\). So, let's check that:
                        \\[
                            \\begin{align}
                                \\partial_\\mu \\left( \\phi \\partial^\\mu \\phi^* - \\phi^* \\partial^\\mu \\phi \\right) &= (\\partial_\\mu \\phi) (\\partial^\\mu \\phi^*) + \\phi \\square \\phi^* - (\\partial_\\mu \\phi^*) (\\partial^\\mu \\phi) - \\phi^* \\square \\phi  \\\\
                                &= 0
                            \\end{align}
                        \\]
                        This equation is true only for Euler-Lagrange equation of motion. So, if we plug \\( (\\square + m^2)\\phi_a = 0 \\) then we get the above equation eqal to 0.
                    `,
                },
                {
                    title: 'Space-Time Translation',
                    content: `
                        \\[
                            \\begin{align}
                                x^\\nu &\\to {x'}^\\nu = x^\\nu - \\epsilon^\\nu \\\\
                                \\phi(x) &\\to \\phi'(x) = \\phi(x) + \\underbrace{\\epsilon^\\nu \\partial_\\nu \\phi}_{\\delta \\phi}
                            \\end{align}
                        \\]
                        \\[
                            \\begin{align}
                                \\mathcal{L}(x) \\to \\mathcal{L}'(x) &= \\mathcal{L}(x) + \\epsilon^\\nu \\partial_\\nu \\mathcal{L}\\\\
                                 &= \\mathcal{L}(x) + \\partial_\\nu ( \\epsilon^\\nu \\mathcal{L} )
                            \\end{align}
                        \\]
                        Thus, we can now calculate Noether's current as:
                        \\[
                            \\begin{align}
                                j^\\mu &= \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} \\epsilon^\\nu \\partial_\\nu \\phi - \\epsilon^\\mu \\mathcal{L}\\\\
                                &= \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} (\\partial_\\nu \\phi) \\epsilon^\\nu - \\eta^\\mu_\\nu \\epsilon^\\nu \\mathcal{L}\\\\
                                &= T^\\mu_\\nu \\epsilon^\\nu
                            \\end{align}
                        \\]
                        where \\( T^\\mu_\\nu \\) is known as "Energy-Momentum Tensor" and 
                        <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                        \\[ T^\\mu_\\nu = \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\phi)} (\\partial_\\nu \\phi)  - \\eta^\\mu_\\nu \\mathcal{L} \\]
                        </div>
                        as \\( \\mathcal{L}(x) \\to \\mathcal{L}'(x) = \\mathcal{L}(x) + \\partial_\\nu ( \\epsilon^\\nu \\mathcal{L} ) \\) and this is symmetry transformation. This implies that 
                        \\[ 
                            \\begin{align}
                                \\partial_\\mu j^\\mu &= 0\\\\ 
                                \\partial_\\mu (T^\\mu_\\nu \\epsilon^\\nu) &= 0\\\\
                            \\end{align}
                        \\]
                        <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                            \\[
                                \\partial_\\mu (T^\\mu_\\nu ) = 0\\\\ 
                            \\]
                        </div>

                        This tells us that \\( T^\\mu_\\nu \\) is conserved.

                        <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                        \\[ T_{\\mu \\nu} = \\frac{\\partial \\mathcal{L}}{\\partial(\\partial^\\mu \\phi_a)} (\\partial_\\nu \\phi_a)  - \\eta_{\\mu \\nu} \\mathcal{L} \\]
                        </div>

                        This means that we have to sum over all fields \\( \\phi_a \\).
                        
                        <br/>

                        <p class='text-md text underline underline-offset-1 font-semibold text-white'>Charge :</p>

                        <br/>

                        \\[
                            \\underbrace{\\rho^0 = \\int d^3x T^{00}}_{\\text{energy of the system}} \\hspace{17pt} , \\hspace{7pt}   \\underbrace{\\rho^i = \\int d^3x T^{0i}}_{\\text{physical momentum of the system}}
                        \\]
                        <div class="border-t border-gray-300/20 my-4"></div>
                        Question:
                        \\[
                            \\mathcal{L} = \\frac{1}{2}\\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2}m^2 \\phi^2    
                        \\]
                        We know the formula for Energy-Momentum Tensor and thus we can write as:
                        \\[
                            \\begin{align}
                                T &= (\\partial_\\nu \\phi) \\frac{\\partial}{\\partial(\\partial^\\mu \\phi)} \\left( \\frac{1}{2}\\partial_\\alpha \\phi \\partial^\\alpha \\phi \\right) - \\eta_{\\mu \\nu} \\mathcal{L}\\\\
                                &= \\partial_\\mu \\phi \\partial_\\nu \\phi - \\eta_{\\mu \\nu} \\mathcal{L}\\\\
                                &= \\frac{1}{2} \\partial_\\mu \\phi \\partial_\\nu \\phi + \\frac{1}{2} m^2 \\phi^2
                            \\end{align}
                        \\]
                        Now, 
                        \\[
                            \\begin{align}
                                T^{00} &= \\frac{1}{2} \\dot{\\phi^2} + \\frac{1}{2} m^2 \\phi^2\\\\
                                E &= \\int \\left( \\frac{1}{2} \\dot{\\phi^2} + \\frac{1}{2} m^2 \\phi^2 \\right) d^3 x
                            \\end{align}
                        \\]
                        Similarly,
                        \\[
                            P^i = \\int d^3 x \\hspace{5pt} \\dot{\\phi} \\partial^i \\phi    
                        \\]
                        <div class="border-t border-gray-300/20 my-4"></div>
                        In Klein Gordon Field: \\( T_{\\mu \\nu} = T_{\\nu \\mu} \\). But this is not true, in general.
                        <br/>
                        <br/>
                        Now, let's learn how to make \\( T_{\\mu \\nu} \\) symmetric.
                        \\[
                            \\theta^{\\mu \\nu} = T^{\\mu \\nu} + \\partial_\\lambda f^{\\lambda \\mu \\nu} \\hspace{7pt}, \\hspace{7pt} \\text{where } f^{\\lambda \\mu \\nu} = - f^{\\mu \\lambda \\nu}
                        \\]
                        \\[
                            \\begin{align}
                                p_\\nu &= \\int T_\\nu^0 d^3 x
                                = \\int \\theta^0_\\nu d^3 x - \\underbrace{\\int \\partial_\\lambda f^{\\lambda 0}_\\nu d^3 x}_{\\text{under certain conditions this goes to 0}}
                            \\end{align}
                        \\]
                        <ul class="list-disc ml-8 my-4">
                            <li class="mb-2">Charge for \\( T^{\\mu \\nu} \\) and \\( \\theta^{\\mu \\nu} \\). Energy and momentum is the 'charge' here. Use the arbitrariness to make \\( T^{\\mu \\nu} \\) symmetric.</li>
                        </ul>
                        <br/>
                        For \\[
                                \\begin{align}
                                    \\mathcal{L}_{EM} = -\\frac{1}{4}F_{\\mu \\nu} F^{\\mu \\nu}\\\\
                                    T^{\\mu \\nu}_{EM} = F^{\\mu \\alpha} F^\\nu_\\alpha - \\frac{1}{4} \\eta^{\\mu \\alpha} F_{\\alpha \\beta} F^{\\alpha \\beta}
                                \\end{align}
                            \\]

                            <div class="border-solid border-2 border-blue-500/75 px-3 rounded my-1 mx-auto max-w-max">
                            \\[ 
                                T_{00} = \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\phi}} \\dot{\\phi} - \\mathcal{L} = \\Pi \\dot{\\phi} - \\mathcal{L} = H
                            \\]
                            </div>
                        <br/>
                        <p class='text-md text-center text underline underline-offset-1 font-semibold text-white'>Conservation due to Space-Time translation</p>
                        \\[
                            \\begin{align}
                                \\mathcal{L} &= \\frac{1}{2} \\eta^{ab} \\partial_a \\phi \\partial_b \\phi + \\frac{1}{2}m^2 \\phi^2\\\\
                                H &= \\Pi \\dot{\\phi} - \\mathcal{L} \\hspace{7pt} , \\hspace{5pt} (\\text{where } \\Pi = \\Pi^0 = \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\phi}})\\\\
                                H_{KG} &= \\frac{1}{2}\\dot{\\phi^2} - \\frac{1}{2}(\\vec{\\nabla} \\phi)^2 + \\frac{1}{2}m^2 \\phi^2 
                            \\end{align}
                        \\]
                        Now as we have \\(T^{\\mu \\nu}\\), we can write
                        \\[
                            T^{\\mu \\nu} = \\eta^{\\nu \\alpha} \\partial_\\alpha \\phi \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} - \\eta^{\\mu \\nu} \\mathcal{L}
                        \\]
                        Now,
                        \\[
                            \\begin{align}
                                \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} &= \\frac{1}{2}\\eta^{ab}\\left[ \\partial_a \\phi \\frac{\\partial (\\partial_b \\phi)}{\\partial (\\partial_\\mu \\phi)} + \\partial_b \\phi \\frac{\\partial (\\partial_a \\phi)}{\\partial (\\partial_\\mu \\phi)} \\right]\\\\
                                &= \\frac{1}{2}\\eta^{ab} \\partial_a \\phi \\delta^\\mu_b + \\frac{1}{2}\\eta^{ab} \\partial_b \\phi \\delta^\\mu_a\\\\
                                &= \\partial^\\mu \\phi
                            \\end{align}
                        \\]
                        Now,
                        \\[
                            \\eta^{\\nu \\alpha} (\\partial_\\alpha \\phi) \\partial^\\mu \\phi = \\partial^\\nu \\phi \\partial^\\mu \\phi
                        \\]
                        Thus,
                        \\[
                            T^{\\mu \\nu} =  \\partial^\\nu \\phi \\partial^\\mu \\phi - \\eta^{\\mu \\nu}\\left[ \\frac{1}{2} \\partial_a \\phi \\partial^a \\phi - \\frac{1}{2}m^2 \\phi^2 \\right]
                        \\]

                        <div class="border-solid border-2 border-blue-500/75 p-3 rounded my-1 mx-auto max-w-max">
                            Check: \\( \\frac{1}{2} \\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2}m^2 \\phi^2 - \\lambda x^2 \\) does not remain conserved. Find \\( T_{\\mu \\nu} \\) and \\( \\partial_\\mu T^{\\mu \\nu} \\propto \\lambda\\)
                        </div>
                    `,
                },
            ]
        },
        {
            title: 'Quantization of Scalar Fields',
            subsections: [
                {
                    title: 'Introduction',
                    content: `
                        We study about causality/ locality. Note that \\( \\mathcal{L}(x^\\mu) \\) does not interact with \\( \\mathcal{L}(y^\\mu) \\). \\( \\mathcal{L} \\) cannot be written as \\( \\mathcal{L}(x^\\mu, y^\\mu) \\). It can only be written as \\( \\mathcal{L}(x^\\mu) \\).
                        <br/>
                        <p class='text-center text-lg text underline underline-offset-8 font-semibold text-accent'>Wave Particle Duality</p>
                        <br/>
                        Fundamental description - Field associated with each particle. Example :-
                        
                        <ul class="list-disc ml-8 my-4">
                            <li class="mb-2">\\( e \\to \\phi_e(x^\\mu) \\)</li>
                            <li class="mb-2">\\( \\nu \\to \\phi_\\nu(x^\\mu) \\)</li>
                            <li class="mb-2">\\( \\text{photon} \\to A_\\mu(x^\\mu) \\)</li>
                        </ul>  
                        What is the difference between \\( \\phi_e(x^\\mu) \\) and \\( \\psi_e(\\vec{x}, t) \\)?
                        <br/>
                        <span class="ml-5 text-green-200">Note:   \\( \\phi_e(x^\\mu) \\neq \\psi_e(\\vec{x}, t) \\)</span>
                        <br/>
                        <h1 class="text-accent">&#9679; Beta Decay: \\( n \\to p + e^- + \\bar{\\nu_e} \\)</h1>
                        If we have
                        \\[
                            \\mathcal{L}(x^\\mu) = \\frac{1}{2} \\partial_\\mu \\phi(x^\\mu) \\partial^\\mu \\phi(x^\\mu) - \\frac{1}{2}m^2 \\phi^2(x^\\mu) - \\frac{1}{4}F_{\\mu \\nu} F^{\\mu \\nu} + \\underbrace{\\phi(x^\\mu)A_\\mu(x^\\mu) A^\\mu(x^\\mu)}_{\\text{Interaction term}}
                            \\]
                        This "Interaction term" tells us how the \\(\\phi\\) field and \\(A_\\mu\\) field interact with each other at same space-time. So, \\(\\phi\\) can converge to \\(A_\\mu\\) and vice-versa.
                        <br/>
                        <br/>
                        Thus, \\( n \\to p + e^- + \\bar{\\nu_e} \\) can be described by \\( \\mathcal{L} \\) which has term \\( \\phi_n(x^\\mu) \\hspace{2pt} \\phi_e(x^\\mu) \\hspace{2pt} \\phi_p(x^\\mu) \\hspace{2pt} \\phi_{\\bar{\\nu_e}}(x^\\mu) \\)
                        <br/>
                        <h1 class="text-accent">&#9679; Relativistic</h1>
                        If we have a particle of mass 'm' and I confine the particle in space of compton wavelength, i.e. \\( \\lambda_c = \\frac{\\hbar}{mc} \\). Then \\( \\Delta p \\approx \\frac{\\hbar}{\\Delta x} = \\frac{\\hbar}{\\hbar / mc} = mc \\). Thus, \\( \\Delta E = mc^2 \\). Hence, one particle whose energy is \\(mc^2\\) has an uncertainity in energy of \\( mc^2 \\). Thus, one particle creates two particles.
                        <br/>
                        <br/>
                        Let's now recall few things. We say that 
                        <ul class="list-disc ml-8 my-4">
                            <li class="mb-2">\\( \\mathcal{L}_{KG} = \\partial_\\mu \\phi \\hspace{2pt} \\partial^\\mu \\phi^* - m^2 \\phi\\phi^* + V(|\\phi|^2) \\) has a Global symmetry where \\( \\phi(x) \\to \\phi'(x) = \\phi(x)e^{-iq\\theta} \\) where \\( \\theta \\) is space-time independent.</li>
                            <li class="mb-2">\\( \\mathcal{L}_{EM} = -\\frac{1}{4}F_{\\mu \\nu} F^{\\mu \\nu} - \\frac{1}{2} m^2 A^\\mu A_\\mu \\) has a local symmetry as \\( A_\\mu \\to A_\\mu' = A_\\mu + \\partial_\\mu \\theta(x^\\mu) \\) </li>
                        </ul>
                    `,
                },
                {
                    title: 'Canonical Quantization and Fourier Decomposition of field',
                    content: `
                        
                    `,
                }
            ]
        }
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
        <div className="h-full bg-black/40 touch-auto">
            <div className="h-full translate-y-16 overflow-y-auto overflow-visible overscroll-y-auto scroll-smooth pb-28 pt-4">
                {/* <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full scroll-smooth'> */}
                <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                    <h1 className="text-3xl font-semibold text-center font-mono justify-center text-accent mb-4">Quantum Field Theory</h1>
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
                {/* </SimpleBar> */}
            </div>
            {/* <ScrollToTopArrow /> */}
        </div>
    );
};

export default QFT;

