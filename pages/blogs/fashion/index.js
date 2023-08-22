import Link from 'next/link'
import groq from 'groq'
// import client from '../../client'
import { createClient } from "next-sanity";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Index = ({ posts }) => {
  return (
    <div className="relative h-full">
      <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
        <div className='relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 pb-24 lg:mt-40'>
          <h1 className='text-3xl mb-6'>Welcome to a blog!</h1>
          <ul>
            {posts.length > 0 && posts.map(
              ({ _id, title = '', slug = '', publishedAt = '' }) =>
                slug && (
                  <Link key={_id} href={`/blogs/fashion/post/${encodeURIComponent(slug.current)}`} legacyBehavior>
                    <a className='block border border-gray-300/20 p-4 mb-4 z-50 rounded-lg'>
                      <span className='font-serif text-lg'>
                        {title}
                      </span>
                      <br />
                      ({new Date(publishedAt).toDateString()})
                    </a>
                  </Link>
                )
            )}
            {!posts.length > 0 && <p>No pots to show</p>}
          </ul>
        </div>
      </SimpleBar>
    </div>
  )
}

const client = createClient({
  projectId: 'wvm2brko',
  dataset: 'production',// or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})


export async function getServerSideProps() {
  const posts = await client.fetch(groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc)`);

  return {
    props: {
      posts
    }
  };
}

export default Index
