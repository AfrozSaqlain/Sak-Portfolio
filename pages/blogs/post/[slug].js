import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { createClient } from "next-sanity";
import Image from 'next/image'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import AdSense from 'react-adsense';
// import { useState, useEffect } from 'react';

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
  body,
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

const Post = ({ post }) => {

  // const [likes, setLikes] = useState(post.likes );

  // async function likePost() {
  //   const res = await fetch('/api/likePost', {
  //     method: 'POST',
  //     body: JSON.stringify({ _id: post._id }),
  //   });

  //   if (res.ok) {
  //     // If the request was successful, update the likes count in the local state
  //     setLikes(likes + 1);
  //   }
  // }
  
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
    <div className="relative h-full bg-black/50 -translate-y-4">
      <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-7'>
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
          <article className="mx-auto p-4 mb-10 max-w-screen-xl mt-5 bg-black/30 rounded-xl">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <div className='flex flex-row'>
              {authorImage && (
                <div className="mb-4 flex">
                  <Image
                    className="w-16 h-16 rounded-full mt-5"
                    src={urlFor(authorImage).width(160).url()}
                    width={90}
                    height={90}
                    alt={`${name}'s picture`}
                  />
                </div>
              )}
              <span className="text-gray-300 translate-x-10 translate-y-6">By {name}</span>
              {categories && (
                <ul className="mt-2 mb-4">
                  <div className="mt-2 mb-4 flex items-center translate-y-9 -translate-x-[74px]">
                    <span className="mr-2">Posted in</span>
                    {categories.map((category) => (
                      <li key={category} className="inline-block mr-2 text-blue-500">
                        {category}
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </div>
            {/* <button onClick={likePost}>Like {likes}</button> */}
            {mainImage && (
              <div className="mb-4">
                <Image
                  className="w-full h-auto max-w-xl mt-5 rounded-sm" // Adjust max width as needed
                  src={urlFor(mainImage).width(800).height(600).url()} // Adjust width and height as needed
                  width={800} // Set the desired width
                  height={600} // Set the desired height
                  alt={`${name}'s picture`}
                  priority={true}
                />
              </div>
            )}
            <AdSense.Google
                client="ca-pub-3772097457340486"
                slot="9763960986"
                style={{ display: 'block' }}
                format="auto"
                responsive="true"
              />
              <hr className='w-full border'/>
            <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
              <PortableText value={body} components={ptComponents} />
            </div>
          </article>
        </SimpleBar>
      </div>
    </div>
  );
};

export default Post;
