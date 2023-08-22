import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
// import client from '../../../client'
import { createClient } from "next-sanity";
// import Image from 'next/image'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          className='rounded-lg justify-center mx-auto items-center shadow-lg'
        />
      )
    },
  }
}

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
    body = []
  } = post
  return (
    <div className="relative h-full">
      <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
        <article className="max-w-prose mx-auto p-4 mt-24 shadow-2xl pb-28 pt-4">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <span className="text-gray-500">By {name}</span>
          {categories && (
            <ul className="mt-2 mb-4">
              Posted in
              {categories.map((category) => (
                <li key={category} className="inline-block mr-2 text-blue-500">
                  {category}
                </li>
              ))}
            </ul>
          )}
          {authorImage && (
            <div className="mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={urlFor(authorImage).width(50).url()}
                alt={`${name}'s picture`}
              />
            </div>
          )}
          <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
          <PortableText value={body} components={ptComponents} />
          </div>
        </article>
      </SimpleBar>
    </div>
  );
};

const client = createClient({
  projectId: 'wvm2brko',
  dataset: 'production',// or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

export async function getServerSideProps(context) {
  const { slug = "" } = context.query; // Note the change from `params` to `query`

  const post = await client.fetch(query, { slug });

  return {
    props: {
      post
    }
  };
}

export default Post