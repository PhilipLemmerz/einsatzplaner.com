/* eslint-disable react-hooks/exhaustive-deps */
import '../styles/globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { Fragment } from 'react';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Slider from '../components/layout/slider';
import CookieConsent from '../components/layout/cookieConsent';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  const consent = getCookie('localConsent');
  const consentMarketing = getCookie('marketingConsent');
  const consentAnalytics = getCookie('analyticsConsent');


  return (
    <Fragment>
      <Head>
        <title> Einsatzplanung Software für Ihre Monteure & Personal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
          });

          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MC3M62V');`,

        }}
      />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted',
              'functionality_storage': 'granted',
            });
          `
          }}
        />
      )}
      {consentMarketing &&
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          gtag('consent', 'update', {
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
          });
        `
          }}
        />
      }
      {consentAnalytics &&
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted',
            'functionality_storage': 'denied',
          });
        `
          }}
        />
      }
      <Header />
      <CookieConsent />
      <main>
        <Slider />
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment >
  )
}

export default MyApp
