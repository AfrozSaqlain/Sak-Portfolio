// components/Projects.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Projects = () => {
    const projects = [
        {
            title: 'Gravitational Wave',
            description: 'I use gwpy, PyCBC and other libraries to analyze and process the signals received from LIGO. And I also am working on implementing AI/ ML in data processing.',
            imageUrl: '/GW_wave.png',
            url: '/',
        },
        {
            title: 'Quantum Computation',
            description: 'Description of Project 2',
            imageUrl: '/qft.jpg',
            url: '/',
        },
        {
            title: 'Quantum Computation',
            description: 'Description of Project 2',
            imageUrl: '/qft.jpg',
            url: '/',
        },
        {
            title: 'Quantum Computation',
            description: 'Description of Project 2',
            imageUrl: '/qft.jpg',
            url: '/',
        },
        {
            title: 'Quantum Computation',
            description: 'Description of Project 2',
            imageUrl: '/qft.jpg',
            url: '/',
        },
    ];

    return (
        <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pt-10'>
        <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
            <div className='container mx-auto h-full overflow-y-auto mt-18 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col items-center xl:flex-row gap-x-6'>
                {/* text */}
                <div className='flex-1 mt-[-50px] flex flex-col justify-center'>
                    <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
                        My <span className='text-accent'>Projects</span>.
                    </motion.h2>
                    <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        I always had the curiosity to know the unknown and to venture on a quest of knowledge. I have been doing research in the field of Astrophysics, I play guitar, write codes and I am also interested in financial markets. And here are some of my curated projects on all these domains.
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {projects.map((project, index) => (
                            <Link key={index} href={project.url} legacyBehavior>
                                <a>
                                    <motion.div
                                        className="bg-black/50 shadow-lg rounded-lg overflow-hidden"
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
                                            placeholder=''
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

export default Projects;
