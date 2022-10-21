/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/index.module.css';
import Link from 'next/link';
import { BsCheckSquareFill } from 'react-icons/bs';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title> Einsatzplanung Software für Monteure und Personal</title>
        <meta name="description" content="Einsatzplaner Software - Personal und Monteure verplanen so einfach wie noch nie. Jetzt kostenfrei testen und Auslastung deutlich optimieren." />
        
      </Head>
      <section className={styles.aboveTheFold}>
        <div className={styles.headlineSection}>
          <h1 className={styles.headline}> Die einfachste Einsatzplanung für Monteure & Personal</h1>
          <p className={styles.headlineText}>
            Personal und Monteure so einfach planen wie nie zuvor - sparen Sie Ressourcen und Geld durch eine optimale Einsatzplanung mit unserer Software.
          </p>
          <Link href="/testaccount-erstellen"><button className={styles.headlineBTN}> kostenfrei testen</button></Link>
        </div>
        <img className={styles.imageAboveTheFold} src="/headerIndex-einsatzplaner.png" alt="einsatzplaner-termine" />
      </section>
      <section className={styles.functionsSection}>
        <div className={styles.functionsSectionContent}>
          <h2 className={styles.textCenter}> Auslastung & Effizienz steigern mit unserem Einsatzplaner</h2>
          <p className={styles.textCenter}> mit diesen Funktionen unserer Software möchten wir Ihre Einsatzplanung vereinfachen und Ihre Effizienz & Auslasung verbsessern.</p>
          <div className={styles.functionBoxes}>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Geografischer Terminfinder</h3>
                <img src="/terminfinder-funktion-index.jpg" className={styles.functionImage} alt="terminfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> optimierte Routenplanung Ihres Personal und Ihrer Monteure durch den intelligenten Terminfinder unserer Einsatzplaner Software.</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Automatische Adressenüberprüfung</h3>
                <img src="/adressenfinder-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> 100% richtige Kundenadressen durch den integrierten Adressenabgleich bei Termineingabe.</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> Google-Maps Integration</h3>
                <img src="/google-maps-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> Kundenadresse jederzeit im Blick durch google-maps Integration im Einsatzplaner.</p>
              </div>
            </Link>
            <Link href="/">
              <div className={styles.functionBox}>
                <h3 className={styles.functionBoxHeadline}> verschiedenste Terminansichten</h3>
                <img src="/ansichten-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
                <p className={styles.functionBoxText}> einfachste Bedienbarkeit der Einsatzplaner Software für jeden Kollegen durch verschiedenste Darstellungen.</p>
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
                <p className={styles.functionBoxText}> monatlicher Release neue Funktionen in der Einsatzplaner Software - App Integration und Auftragsanalyse in Entwicklung </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.targetGroupSection}>
        <h2 className={styles.textCenter}> Für wen eignet sich die Einsatzplaner Software?</h2>
        <p className={styles.targetGroupParagraph}>
          Unser Einsatzplaner kann in einer Vielzahl von Branchen effizient eingesetzt werden. Es wäre der falsche Ansatz hier eine Auflistung von Branchen oder
          Firmen zu nennen, welche vom Einsatz unserer Einsatzplaner-Software profitieren. Vielmehr möchten wir Ihnen ein paar Rahmenbedingungen nennen in dem unser Einsatzplaner
          sein volles Potential ausspielen kann. Wenn Ihnen einer dieser Punkte bekannt vorkommt, kann Ihnen die Software mit Sicherheit helfen, die Personal Planung Ihrer Monteure
          oder Teams zu verbessern.
        </p>
        <div className={styles.conditionsBox}>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie planen Termine außerhalb Ihres Betriebs</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie legen großen Wert auf eine einfache Bedienbarkeit einer Software</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie benötigen eine optimierte Routenplanung für Ihr Personal oder Ihre Monteure</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie müssen Ihre Aufträge gut dokumentieren</p>
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.callToActionContent}>
            <h3 className={styles.callToActionHeadline}> Sie sind sich noch unsicher, ob unsere Einsatzplaner Software das Richtige für Sie ist?</h3>
            <p className={styles.textCenter}> Testen Sie kostenfrei und unverbindlich, ob Ihnen der Einsatzplaner hilft Ihre Einsatzplanung zu optimieren</p>
            <Link href="/testaccount-erstellen"><button className={styles.headlineBTN}> kostenfrei testen </button></Link>
          </div>
        </div>
      </section>
      <section className={styles.useCaseSection}>
        <div className={styles.useCaseContent}>
          <h2 className={styles.headlineUseCase}> Use Case: <em>Das Soziale Kaufhaus</em> </h2>
          <p className={styles.paragraphUseCase}>
            Das Soziale Kaufhaus in Swisttal und Bonn arbeiten seit einem halben Jahr mit der Software von einsatzplaner.com. Das Unternehmen führt Möbelabholungen und Möbellieferungen in
            Köln und Bonn sowie Haushaltsauflösungen und Umzüge durch. Bevor wir den Einsatzplaner im Unternehmen integriert haben, wurde die Terminplanung mit Outlook
            umgesetzt. Neben technischen Problemen mit der Terminsynchronisierung bei der Einsatzplanung auf mehren Computern konnte keine optimale Routenplanung erzielt werden. Die Fahrer
            fuhren in der Woche teilweise mehrfach in die selben Stadteile. Dies kosten Zeit, Geld, Ressourcen und war auch mit Blick auf unsere Umwelt nicht optimal. Viele
            langjährige Mitarbeiter benötiten jedoch eine ganz einfache Bedienung der Einsatzplaner Software. Aus diesem Grund mussten diverse Softwarelösungen wieder verworfen werfen,
            da die Terminierung von Aufträgen zu kompliziert war oder Termine aufwändig in einen Routen-Optimierungsprogramm importiert werden mussten.
            <br></br> <br></br>
            <span className={styles.useCaseHighlighter}> Die Lösung: Software von Einsatzplaner.com </span>
            <br></br>
            Durch den Einsatz der Software von einsatzplaner.com konnte Die Auslastung um 3 Aufträge pro Tag erhöht werden bei
            8 verplanten Teams. Das entspricht 63 Aufträgen im Monat. Dies war möglich durch unsere intelligente Terminsuche, die freie Termine in direkter Nähe zu bereits
            geplanten Terminen findet. Zudem wurde die ganze Planung deutlich transparenter, denn alle Kollegen haben zu jederzeit von überall aus Zugriff auf die Planung und die
            Termine werden in Echtzeit auf jedem Computer synchronisiert.
          </p>
          <div className={styles.quoteBox}>
            <p>
              <q>
                <em>
                  In einer Zeit von Personalmangel und Lieferzeiten von 4-6 Wochen müssen Ressourcen optimal eingesetzt werden.
                  Es ist viel einfacher vorhandene Ressourcen und Mitarbeiter effizienter einzusetzen als neue zu finden - und hierfür
                  ist die Software von einsatzplaner.com das optimale Tool - einfach zu bedienen und mit auf das wesentliche reduzierten Features.
                </em>
              </q>
              <br></br> <br></br>
              Paulina Michalewicz<br></br>
              Personal & Monteur Planung - Das Soziale Kaufhaus Swisttal
            </p>
          </div>
        </div>
        <div className={styles.useCaseImages}>
          <img className={styles.imageUseCase} src="useCaseDasSozialeKaufhausFirst.jpg" alt="Das Soziale Kaufhaus & einsatzplaner.com" />
          <img className={styles.imageUseCase} src="useCaseDasSozialeKaufhausSecond.jpg" alt="Das Soziale Kaufhaus & einsatzplaner.com" />
        </div>
      </section>
    </Fragment>

  )
}
