import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const GW = () => {
    const allProjects = [
        {
            title: 'Normalizing Flows in Parameter Estimation of Gravitational Waves',
            description: 'I have used Normalizing Flows and Neural Posterior Estimation to train my model to do parameter estimation of gravitationally lensed gravitational waves.',
            imageUrl: '/ligo.png',
            url: '/notes/MS_Thesis.pdf',
        },
        {
            title: 'Parameter Estimation of Gravitational Waves using Bayesian Neural Network',
            description: 'I have used Normalizing Flows and Neural Posterior Estimation to train my model to do parameter estimation of gravitationally lensed gravitational waves.',
            imageUrl: '/bnn.jpg',
            url: 'https://github.com/AfrozSaqlain/Bayesian-Neural-Network',
        },
        {
            title: 'Physics Informed Neural Network',
            description: 'Physics Informed Neural Networks or PINNs work on the concept of minimizing the loss function on the basis of information that we get from the  physics behind our system, and we try to optimize our model on the basis of that.',
            imageUrl: '/pinn.jpg',
            url: 'https://github.com/AfrozSaqlain/Physics-Informed-Neural-Network',
        },
        {
            title: 'Convolutional Neural Network',
            description: 'Convolutional Neural Network or CNN is used for computer vision, or in simple terms, to allow the machine to look and identify objects and classify them.',
            imageUrl: '/cnn.jpg',
            url: 'https://github.com/AfrozSaqlain/Convolutional-Neural-Network',
        },
    ];

    return (
        <div className='h-full bg-black/40 translate-y-0 overflow-y-auto pt-10'>
            <SimpleBar forceVisible="y" autoHide={true} className="h-full">
                <div className='container mx-auto h-full overflow-y-auto mt-12 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col xl:flex-row gap-x-6'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='h2'
                        >
                            Gravitational Wave <span className='text-accent'>Astronomy</span>.
                        </motion.h2>
                        {/* <motion.p
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                        >
                        </motion.p> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12">
                            {allProjects.map((project, index) => (
                                <Link key={index} href={project.url} legacyBehavior>
                                    <a>
                                        <motion.div
                                            className="bg-black/50 shadow-lg rounded-lg overflow-hidden hover:bg-slate-700/20"
                                            variants={fadeIn('left', 0.6)}
                                            initial='hidden'
                                            animate='show'
                                            exit='hidden'
                                        >
                                            <Image
                                                src={project.imageUrl}
                                                height={340}
                                                width={640}
                                                alt={project.title}
                                                className="w-full h-36 object-cover"
                                            />
                                            <div className="p-4">
                                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                                <p className="prose font-semibold">{project.description}</p>
                                            </div>
                                        </motion.div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
};

export default GW;
