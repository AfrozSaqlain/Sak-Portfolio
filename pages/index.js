import React from "react";

//next image
import Head from "next/head";
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <>
      <Head>
        <title>Saqlain Afroz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes in our Next.js app. Elevate your knowledge across multiple domains with our curated content." />
        <meta name="keywords" content="financial investment, fashion, web development, academic courses, tips, diy, ai/ml, trends, insights, notes"></meta>
        <meta name="author" content="Saqlain Afroz"></meta>

        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>

        <meta name="p:domain_verify" content="45d9f00dc549509d8c1964322f2fad87"/>

        {/* Open Graph Meta Tags (for sharing on social media) */}
      <meta property="og:title" content="Saqlain Afroz Portfolio Webapp"/>
      <meta property="og:description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes in our Next.js app. Elevate your knowledge across multiple domains with our curated content."/>
      <meta property="og:image" content="profile-pic.png"/>
      <meta property="og:url" content="https://sak-portfolio.vercel.app/"/>
      <meta property="og:type" content="website"></meta>

        <link rel="icon" href="favicon.png" type="image/x-icon"></link>
      </Head>
      <div className='bg-primary/60 h-full'>
        {/*text*/}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
            {/* title */}
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>
              Transforming Ideas <br /> Into {' '}
              <span className='text-accent'>Reality</span>
            </motion.h2>
            {/* subtitle */}
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              <p className="mb-3"> In the vastness of space and time, Our love is like a quantum rhyme, Entangled forever, yours and mine.</p>
              {/* <br /> <br /> */}
              <p className="mb-3"> As we journey through life&rsquo;s great expanse, Our love will grow with each quantum dance, A bond that nothing can ever chance.</p>
              {/* <br /> <br /> */}
              <p className="mb-3"> From the smallest particles to the stars above, Our love is bound by quantum love, A force that nothing can ever shove.</p>
            </motion.div>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          {/* particles */}
          <ParticlesContainer />
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[666px] max-h-[607px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
