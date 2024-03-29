// Next.js Link component
import Link from 'next/link';

// Next.js Image component
import Image from 'next/image';

// React icon
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='w-[135px] h-[135px] z-20 mx-auto xl:mx-0 -translate-y-11'>
      <Link href='/projects'>
        <div className='relative w-full h-full flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
          <Image
            src={'/rounded-text.png'}
            width={101}
            height={108}
            alt='Project Button'
            className='animate-spin-slow max-w-[101px] max-h-[108px]'
          />
          <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
