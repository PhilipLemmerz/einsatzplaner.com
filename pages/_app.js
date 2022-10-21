import '../styles/globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Fragment } from 'react';
import Head from 'next/head'
import Slider from '../components/layout/slider';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title> Einsatzplanung Software für Ihre Monteure & Personal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
        <Slider />
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default MyApp
