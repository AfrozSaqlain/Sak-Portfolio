//next image
import Image from 'next/image';

//next link
import Link from 'next/link';

import React from 'react';

// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'General Relativity',
          subtitle: 'and Cosmology',
          path: '/blackhole.jpg',
          url: '../academics/gtr_and_cosmology',
        },
        {
          title: 'Differential',
          subtitle: 'Geometry',
          path: '/differential_geometry.jpg',
          url: '../academics/Differential_Geometry'
        },
        {
          title: 'Symmetry Methods',
          subtitle: 'in Physics',
          path: '/symmetry3.jpg',
          url: '/',
        },
        {
          title: 'Space',
          subtitle: 'Astronomy',
          path: '/comp_astro_4.jpg',
          url: '../academics/space_astronomy',
        },
      ],
    },
    {
      images: [
        {
          title: 'Introductory',
          subtitle: 'Astrophysics',
          path: '/space.jpg',
          url: '../academics/astro',
        },
        {
          title: 'Electricity',
          subtitle: 'and Magnetism',
          path: '/lightning.jpg',
          url: '../academics/electromag',
        },
        {
          title: 'Non-Linear',
          subtitle: 'Dynamics',
          path: '/chaos.png',
          url: 'notes/nld.pdf',
        },
        {
          title: 'Quantum',
          subtitle: 'Field Theory',
          path: '/qft.jpg',
          url: '../academics/qft',
        },
      ],
    },
    {
      images: [
        {
          title: 'Condensed Matter',
          subtitle: 'Physics',
          path: '/condensed_matter.jpg',
          url: '../academics/Condensed_Matter'
        },
        {
          title: 'General Relativity',
          subtitle: 'and Cosmology',
          path: '/blackhole.jpg',
          url: 'notes/gr.pdf',
        },
        {
          title: 'Natural Language',
          subtitle: 'Processing',
          path: '/nlp.png',
          url: '/',
        },
        {
          title: 'Gravitational',
          subtitle: 'Waves',
          path: '/GW_wave.png',
          url: '../academics/gravitational_waves',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, imageIndex) => (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={imageIndex}>
                <Link href={image.url} passHref>
                  <div className='flex items-center justify-center relative overflow-hidden group'>
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt='course image' />
                    {/* overlay gradient */}
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-30 xl:opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    {/* title */}
                    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-15 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex flex-col translate-y-[-70px] xl:flex-row xl:translate-y-0 items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                        {/* title part 1 */}
                        <div className='delay-100'>{image.title}</div>
                        {/* title part 2 */}
                        <div className='tanslate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.subtitle}</div>
                        {/* icon */}
                        <div className='text-xl translate-y-[500%] group-hover:translate-y-1 transition-all duration-300 delay-200'>
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
