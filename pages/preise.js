import styles from "../styles/pricePage.module.css";
import { Fragment } from "react";
import { useState } from "react";
import Link from 'next/link';
import Head from "next/head";

function PricePage() {
    const [isYear, setSwitch] = useState(true);

    let packageSPrice = 99
    let packageMPrice = 149
    let packageLPrice = 349

    function onSwitchHandler() {
        if (isYear) {
            // we switch to Moth
            packageSPrice = 119;
            packageMPrice = 189;
            packageLPrice = 399;
            setSwitch(false);
        } else {
            // switch to year
            packageSPrice = 99
            packageMPrice = 149
            packageLPrice = 349
            setSwitch(true);
        }

    }


    return (
        <Fragment>
            <Head>
                <title> Preise - Einsatzplaner Software </title>
                <meta name="description" content="Einsatzplaner Software - Testen Sie unsere Terminplaner Software kostenfrei bevor Sie sich für eines unserer Pakete entscheiden" />
            </Head>
            <section className={styles.headlineSection}>
                <h1 className={styles.headline}> Testen Sie einsatzplaner.com komplett kostenfrei</h1>
                <p className={styles.headlineText}>
                    Wir bieten ihnen die Möglichkeit unseren Einsatzplaner kostenfrei zu testen bevor Sie sich für ein Paket entscheiden.
                </p>
                <div className={styles.freetierBox}>
                    <div className={styles.freetierStep}>
                        <p className={styles.numberIcon}> 1 </p>
                        <p className={styles.stepParagraph}> Test-Account anfordern </p>
                    </div>
                    <div className={styles.freetierStep}>
                        <p className={styles.numberIcon}> 2 </p>
                        <p className={styles.stepParagraph}>kostenfreie & unverbindliche online Einführung erhalten</p>
                    </div>
                    <div className={styles.freetierStep}>
                        <p className={styles.numberIcon}> 3 </p>
                        <p className={styles.stepParagraph}>Einsatzplaner mit allen Funktionen ausgibig testen</p>
                    </div>
                </div>
                <Link href="/testaccount-erstellen"><button className={styles.buttonTestAccount}> Testaccount anfordern </button></Link>
                <p className={styles.hintPayment}> *Keine Eingabe von Zahlungsdaten notwendig</p>
            </section>


            <section className={styles.pricingSection}>
                <h2 className={styles.headline}> Sie möchten Ihre Planung mit einsatzplaner.com optimieren?</h2>
                <p className={styles.headlineText}>
                    Wir bieten Ihnen den Einsatzplaner in 3 unterschiedlichen Paketen an
                </p>
                <div className={styles.switchBackground} onClick={onSwitchHandler}>
                    <p className={isYear === true ? styles.switchNormal : styles.switchHover}> monatlich zahlen</p>
                    <p className={isYear === true ? styles.switchHover : styles.switchNormal}> jährlich zahlen</p>
                </div>

                <div className={styles.pricingBox}>
                    <div className={styles.pricePackageS}>
                        <h3 className={styles.packageName}>Starter Paket</h3>
                        {isYear && <div className={styles.priceBox}> €  <span className={styles.price}>99</span> / pro Monat </div>}
                        {!isYear && <div className={styles.priceBox}> €  <span className={styles.price}>119</span> / pro Monat </div>}
                        <ul className={styles.list}>
                            <li><span className={styles.bulletPoint}>-</span> Freier Zugriff auf alle Funktionalitäten</li>
                            <li><span className={styles.bulletPoint}>-</span> unbegrenzter Cloudspeicher für Bilder & Dokumente</li>
                            <li><span className={styles.bulletPoint}>-</span> Telefonsupport </li>
                            <li><span className={styles.bulletPoint}>-</span> Verplanen Sie bis zu 5 Teams oder Monteure</li>
                        </ul>
                        <button className={styles.packageBTN}> kostenlos starten </button>
                    </div>
                    <div className={styles.pricePackageM}>
                        <div className={styles.highlighterPackage}> Besonders beliebt </div>
                        <h3 className={styles.packageName}>Standart Paket </h3>
                        {isYear && <div className={styles.priceBox}> €  <span className={styles.price}>149</span> / pro Monat </div>}
                        {!isYear && <div className={styles.priceBox}> €  <span className={styles.price}>189</span> / pro Monat </div>}
                        <ul className={styles.list}>
                            <li><span className={styles.bulletPoint}>-</span> Freier Zugriff auf alle Funktionalitäten</li>
                            <li><span className={styles.bulletPoint}>-</span> unbegrenzter Cloudspeicher für Bilder & Dokumente</li>
                            <li><span className={styles.bulletPoint}>-</span> Telefonsupport </li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span> Verplanen Sie bis zu 15 Teams / Monteure</li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span> individuelles Firmenlogo im Planer </li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span> 1 x Fragen Zoom-Call / Woche</li>
                        </ul>
                        <button className={styles.packageBTN}> kostenlos starten </button>
                    </div>
                    <div className={styles.pricePackageL}>
                        <h3 className={styles.packageName}>Enterprise Paket </h3>
                        {isYear && <div className={styles.priceBox}> €  <span className={styles.price}>349</span> / pro Monat </div>}
                        {!isYear && <div className={styles.priceBox}> €  <span className={styles.price}>399</span> / pro Monat </div>}
                        <ul className={styles.list}>
                            <li><span className={styles.bulletPoint}>-</span> Freier Zugriff auf alle Funktionalitäten</li>
                            <li><span className={styles.bulletPoint}>-</span> unbegrenzter Cloudspeicher für Bilder & Dokumente</li>
                            <li><span className={styles.bulletPoint}>-</span> Telefonsupport </li>
                            <li><span className={styles.bulletPoint}>-</span> individuelles Firmenlogo im Planer </li>
                            <li><span className={styles.bulletPoint}>-</span> 1 x Fragen Zoom-Call / Woche</li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span>Verplanen Sie bis zu 30 Teams / Monteure</li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span>kostenfreier WhatsApp Support</li>
                            <li className={styles.additionalLI}><span className={styles.plusIttem}> + </span>kostenfreier Zugriff auf alle neuen Features</li>
                        </ul>
                        <button className={styles.packageBTN}> kostenlos starten </button>
                    </div>
                </div>
                <p className={styles.hint}> alle Preise zzgl. MwSt.</p>
            </section>
        </Fragment>

    )
}

export default PricePage