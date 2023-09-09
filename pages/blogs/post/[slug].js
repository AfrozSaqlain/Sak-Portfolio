// import groq from 'groq'
// import imageUrlBuilder from '@sanity/image-url'
// import { PortableText } from '@portabletext/react'
// // import client from '../../../client'
// import { createClient } from "next-sanity";
// import Image from 'next/image'
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source)
// }

// const ptComponents = {
//   types: {
//     image: ({ value }) => {
//       if (!value?.asset?._ref) {
//         return null;
//       }

//       // Generate the URL directly here
//       const imageUrl = urlFor(value).fit('max').auto('format').url();

//       return (
//         <Image
//           alt={value.alt || ' '}
//           loading="lazy"
//           width={320}
//           height={240}
//           src={imageUrl} // Pass the generated URL here
//           className='rounded-lg justify-center mx-auto items-center shadow-lg'
//         />
//       );
//     },
//   }
// };


// const Post = ({ post }) => {

//   if (!post) {
//     // Handle the case when post data is not available
//     return <div>Loading...</div>; // You can render a loading state here
//   }

//   const {
//     title = 'Missing title',
//     name = 'Missing name',
//     categories,
//     authorImage,
//     body = []
//   } = post
//   return (
//     <div className="relative h-full bg-black/40 -translate-y-4">
//       <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-4'>
//         <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
//           <article className="max-w-prose mx-auto w-auto p-4 mt-4 shadow-2xl rounded-lg mb-10 pt-4">
//             <h1 className="text-3xl font-bold mb-2">{title}</h1>
//             <span className="text-gray-500">By {name}</span>
//             {categories && (
//               <ul className="mt-2 mb-4">
//                 <div className="mt-2 mb-4 flex items-center">
//                   <span className="mr-2">Posted in</span>
//                   {categories.map((category) => (
//                     <li key={category} className="inline-block mr-2 text-blue-500">
//                       {category}
//                     </li>
//                   ))}
//                   </div>
//               </ul>
//             )}
//             {authorImage && (
//               <div className="mb-4">
//                 <Image
//                   className="w-12 h-12 rounded-full"
//                   src={urlFor(authorImage).width(50).url()}
//                   width={50}
//                   height={50}
//                   alt={`${name}'s picture`}
//                 />
//               </div>
//             )}
//             <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
//               <PortableText value={body} components={ptComponents} />
//             </div>
//           </article>
//         </SimpleBar>
//       </div>
//     </div>
//   );
// };

// const client = createClient({
//   projectId: 'wvm2brko',
//   dataset: 'production',// or the name you chose in step 1
//   useCdn: true, // `false` if you want to ensure fresh data
//   apiVersion: '2021-08-31',
// })


// const query = groq`*[_type == "post" && slug.current == $slug][0]{
//   title,
//   "name": author->name,
//   "categories": categories[]->title,
//   "authorImage": author->image,
//   body
// }`

// export async function getServerSideProps(context) {
//   const { slug = "" } = context.query; // Note the change from `params` to `query`

//   const post = await client.fetch(query, { slug });

//   return {
//     props: {
//       post
//     }
//   };
// }

// export default Post



import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { createClient } from "next-sanity";
import Image from 'next/image'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import AdSense from 'react-adsense';

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      // Generate the URL directly here
      const imageUrl = urlFor(value).fit('max').auto('format').url();

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          width={320}
          height={240}
          src={imageUrl} // Pass the generated URL here
          className='rounded-lg justify-center mx-auto items-center shadow-lg'
        />
      );
    },
  }
};

const Post = ({ post }) => {

  if (!post) {
    // Handle the case when post data is not available
    return <div>Loading...</div>; // You can render a loading state here
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    body = []
  } = post;

  return (
    <div className="relative h-full bg-black/40 -translate-y-4">
      <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-7'>
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
          <article className="mx-auto p-4 mb-10 max-w-screen-xl bg-black/20 rounded-lg">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            {authorImage && (
              <div className="mb-4">
                <Image
                  className="w-16 h-16 rounded-full mt-5"
                  src={urlFor(authorImage).width(50).url()}
                  width={60}
                  height={60}
                  alt={`${name}'s picture`}
                />
              </div>
            )}
            <span className="text-gray-500">By {name}</span>
            {categories && (
              <ul className="mt-2 mb-4">
                <div className="mt-2 mb-4 flex items-center">
                  <span className="mr-2">Posted in</span>
                  {categories.map((category) => (
                    <li key={category} className="inline-block mr-2 text-blue-500">
                      {category}
                    </li>
                  ))}
                </div>
              </ul>
            )}
            {mainImage && (
              <div className="mb-4">
                <Image
                  className="w-full h-auto max-w-xl mt-5" // Adjust max width as needed
                  src={urlFor(mainImage).width(800).height(600).url()} // Adjust width and height as needed
                  width={800} // Set the desired width
                  height={600} // Set the desired height
                  alt={`${name}'s picture`}
                />
              </div>
            )}
            <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
              <PortableText value={body} components={ptComponents} />
              {/* <AdSense.Google
                client="ca-pub-3772097457340486"
                slot="9763960986"
                style={{ display: 'block' }}
                format="auto"
                responsive="true"
              /> */}
            </div>
          </article>
        </SimpleBar>
      </div>
    </div>
  );
};

const client = createClient({
  projectId: 'wvm2brko',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
})

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  body
}`

export async function getServerSideProps(context) {
  const { slug = "" } = context.query;

  const post = await client.fetch(query, { slug });

  return {
    props: {
      post
    }
  };
}

export default Post;
