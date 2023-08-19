import '../styles/globals.css';
import Head from 'next/head';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

//vercel analytics
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Saqlain Afroz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes." />
        <meta name="keywords" content="financial investment, fashion, web development, academic courses, tips, diy, ai/ml, trends, insights, notes, astrophysics, astronomy, maths, mathematics, quantum physics, blogging, blog"></meta>
        <meta name="author" content="Saqlain Afroz"></meta>

        <meta name="robots" content="index, follow"></meta>
        <meta name="googlebot" content="index, follow"></meta>

        <meta name="p:domain_verify" content="45d9f00dc549509d8c1964322f2fad87" />

        {/* Open Graph Meta Tags (for sharing on social media) */}
        <meta property="og:title" content="Saqlain Afroz Portfolio Webapp" />
        <meta property="og:description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes in our Next.js app. Elevate your knowledge across multiple domains with our curated content." />
        <meta property="og:image" content="https://sak-portfolio.vercel.app/my-homepage.png" />
        <meta property="og:image:secure_url" content="https://sak-portfolio.vercel.app/my-homepage.png" />
        <meta property="og:url" content="https://sak-portfolio.vercel.app/" />
        <meta property="og:type" content="website"></meta>

        <link rel="icon" href="/favicon.png" type="image/x-icon"></link>
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
            <Analytics />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
