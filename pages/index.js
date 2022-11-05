/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Fragment } from 'react'
import styles from '../styles/index.module.css';
import Link from 'next/link';
import { BsCheckSquareFill } from 'react-icons/bs';
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title> Einsatzplanung Software für Monteure und Personal</title>
        <meta name="description" content="Einsatzplaner Software - Personal und Monteure verplanen so einfach wie noch nie. Jetzt kostenfrei testen und Auslastung deutlich optimieren." />
        <meta name="facebook-domain-verification" content="aaid3nujn5brzuwsps7yi9kd3m237w" />
      </Head>
      <section className={styles.aboveTheFold}>
        <div className={styles.headlineSection}>
          <h1 className={styles.headline}> Die einfache Einsatzplanung für Monteure & mobile Teams</h1>
          <p className={styles.headlineText}>
            mobiles Personal und Monteure so einfach planen wie nie zuvor - sparen Sie Zeit und Geld durch eine optimale Einsatzplanung mit unserer Software.
          </p>
          <Link href="/testaccount-erstellen"><button className={styles.headlineBTN}> kostenfrei testen</button></Link>
        </div>
        <img className={styles.imageAboveTheFold} src="/headerIndex-einsatzplaner.png" alt="einsatzplaner-termine" />
      </section>
      <section className={styles.targetGroupSection}>
        <div className={styles.targetGroupSectionContent}>
          <h2 className={styles.textCenter}>Kennen Sie diese Probleme bei Ihrer Einsatzplanung auch?</h2>
          <div className={styles.targetGroupProblems}>
            <div>
              <p> <span className={styles.attentionIcon}><IoIosArrowDroprightCircle /></span> Monteur-Planung nicht von überall aus im Blick.</p>
              <p> <span className={styles.attentionIcon}><IoIosArrowDroprightCircle /></span> Termine werden nicht miteinander kombiniert.</p>
              <p> <span className={styles.attentionIcon}><IoIosArrowDroprightCircle /></span> Monteure verlieren viel Zeit im Auto.</p>
              <p> <span className={styles.attentionIcon}><IoIosArrowDroprightCircle /></span> fehlerhafte Kundenadressen und unübersichtliche Aufträge.</p>
            </div>
            <img className={styles.imageProblemsTargetGroup} src="/probleme-ohne-digitale-einsatzplanung.jpg" alt="probleme-ohne-digitale-einsatzplanung" />
          </div>
          <span className={styles.dotSpacer}> ... </span>
          <p className={styles.targetGroupParagraph}>
            Mit Sicherheit haben Sie, genau wie wir, bereits nach einem Tool gesucht mit dem Sie diese Probleme endlich lösen können. Doch geeignete Lösungen sind häufig viel zu kompliziert für
            kleine und mittelständische Unternehmen. Genau aus diesem Grund haben wir einsatzplaner.com entwickelt. Auch in unseren Unternehmen müssen wir
            8 Teams jeden Tag effizient verplanen und haben mit einsatzplaner.com hierfür die optimale Software entwickelt. Aus der Praxis für die Praxis.
          </p>
        </div>
      </section>
      <section className={styles.sectionWhenUsing}>
        <h2 className={styles.headlineWhenUsing}> Wann eignet sich Einsatzplaner.com für Sie?</h2>
        <div className={styles.conditionsBox}>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie möchten Ihre Einsatzplanung von überall aus abrufen und bearbeiten können.</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie verplanen regelmäßig mobile Teams oder Monteure.</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie legen großen Wert auf die einfache Bedienbarkeit einer Software.</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie benötigen eine optimierte Routenplanung für Ihre Monteure & mobile Teams.</p>
          </div>
          <div className={styles.condition}>
            <span className={styles.checkIcon}> <BsCheckSquareFill /> </span>
            <p className={styles.noMargin}>Sie müssen Ihre Aufträge gut dokumentieren.</p>
          </div>
        </div>
      </section>

      <section className={styles.functionsSection}>
        <div className={styles.functionsSectionContent}>
          <h2 className={styles.functionSectionHeadline}> Auslastung & Effizienz steigern mit einsatzplaner.com</h2>
          <p className={styles.textCenter}> mit unserer Software möchten wir Ihre Einsatzplanung vereinfachen und Ihre Effizienz & Auslastung verbessern.</p>
          <div className={styles.functionBoxes}>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}> Geografischer Terminfinder</h3>
              <img src="/terminfinder-funktion-index.jpg" className={styles.functionImage} alt="terminfinder-funktion einsatzplaner" />
              <p className={styles.functionBoxText}> optimale Routenplanung Ihrer Monteure durch den intelligenten Terminfinder unserer Einsatzplaner Software. Gestützt auf künstlicher Intelligenz.</p>
            </div>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}> Automatische Adressenüberprüfung</h3>
              <img src="/adressenfinder-funktion-index.jpg" className={styles.functionImage} alt="adressenfinder-funktion einsatzplaner" />
              <p className={styles.functionBoxText}> 100% richtige Kundenadressen durch den integrierten Adressenabgleich bei Termineingabe.</p>
            </div>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}> Google-Maps Integration</h3>
              <img src="/google-maps-funktion-index.jpg" className={styles.functionImage} alt="google-maps Integration Einsatzplaner Monteure" />
              <p className={styles.functionBoxText}> Kundenadressen jederzeit im Blick durch google-maps Integration im Einsatzplaner.</p>
            </div>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}> Verschiedenste Terminansichten</h3>
              <img src="/ansichten-funktion-index.jpg" className={styles.functionImage} alt="optimale Übersichtlichkeit für Mitarbeiter" />
              <p className={styles.functionBoxText}> einfachste Bedienbarkeit der Einsatzplaner Software und maximale Übersichtlichkeit durch verschiedene Darstellungen.</p>
            </div>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}> Auftragsbezogener Bilderupload </h3>
              <img src="/bild-upload-funktion-index.jpg" className={styles.functionImage} alt="bilder-upload-einsatzplaner" />
              <p className={styles.functionBoxText}> optimale Auftragsdokumentation durch integrierten Bildupload</p>
            </div>
            <div className={styles.functionBox}>
              <h3 className={styles.functionBoxHeadline}>Ortsunabhängig planen</h3>
              <img src="/einsatzplaner-live-synchronisierung.jpg" className={styles.functionImage} alt="einsatzplaner-live-synchronisierung" />
              <p className={styles.functionBoxText}> Ob im Urlaub, im Homeoffice oder beim Kunden - die Einsatzplaner Software ist von überall aus bedienbar und aktualisiert sich in Echtzeit.</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.callToAction}>
        <div className={styles.callToActionContent}>
          <h3 className={styles.callToActionHeadline}> Sie sind sich noch unsicher, ob einsatzplaner.com das Richtige für Sie ist?</h3>
          <p className={styles.textCenter}> Vereinbaren Sie jetzt einen kostenfreien Demo-Termin und entscheiden Sie anschließend ob Ihnen der Einsatzplaner hilft Ihre Planung zu optimieren.</p>
          <Link href="/kontakt"><button className={styles.callToActionBTN}> Demo-Termin vereinbaren </button></Link>
        </div>
      </div>
      <section className={styles.testemonialSection}>
        <div className={styles.quoteBox}>
          <img className={styles.testemonialImage} src="/testemonial-dsk.jpg" alt="planungsabteilung-dsk" />
          <p>
            <q>
              <em>
                Wir haben alle Personalmangel und Lieferzeiten von 4-6 Wochen. Da müssen wir alle Mitarbeiter einfach gut auslasten.
                Der Einsatzplaner ist super einfach zu bedienen und macht die Planung übersichtlich. Wir schaffen deutlich mehr Termine als vorher.
                Einfach ein klasse Programm.
              </em>
            </q>
          </p>
          <p>
            Paulina Michalewicz<br></br>
            Personal & Monteur Planung - Das Soziale Kaufhaus Swisttal
          </p>
        </div>
      </section>
      <section className={styles.useCaseSection}>
        <div className={styles.useCaseContent}>
          <h2 className={styles.headlineUseCase}> Fallstudie: <em>Das Soziale Kaufhaus</em> </h2>
          <p className={styles.useCaseHighlighter}> Problem: </p>
          <p className={styles.paragraphUseCase}>
            Das Soziale Kaufhaus verplant mobile Teams für Möbelauslieferungen und Umzüge. Für die Terminplanung wurde Outlook verwendet. Neben technischen Problemen mit
            der Terminsynchronisierung bei der Einsatzplanung auf mehreren Computern konnte keine optimale Routenplanung erzielt werden. Die Fahrer fuhren in der Woche teilweise
            mehrfach in die selben Stadtteile. Dies kostete Zeit, Geld, Ressourcen und war auch mit Blick auf unsere Umwelt nicht optimal.
          </p>
          <p className={styles.useCaseHighlighter}> Die Lösung: Software von einsatzplaner.com: </p>
          <p className={styles.paragraphUseCase}>
            Durch den Einsatz der Software von einsatzplaner.com konnte Die Auslastung um 3 Aufträge pro Tag erhöht werden bei
            8 verplanten Teams. Das entspricht 63 Aufträgen im Monat. Dies war möglich durch die durch künstliche Intelligenz gestützte Terminsuche. Zudem wurde die ganze Planung transparenter
            und einfacher. Alle Kollegen haben zu jederzeit von überall aus Zugriff auf die Planung und die
            Termine werden in Echtzeit auf jedem Computer synchronisiert.
          </p>
        </div>
        <div className={styles.useCaseImages}>
          <img className={styles.imageUseCase} src="/usecase-das-soziale-kaufhaus-first.jpg" alt="Das Soziale Kaufhaus & einsatzplaner.com" />
          <img className={styles.imageUseCase} src="/usecase-das-soziale-kaufhaus-second.jpg" alt="Das Soziale Kaufhaus & einsatzplaner.com" />
        </div>
      </section>
      <section className={styles.stepSection}>
        <h2 className={styles.headlineStepSection}> Bringe deine Einsatzplanung jetzt auf das nächste Level</h2>
        <div className={styles.stepContent}>
          <div>
            <div className={styles.step}>
              <p className={styles.numberIcon}><span>1</span></p>
              <div>
                <p className={styles.stepHeadline}> Buche dein Erstgespräch</p>
                <p className={styles.stepParagraph}>Einfach über unsere Webseite buchen und einsatzplaner.com kostenfrei kennenlernen.</p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.numberIcon}><span>2</span></p>
              <div>
                <p className={styles.stepHeadline}> Beratungsgespräch mit unseren Planungs-Experten</p>
                <p className={styles.stepParagraph}>Wir stellen Ihnen den Einsatzplaner persönlich vor und ermitteln wie wir Ihre Planung zusammen optimieren können.</p>
              </div>
            </div>
            <div className={styles.step}>
              <p className={styles.numberIcon}><span>3</span></p>
              <div>
                <p className={styles.stepHeadline}> Begleiteter Einsatz von einsatzplaner.com in Ihrem Unternehmen</p>
                <p className={styles.stepParagraph}>Sie setzen einsatzplaner.com ein und wir unterstützen Sie weiterhin! So können Sie das Meiste für Ihr Unternehmen aus einsatzplaner.com herausholen.</p>
              </div>
            </div>
          </div>
          <div>
            <img className={styles.imageConsulting} src="/beratung-kostenfrei-software-einsatzplanung.jpg" alt="kostenfreie beratung Software-einsatzplanung" />
          </div>
        </div>
      </section>
      <section className={styles.callToActionLastSection}>
        <div className={styles.callToActionLast}>
          <div className={styles.callToActionContentLast}>
            <h3 className={styles.callToActionHeadlineLast}> Vereinbaren Sie jetzt Ihren Demo-Call Termin</h3>
            <p className={styles.textCenter}>Wir melden uns umgehend zurück und beraten Sie wie Sie Ihre Planung mit einsatzplaner.com auf das nächste Level bringen können.</p>
            <Link href="/kontakt"><button className={styles.callToActionBTN}> Demo-Termin vereinbaren </button></Link>
          </div>
        </div>
      </section>
    </Fragment >

  )
}
