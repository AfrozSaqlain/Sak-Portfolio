import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const astro = () => {
    const content = `
    This is an inline equation: \\(E=mc^2\\)
    And here is a displayed equation:
    \\[
    \\int_{a}^{b} f(x) dx
    \\]
    \\(ax^2+bx+c=0\\)
    <br />
    roots of quadratic equation:
    \\[
    x = {-q \\pm \\sqrt{q^2-4pr} \\over 2p}
    \\]
    \\[
        \\begin{bmatrix}
            1 & 2 & 3 \\\\
            a & b & c
        \\end{bmatrix}
    \\]
    \\[
        \\begin{align}
         \\int x^2 dx &= \\frac{1}{3} x^3 + C \\\\
         \\int u^2 du &= \\frac13 u^3 + C \\\\
        \\end{align}    
    \\]
    <ul className='list-disc mr-24 text-left'>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    This
    is 
    good
    <br />
    <br />
    Hey, this is a test of the MathJax component.  It should render the following equation:
    \\[
        \\int_{a}^{b} f(x) dx\\\\
        \\int_{a}^{b} f(x) dx\\\\
        \\int_{a}^{b} f(x) dx\\\\
        \\int_{a}^{b} f(x) dx\\\\
    \\]
  `;

    return (
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <div className="max-w-4xl mx-auto p-4 shadow-2xl rounded-lg">
                    <h1 className="text-2xl font-semibold mb-4">MathJax Equations</h1>
                    <MathJaxWrapper content={content} />
                </div>
            </div>
        </SimpleBar>
    );
};

export default astro;


