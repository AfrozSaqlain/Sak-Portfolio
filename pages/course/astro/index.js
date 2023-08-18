import MathJaxWrapper from '../../../components/MathJaxWrapper';

const astro = () => {
    const content = `
    This is an inline equation: \\(E=mc^2\\)
    And here is a displayed equation:
    \\[
    \\int_{a}^{b} f(x) dx
    \\]
    Klein Gordon equation:
    \\[
    \\left(\\partial_{\\mu}\\partial^{\\mu}+\\frac{m^{2}c^{2}}{\\hbar^{2}}\\right)\\psi=0
    \\]
    Dirac equation: Let's try some matrices: \\(\\gamma^{0}, \\gamma^{1}, \\gamma^{2}, \\gamma^{3}\\) and see if we can go on a vacation to Maldives on a rocketship.
    \\[
    \\left(i\\gamma^{\\mu}\\partial_{\\mu}-\\frac{mc}{\\hbar}\\right)\\psi=0
    \\]
    Schrodinger equation:
    \\[
    i\\hbar\\frac{\\partial}{\\partial t}\\Psi=\\hat{H}\\Psi
    \\]
    Heisenberg equation:
    \\[
    \\frac{d\\hat{A}}{dt}=\\frac{i}{\\hbar}\\left[\\hat{H},\\hat{A}\\right]+\\frac{\\partial\\hat{A}}{\\partial t}
    \\]
    Hamiltonian:
    \\[
    \\hat{H}=\\frac{\\hat{p}^{2}}{2m}+V(\\hat{x})
    \\]
    Lagrangian:
    \\[
    L=\\frac{1}{2}m\\dot{x}^{2}-V(x)
    \\]
    Lagrangian:
    \\[
    L=\\frac{1}{2}m\\dot{x}^{2}-V(x)
    \\]
    Lagrangian:
    \\[
    L=\\frac{1}{2}m\\dot{x}^{2}-V(x)
    \\]
  `;

    return (
        <div className="h-full py-8 translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto">
            <div className="max-w-3xl mx-auto p-4 shadow-2xl rounded-lg">
                <h1 className="text-2xl font-semibold mb-4">MathJax Equations</h1>
                <MathJaxWrapper content={content} />
            </div>
        </div>
    );
};

export default astro;


