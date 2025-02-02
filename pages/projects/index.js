// // components/Projects.js
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../variants';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

// const Projects = () => {
//     const projects = [
//         {
//             title: 'Gravitational Wave',
//             description: 'I use gwpy, PyCBC and other libraries to analyze and process the signals received from LIGO. And I also am working on implementing AI/ ML in data processing.',
//             imageUrl: '/GW_wave.png',
//             url: '/',
//         },
//         {
//             title: 'Quantum Computation',
//             description: 'Description of Project 2',
//             imageUrl: '/qft.jpg',
//             url: '/',
//         },
//     ];

//     return (
//         <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pt-10'>
//         <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
//             <div className='container mx-auto h-full overflow-y-auto mt-18 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col items-center xl:flex-row gap-x-6'>
//                 {/* text */}
//                 <div className='flex-1 mt-[-50px] flex flex-col justify-center'>
//                     <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
//                         My <span className='text-accent'>Projects</span>.
//                     </motion.h2>
//                     <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
//                         I always had the curiosity to know the unknown and to venture on a quest of knowledge. I have been doing research in the field of Astrophysics, I play guitar, write codes and I am also interested in financial markets. And here are some of my curated projects on all these domains.
//                     </motion.p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                         {projects.map((project, index) => (
//                             <Link key={index} href={project.url} legacyBehavior>
//                                 <a>
//                                     <motion.div
//                                         className="bg-black/50 shadow-lg rounded-lg overflow-hidden"
//                                         variants={fadeIn('left', 0.6)}
//                                         initial='hidden'
//                                         animate='show'
//                                         exit='hidden'
//                                     >   
//                                         <Image
//                                             src={project.imageUrl}
//                                             height={340}
//                                             width={640}
//                                             alt={project.title}
//                                             placeholder=''
//                                             className="w-full h-36 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <h2 className="text-xl font-semibold">{project.title}</h2>
//                                             <p className="prose font-semibold">{project.description}</p>
//                                         </div>
//                                     </motion.div>
//                                 </a>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </SimpleBar>
//         </div>
//     );
// };

// export default Projects;


// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../../variants';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

// const Projects = () => {
//     const allProjects = [
//         {
//             title: 'Gravitational Wave',
//             description: 'I use gwpy, PyCBC and other libraries to analyze and process the signals received from LIGO. And I also am working on implementing AI/ ML in data processing.',
//             imageUrl: '/GW_wave.png',
//             url: '/',
//             category: 'Physics',
//         },
//         {
//             title: 'Quantum Computation',
//             description: 'Description of Project 2',
//             imageUrl: '/qft.jpg',
//             url: '/',
//             category: 'Computer',
//         },
//         // Add more projects with categories as needed
//     ];

//     // Define the categories
//     const categories = ['All', 'Physics', 'Computer'];

//     // State to keep track of the selected category
//     const [selectedCategory, setSelectedCategory] = useState('All');

//     // Function to filter projects based on the selected category
//     const filteredProjects = selectedCategory === 'All'
//         ? allProjects
//         : allProjects.filter(project => project.category === selectedCategory);

//     return (
//         <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pt-10'>
//             <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
//                 <div className='container mx-auto h-full overflow-y-auto mt-18 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col items-center xl:flex-row gap-x-6'>
//                     {/* Category dropdown */}

//                     {/* Rest of your code */}
//                     {/* text */}
//                     <div className='flex-1 mt-[-50px] flex flex-col justify-center'>
//                         <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
//                             My <span className='text-accent'>Projects</span>.
//                         </motion.h2>
//                         <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='pb-4'>
//                         <select
//                             onChange={(e) => setSelectedCategory(e.target.value)}
//                             value={selectedCategory}
//                             className='border prose cursor-pointer rounded bg-transparent  p-2'>
//                             {categories.map((category, index) => (
//                                 <option key={index} value={category}>
//                                     {category}
//                                 </option>
//                             ))}
//                         </select>
//                     </motion.div>
//                         <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
//                             I always had the curiosity to know the unknown and to venture on a quest of knowledge. I have been doing research in the field of Astrophysics, I play guitar, write codes and I am also interested in financial markets. And here are some of my curated projects on all these domains.
//                         </motion.p>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                             {filteredProjects.map((project, index) => (
//                                 <Link key={index} href={project.url} legacyBehavior>
//                                     <a>
//                                         <motion.div
//                                             className="bg-black/50 shadow-lg rounded-lg overflow-hidden"
//                                             variants={fadeIn('left', 0.6)}
//                                             initial='hidden'
//                                             animate='show'
//                                             exit='hidden'
//                                         >
//                                             <Image
//                                                 src={project.imageUrl}
//                                                 height={340}
//                                                 width={640}
//                                                 alt={project.title}
//                                                 placeholder=''
//                                                 className="w-full h-36 object-cover"
//                                             />
//                                             <div className="p-4">
//                                                 <h2 className="text-xl font-semibold">{project.title}</h2>
//                                                 <p className="prose font-semibold">{project.description}</p>
//                                             </div>
//                                         </motion.div>
//                                     </a>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </SimpleBar>
//         </div>
//     );
// };

// export default Projects;


import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Projects = () => {
    const allProjects = [
        {
            title: 'Gravitational Wave',
            description: 'I use gwpy, PyCBC and other libraries to analyze and process the signals received from LIGO. And I also am working on implementing AI/ ML in data processing.',
            imageUrl: '/GW_wave.png',
            url: '/projects/gw',
            category: 'Physics',
        },
        {
            title: 'Quantum Computation',
            description: 'I have done Quantum Simulation of Hawking Radiation Using VQE Algorithm on IBM Quantum Computer, as a part of my Winter Project.',
            imageUrl: '/QM_Comp.jpg',
            url: '/notes/Quantum_Computation_Project.pdf',
            category: 'Computer',
        },
        {
            title: 'CodeSandbox',
            description: 'This project aims to let create projects online on my page using codeSandbox. Though this project is still under development stage for allowing python to run.',
            imageUrl: '/Computing.jpg',
            url: '/projects/QM_Comp',
            category: 'Computer',
        },
        {
            title: 'Chess',
            description: 'You can practise your chess moves here. Find the best moves and hone your skills.',
            imageUrl: '/chess.jpg',
            url: '/projects/chess',
            category: 'Games',
        },
        // Add more projects with categories as needed
    ];

    // Define the categories
    const categories = ['All', 'Physics', 'Computer', 'Games'];

    // State to keep track of the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to filter projects based on the selected category
    const filteredProjects = selectedCategory === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === selectedCategory);

    return (
        <div className='h-full bg-black/40 translate-y-0 overflow-y-auto overflow-visible overscroll-y-auto pt-10'>
            <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
                <div className='container mx-auto h-full overflow-y-auto mt-12 mb-4 p-4 pt-12 pb-28 sm:mt-20 sm:p-0 sm:pt-10 sm:pb-10 flex flex-col xl:flex-row gap-x-6'>
                    {/* Rest of your code */}
                    {/* text */}
                    <div className='flex-1 mt-[-50px] flex flex-col justify-center'>
                        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
                            My <span className='text-accent'>Projects</span>.
                        </motion.h2>
                        <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                            I always had the curiosity to know the unknown and to venture on a quest of knowledge. I have been doing research in the field of Astrophysics, I play guitar, write codes and I am also interested in financial markets. And here are some of my curated projects on all these domains.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12">
                            {filteredProjects.map((project, index) => (
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
                                                // placeholder='blur'
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
                    {/* Category dropdown */}
                    <div className='absolute top-14 right-4 lg:right-20 xl:top-40 xl:right-40 mt-[-10px] xl:mt-[-50px] mr-4 flex flex-col items-end'>
                        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'>
                            <select
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                value={selectedCategory}
                                className='border border-slate-300/50 focus:outline-none text-white prose cursor-pointer rounded font-semibold z-40 bg-transparent p-2'>
                                {categories.map((category, index) => (
                                    <option key={index} value={category} className='bg-[#281B4B]'>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </motion.div>
                    </div>

                </div>
            </SimpleBar>
        </div>
    );
};

export default Projects;
