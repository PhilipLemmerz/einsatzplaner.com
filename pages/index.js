/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/index.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="effiziente und einfache Terminplanung von Außenterminen für z.B. Handwerkern, Transportunternehmen viele weitere Branchen" />
      </Head>
      <section className={styles.aboveTheFold}>
        <div className={styles.headlineSection}>
          <h1 className={styles.headline}> Die einfachste Terminplanung für Ihre Teams & Monteure</h1>
          <p className={styles.headlineText}>
            Planen Sie Ihre Monteure oder Teams im Außeneinsatz so einfach wie nie zuvor und sparen Sie Ressourcen und Geld durch eine optimale Einsatzplanung.
          </p>
          <button className={styles.headlineBTN}> kostenfrei testen</button>
        </div>
        <img className={styles.imageAboveTheFold} src="/headerIndex-einsatzplaner.png" alt="einsatzplaner-termine" />
      </section>
      <section className={styles.functionsSection}>
        <div className={styles.functionsSectionContent}>
          <h2> Steigern Sie Ihre Auslastung und Effizienz</h2>
          <p> mit diesen Funktionen möchten wir Ihre Terminplanung vereinfachen und Ihre Effizienz un Auslasung verbsessern.</p>
          <div className={styles.functionBoxes}>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Geografischer Terminfinder</h3>
                <img src="/terminfinder-funktion-index.jpg" className={styles.functionImage} alt="terminfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> optimierte Routenplanung durch unseren intelligenten Terminfinder</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Automatischer Adressenüberprüfung</h3>
                <img src="/adressenfinder-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> 100% richtige Kundenadressen durch integrierten Adressenabgleich bei Termineingabe </p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Google-Maps Integration</h3>
                <img src="/google-maps-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> Kundenadresse jederzeit im Blick durch google-maps Integration</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> verschiedenste Terminansichten</h3>
                <img src="/ansichten-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> einfachste Bedienbarkeit für jeden Kollegen durch verschiedenste Darstellungen</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Auftragsbezogener Bilderupload </h3>
                <img src="/bild-upload-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> optimale Auftragsdokumentation durch integrierten Bildupload</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}>Zahlreiche Funktion in Entwicklung</h3>
                <img src="/funktionen-entwicklung-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> monatlicher Release neuer Funktionen - App Integration und Auftragsanalyse in Entwicklung </p>
              </div>
            </Link>
          </div>


        </div>



      </section>

    </Fragment>

  )
}
