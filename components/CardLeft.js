import React from 'react';
import Link from 'next/link';

const CardLeft = ({ link, place }) => {
  return (
    <div className='rounded-md bg-slate-100/20 pl-2 pr-2 inline-block'>
      {/* Add your card content here */}
      <Link href={link} legacyBehavior>
        <a>Go to {place}</a>
      </Link>
    </div>
  );
};

export default CardLeft;