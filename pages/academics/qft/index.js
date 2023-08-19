import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const qft = () => {
    const content = `
    Field is a function of space and time. Example: Electric field \\((\\vec{x}, t) \\to \\vec{E}(\\vec{x}, t)\\) and Magnetic Field \\((\\vec{x}, t) \\to \\vec{B}(\\vec{x}, t)\\) <br/>
    <br/>
    Field has \\(\\infty\\) degrees of freedom. <br/> <br/>
    Notation: \\(\\phi(\\vec{x}, t)\\) <br/> <br/>
    It may be:
    <ul class="list-disc ml-8 my-4">
        <li class="mb-2">Fundamental Field</li>
        <li class="mb-2">Component of an object \\( \\phi^A (t, \\vec{x}) \\)</li>
        <li class="mb-2">Can be part of internal space: \\[ \\phi^A (t, \\vec{x}) = \\int \\phi_k e^{ik \\cdot x} d^3k \\]</li>
      </ul>
    <br/>
    In general:
    \\[
        \\phi(\\vec{x}, t) : \\mathcal{L} = \\mathcal{L}(\\phi(x^\\mu), \\partial_\\mu \\phi(x^\\mu))\\\\
        x^\\mu = (x^0, \\vec{x}) = (t, \\vec{x})
    \\]
    <br/>
    Action:
    \\[
        S = \\int \\mathcal{L} d^4x \\to \\text{Lagrangian Density} \\mathcal{L}
    \\]
    <br/>
    No we look into Notations:
    \\[
        x^\\mu = (x^0, \\vec{x}) = (ct, \\vec{x}) , \\text{  } [c=\\hbar = 1 \\text{ in  natural units}]
    \\]
    \\[
        \\eta_{\\mu \\nu} = \\text{Minkowski Metric} = \\text{Diagonal}(1, -1, -1, -1)
    \\]
    \\[
        \\eta^{\\mu \\nu} = \\text{Minkowski Metric} = \\text{Diagonal}(1, -1, -1, -1)
    \\]
    \\[
        \\eta^{\\mu \\nu} \\eta_{\\nu \\mu} = \\mathbb{1}  
    \\]
    \\[    
        x_\\mu = \\eta_{\\mu \\nu} x^\\nu = (t, -\\vec{x})  
    \\]
    \\[    
        A \\cdot B = \\eta_{\\mu \\nu} A^\\mu B^\\nu = A^0 B^0 - A^1 B^1 - A^2 B^2 - A^3 B^3  
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
        p^2 = m^2    
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
        \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = 0 \\\\
        \\frac{\\partial \\mathcal{L}}{\\partial \\phi} = -m^2 \\phi \\\\
        \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = \\partial_\\mu \\partial^\\mu \\phi
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
  `;

    return (
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-28 mb-10 pt-3">
                <div className="max-w-4xl mx-auto p-4 shadow-2xl rounded-lg">
                    <h1 className="text-2xl font-semibold text-accent mb-4 justify-center text-center">Quantum Field Theory</h1>
                    <MathJaxWrapper content={content} />
                </div>
            </div>
        </SimpleBar>
    );
};

export default qft;


