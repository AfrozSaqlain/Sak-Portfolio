import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../../../client'
import { useRouter } from 'next/router'

function urlFor (source) {
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
        />
      )
    },
  }
}

const Post = ({post}) => {
    const router = useRouter(); // Initialize the useRouter hook
    const { isFallback } = router; // Check if the data is still loading
    const {
      title = 'Missing title',
      name = 'Missing name',
      categories,
      authorImage,
      body = []
    } = post;
  
    if (isFallback) {
      return <p>Loading...</p>; // Display a loading state
    }
  
    if (!post) {
      return <p>Post not found</p>; // Display a not-found state
    }
  return (
    <article className="max-w-prose mx-auto p-4 mt-24 shadow-2xl">
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
      <PortableText value={body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    try {
      const post = await client.fetch(query, { slug });
      return {
        props: {
          post
        }
      };
    } catch (error) {
      return {
        notFound: true // Return a 404 status if the post is not found
      };
    }
  }
export default Post