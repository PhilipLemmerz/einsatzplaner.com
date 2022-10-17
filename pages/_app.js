import '../styles/globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Fragment } from 'react';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
       <Head>
        <title>Einsatzplaner.com</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1" />      
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main>
      <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  )
}

export default MyApp
