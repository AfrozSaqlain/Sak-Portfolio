// import Link from 'next/link';
// import groq from 'groq';
// import { createClient } from 'next-sanity';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import imageUrlBuilder from '@sanity/image-url'

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source)
// }

// const Index = ({ posts }) => {
//   return (
//     <div className="relative h-full">
//       <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
//         <div className="relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 pb-24 lg:mt-40">
//           <h1 className="h2 mb-6 text-center">Welcome to Fashion blog!</h1>
//           <ul className="grid gap-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {posts.length > 0 ? (
//               posts.map(({ _id, title = '', slug = '', publishedAt = '', mainImage}) =>
//                 slug && (
//                   <Link key={_id} href={`/blogs/post/${encodeURIComponent(slug.current)}`} legacyBehavior>
//                     <a className="block border border-gray-300/20 p-2 z-50 rounded-lg hover:shadow-md transition duration-300">
//                       <div className="relative overflow-hidden h-40 md:h-56 lg:h-64 mb-2">
//                         {/* Access the 'url' property of 'mainImage.asset' */}
//                         <img src={urlFor(mainImage).url()} alt={title} className="w-full rounded-lg h-full object-cover" />
//                       </div>
//                       <span className="font-serif text-lg">{title}</span>
//                       <p className="text-sm text-gray-500 mb-2">{new Date(publishedAt).toDateString()}</p>
//                     </a>
//                   </Link>
//                 )
//               )
//             ) : (
//               <p>No posts to show</p>
//             )}
//           </ul>
//         </div>
//       </SimpleBar>
//     </div>
//   );
// };

// const client = createClient({
//   projectId: 'wvm2brko',
//   dataset: 'production', // or the name you chose in step 1
//   useCdn: true, // `false` if you want to ensure fresh data
//   apiVersion: '2021-08-31',
// });

// export async function getServerSideProps() {
//   const posts = await client.fetch(
//     groq`
//     *[_type == "post" && publishedAt < now() && count(categories[]->slug.current) > 0 && 'fashion' in categories[]->slug.current] | order(publishedAt desc)
//     `,
//   );

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Index;


import groq from 'groq';
import { createClient } from 'next-sanity';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Card from '../../../components/Card'; // Update this path
// import imageUrlBuilder from '@sanity/image-url';

// function urlFor(source) {
//   return imageUrlBuilder(client).image(source);
// }

const client = createClient({
  projectId: 'wvm2brko',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});

const Index = ({ posts }) => {
  return (
    <div className="relative h-full">
      <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-4">
      <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
        <div className="relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 pb-24 lg:mt-40">
          <h1 className="h2 mb-6 text-center">Welcome to Fashion blog!</h1>
          <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map(({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
                slug && <Card key={_id} post={{ title, slug, publishedAt, mainImage }} client={client} />
              )
            ) : (
              <p>No posts to show</p>
            )}
          </ul>
        </div>
      </SimpleBar>
      </div>
    </div>
  );
};


export async function getServerSideProps() {
  const posts = await client.fetch(
    groq`
    *[_type == "post" && publishedAt < now() && count(categories[]->slug.current) > 0 && 'fashion' in categories[]->slug.current] | order(publishedAt desc)
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default Index;
