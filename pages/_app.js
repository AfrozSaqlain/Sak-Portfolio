import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

//framer motion
import { AnimatePresence, motion } from 'framer-motion';

//vercel analytics
import { Analytics } from '@vercel/analytics/react';

//script
import ReactGA from 'react-ga';

// Initialize Google Analytics with your tracking ID
ReactGA.initialize('G-J4XZ7LX977');

// Track page views
const trackPageView = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track initial page view
    trackPageView(router.pathname);
  
    // Track page view on route change
    const handleRouteChange = (url) => {
      trackPageView(url);
    };
  
    router.events.on('routeChangeComplete', handleRouteChange);
  
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.pathname]);

  return (
    <>
    <html lang="en">
      <Head>
        <title>Saqlain Afroz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes." />
        <meta name="keywords" content="Saqlain Afroz, Saqlain Afroz Portfolio, quantum field theory, financial investment, fashion, web development, academic courses, tips, diy, ai/ml, trends, insights, notes, astrophysics, astronomy, maths, mathematics, quantum physics, blogging, blog,, sak-portfolio, vercel, nextjs, portfolio, saqlain, saqlain afroz portfolio website"></meta>
        <meta name="author" content="Saqlain Afroz"></meta>

        {/* <meta name="google-site-verification" content="ksLGxhQi_6VvPtGoOO_68ovimlXDkgSjkliANudNTO4" /> */}
        <meta name="google-site-verification" content="PNTiabtcL3wN-1NHZb9bY3k3AG3Xh_rJ7ppyBFgQ9MA" />

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

        <meta property="fb:app_id" content="140483455774395" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sqn_3680" />
        <meta name="twitter:title" content="Saqlain Afroz" />
        <meta name="twitter:description" content="Discover a rich blend of financial investment tips, fashion inspiration, web development insights, and comprehensive academic course notes in our Next.js app. Elevate your knowledge across multiple domains with our curated content." />
        <meta name="twitter:image" content="https://sak-portfolio.vercel.app/my-homepage.png" />

        {/* Optional: Twitter Card Data */}
        <meta name="twitter:creator" content="@sqn_3680" />
        <meta name="twitter:domain" content="https://sak-portfolio.vercel.app/" />

        {/* Optional: Other Twitter Tags */}
        <meta name="twitter:label1" value="Written by" />
        <meta name="twitter:data1" value="Saqlain Afroz" />

        <meta name="google-adsense-account" content="ca-pub-3772097457340486"></meta>

        <link rel="icon" href="/favicon.ico" sizes='any'/>
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
      </html>
    </>
  );
}

export default MyApp;
