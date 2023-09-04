// import React, { useState } from 'react';
// import Link from 'next/link';
// import imageUrlBuilder from '@sanity/image-url';
// import Image from 'next/image';
// import Tilt from 'react-parallax-tilt';

// const Card = ({ post, client }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const urlFor = source => imageUrlBuilder(client).image(source); // Define urlFor here

//   return (
//     <Tilt>
//       <Link href={`/blogs/post/${encodeURIComponent(post.slug.current)}`} legacyBehavior>
//         <a
//           className={`block border border-slate-950 bg-black/30 p-2 z-50 rounded-lg hover:shadow-lg transition duration-300 ${isHovered ? 'hover:scale-105' : ''
//             }`}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="relative overflow-hidden h-40 md:h-56 lg:h-64 mb-2">
//             <Image
//               src={urlFor(post.mainImage.asset).url()}
//               width={500}
//               height={500}
//               alt={post.title}
//               className="w-full rounded-lg h-full object-cover"
//             />
//           </div>
//           <span className="font-serif text-lg">{post.title}</span>
//           <p className="text-sm text-gray-500 mb-2">{new Date(post.publishedAt).toDateString()}</p>
//         </a>
//       </Link>
//     </Tilt>
//   );
// };

// export default Card;

// import React, { useState } from 'react';
// import Link from 'next/link';
// import imageUrlBuilder from '@sanity/image-url';
// import Image from 'next/image';
// import Tilt from 'react-parallax-tilt';

// const Card = ({ post, client }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const urlFor = source => imageUrlBuilder(client).image(source);

//   return (
//     <Tilt>
//       <Link href={`/blogs/post/${encodeURIComponent(post.slug.current)}`} legacyBehavior>
//         <a
//           className={`flex border w-96 border-slate-950 bg-black/30 p-2 z-50 hover:shadow-lg transition duration-300 ${isHovered ? 'hover:scale-105' : ''
//             }`}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="relative overflow-hidden h-40 md:h-56 lg:h-64 w-full">
//             <Image
//               src={urlFor(post.mainImage.asset).url()}
//               width={500}
//               height={500}
//               alt={post.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col p-4 w-2/3">
//             <h2 className="font-serif text-lg mb-2">{post.title}</h2>
//             <p className="text-gray-500 text-sm mb-4 text-clip">{post.description}</p>
//             <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toDateString()}</p>
//           </div>
//         </a>
//       </Link>
//     </Tilt>
//   );
// };

// export default Card;


import React, { useState } from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

const Card = ({ post, client }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const urlFor = source => imageUrlBuilder(client).image(source);

  return (
    <Tilt>
      <Link href={`/blogs/post/${encodeURIComponent(post.slug.current)}`} legacyBehavior>
        <a
          className={`flex border border-slate-950 bg-black/40 rounded-md p-2 z-50 hover:shadow-lg transition duration-300 ${isHovered ? 'hover:scale-105' : ''
            }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-40 md:h-56 lg:h-64 w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/2">
            <Image
              src={urlFor(post.mainImage.asset).url()}
              width={500}
              height={500}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col p-4 w-1/2 md:w-2/3 lg:w-3/4 xl:w-1/2">
            <h2 className="font-serif text-lg mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4 truncate-5-lines">{post.description}</p>
            <p className="text-gray-500 text-sm">{new Date(post.publishedAt).toDateString()}</p>
          </div>
        </a>
      </Link>
    </Tilt>
  );
};

export default Card;