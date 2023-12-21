//import react
import React from 'react';

// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Academics = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8 -translate-y-5'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-12'>My Lectures <span className='text-accent'>.</span></motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Welcome to my projects page! Here you&rsquo;ll find all my notes from my college courses and independent study. I hope that this helps other learn something new. If you have any questions or need any help with your own projects, feel free to ask me! </motion.p>
          </div>

          {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Academics;
