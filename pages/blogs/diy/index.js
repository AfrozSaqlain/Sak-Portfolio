//import react
import React from 'react';

// components
import ServiceSlider from '../../../components/diy';
import Bulb from '../../../components/Bulb';
import Circles from '../../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const diy = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8'>DIY <span className='text-accent'>.</span></motion.h2>
          </div>
            {/* slider */}
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className='w-full xl:max-w-[65%]'>
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default diy;
