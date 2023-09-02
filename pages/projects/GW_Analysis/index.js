import Head from 'next/head';
import PythonCodeRunner from '../../../components/PythonCodeRunner';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const index = () => {

    const initialCode = `print('Hello World')`;

    return (
        <div>
            <Head>
                <title>Saqlain Afroz | Gravitational Wave</title>
                <meta name="description" content="Run Python code and display the output." />
            </Head>

            <main>
                <div className="relative h-full">
                    <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                            <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                                <h1 className="text-2xl font-semibold text-center font-mono justify-center text-accent mb-4">Gravitational Wave Data Analysis</h1>
                                <PythonCodeRunner initialCode={initialCode} />
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default index;
