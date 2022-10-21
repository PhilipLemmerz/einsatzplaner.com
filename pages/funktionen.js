/* eslint-disable @next/next/no-img-element */
import styles from "../styles/functionsPage.module.css";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

function FunctionsPage() {
    return (
        <Fragment>
            <Head>
                <title> Terminplaner Software für Mitarbeiter und Monteure</title>
                <meta name="description" content="Terminplaner Software - Mitarbeiter und Monteure effizient einsetzen und Kosten und Ressourcen sparen durch einsatzplaner.com" />
            </Head>
            <section>
                <div className={styles.headlineSection}>
                    <h1 className={styles.headline}> Auslastung erhöhen & Kosten reduzieren mit unserer Terminplaner-Software</h1>
                    <p className={styles.centerText}>
                        Personal ist in fast jeder Branche knapp - umso wichtiger ist es, dass Sie Ihre vorhandenenen Mitarbeiter bestmöglich auslasten und effizient einsetzten.
                        <br></br>Hierbei möchten wir Sie mit unserer Terminplaner-Software unterstützen!
                    </p>
                </div>
                <section className={styles.sectionOverview}>
                    <div className={styles.overview}>
                        <Link href="#appointmentFinder">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Intelligenter Terminfinder</h2>
                                    <img className={styles.overViewImage} src="/terminfinder-funktion-index.jpg" alt="einsatzplaner-terminfinder"></img>
                                    <p className={styles.centerText}> Sparen Sie Zeit & Kosten durch die geografische Zusammenlegung von Terminen</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#mapsIntegration">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Google Maps Integration</h2>
                                    <img className={styles.overViewImage} src="/google-maps-funktion-index.jpg" alt="einsatzplaner-google-maps"></img>
                                    <p className={styles.centerText}> Haben Sie Ihre Kundeadressen & die Parkplatzsituation stehts im Blick. </p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#usability">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Einfachste Bedienbarkeit</h2>
                                    <img className={styles.overViewImage} src="/ansichten-funktion-index.jpg" alt="einsatzplaner-ansichten"></img>
                                    <p className={styles.centerText}>Maximale Effizienz durch verschiedenste Terminansichten für jeden Mitarbeiter-Typen.</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#adressCheck">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Integrierte Adressen Überprüfung</h2>
                                    <img className={styles.overViewImage} src="/adressenfinder-funktion-index.jpg" alt="einsatzplaner-adressenfinder"></img>
                                    <p className={styles.centerText}>Verlassen Sie sich auf zu 100% richtige Kundenadressen</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#documentation">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Foto Dokumentation</h2>
                                    <img className={styles.overViewImage} src="/bild-upload-funktion-index.jpg" alt="einsatzplaner-bilderUpload"></img>
                                    <p className={styles.centerText}>Verbessern Sie Ihre Auftragsdokumentation mit Fotos</p>
                                </div>
                            </div>
                        </Link>
                        <Link href="#development">
                            <div className={styles.functionBox}>
                                <div className={styles.textContentOverview}>
                                    <h2 className={styles.functionDetailHeadline}>Weitere Features in der Entwicklung</h2>
                                    <img className={styles.overViewImage} src="/funktionen-entwicklung-index.jpg" alt="einsatzplaner-entwicklung"></img>
                                    <p className={styles.centerText}>Wir arbeiten auf Hochtouren an neuen Features um die Terminplaner-Software für Sie zu verbessern</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
                <section className={styles.functionDetailSection}>
                    <div className={styles.detailHeadlineContainer}>
                        <h2 className={styles.centerText}>Terminplaner-Funktionen im Detail</h2>
                    </div>
                    <div className={styles.functionDetailLeft} id="appointmentFinder">
                        <h3 className={styles.functionDetailHeadline}> Intelligenter Terminfinder</h3>
                        <h4> Problem:</h4>
                        <p> Sie verplanen mehr als 2 Teams jeden Tag im Außeneinsatz - dann ist es völlig normal, dass Sie den Überblick verlieren, welches
                            Team wann an welchen Orten unterwegs ist. Ohne eine clevers Tool führt dies zwangsläufig dazu, dass Ihre Mitarbeiter oder Monteure wertvolle Zeit im Auto verbringen
                            statt Umsatz bei Aufträgen zu generieren. Dieses Problem potenziert sich je mehr Mitarbeiter Sie verplanen und ist eine häufig unbekannte Kostenposition.
                            Genau hier setzt der intelligenter Terminfinder unserer Terminplaner Software an.
                        </p>
                        <h4>Lösung:</h4>
                        <p>
                            Mit unserem intelligenten Terminfinder erhalten Sie im handumdrehen freie Termine die geografisch Nahe an einem bereits geplanten Termin liegen.
                            Sie geben nur die Kundenadresse ein und die benötite Arbeitszeit und Sie erhalten zahlreiche Terminvorschläge - absteigend sortiert nach der geringsten
                            Fahrzeit.
                        </p>
                    </div>
                    <div className={styles.functionDetailRight} id="mapsIntegration">
                        <h3 className={styles.functionDetailHeadline}>Google Maps Integration</h3>
                        <h4> Problem:</h4>
                        <p> Eine nicht auffindbare Adresse oder eine schlechte Parkplatzsituation kann Ihren Tagesplan verzögern oder im schlimmsten Fall sogar zu nicht fertiggestellten
                            Tagestouren führen. Insbesondere in Großtstädten muss sich bei der Terminplanung ein genaues Bild der lokalen Begebenheiten gemacht werden. Ansonsten droht eine
                            Verzögerung aufgrund von langen Laufwegen oder im schlimmsten Fall sogar das der Auftragsausfall, da kein Parkplatz zur Verfügung steht.
                        </p>
                        <h4>Lösung:</h4>
                        <p>
                            Bei der Arbeit mit der Terminplaner Software einsatzplaner.com haben Sie in der Terminplanung Google-Maps integriert und können sich die Gegebenheiten vor Ort anschauen. So haben Sie die Möglichkeit
                            bereits bei Terminvereinbarung mit dem Kunden eine Lösung für die schwierige Parksituation zu finden. Zudem wissen Ihre Monteure immer genau welches Objekt Sie anfahren
                            müssen da Sie die Situation vor Ort mit dem Google-Maps Auschnitt vergleichen können.
                        </p>
                    </div>
                    <div className={styles.functionDetailLeft} id="usability">
                        <h3 className={styles.functionDetailHeadline}> Einfache Bedienbarkeit</h3>
                        <h4> Problem:</h4>
                        <p> Eine gute & effiziente Terminplanung ist immer abhängig von den Mitarbeiterinnen und Mitarbeitern die die Planung erstellen. Häufig sind Planungslösungen sehr kompliziert oder verschiedene Software
                            muss integriert werden. Dies führt nicht selten dazu, dass insebsondere nicht technik-affine Mitarbeiter mit der Terminplaner Software überfordert sind - dies führt zu Planungsfehlern,
                            genervten Mitarbeitern.
                        </p>
                        <h4>Lösung:</h4>
                        <p>
                            Bei der Entwicklung der Terminplaner Software einsatzplaner.com stand das Bedienkonzept immer an erster Stelle. In interativen Testschleifen wurde jedes Feature von Menschen jeder Altersgruppe
                            aus verschiedenen Planungsabteilungen getesten und optimiert. Das Ergbins ist eine Terminplaner Software mit verschiedensten Termindarstellungen. Egal ob Wasserfallansicht,
                            Zeitstrahlansicht, Wochen- oder Monatsansicht - jeder kann die Terminplanung in der Anischt machen mit der er oder sie am besten zurecht kommt.
                        </p>
                    </div>
                    <div className={styles.functionDetailRight} id="adressCheck">
                        <h3 className={styles.functionDetailHeadline}>Integrierte Adressenüberprüfung</h3>
                        <h4> Problem:</h4>
                        <p> Falsche Adressen sind für jede Planung sehr ärgerlich. Insbesondere in Großstädten, wo Straßennamen gleich mehrfach vorkommen kann ein Postleitzahlendreher
                            dazu führen dass die Kundenadresse nicht mehr eindeutig gefunden werden kann. Häufig fällt die falsche Adresse jedoch erst dem ausführenden Mitarbeiter oder Monteur auf
                            was wiederum zu einem Zeitverlust durch die Suche der richtigen Adresse führt.
                        </p>
                        <h4>Lösung:</h4>
                        <p>
                            Bei der Terminierung von Terminen mit der Terminplaner Software einsatzplaner.com erhalten Sie bereits bei Termineingabe eine direkte Rückmeldung, ob die Adresse richtig ist bzw. Vorschläge,
                            mit ähnlichen Adressen die gemeint sein könnten. Hierdurch haben Ihre Mitarbeiter immer die richtige Adresse und die optimierte Routenplanung wird nicht durch falsche
                            Kundeadressen beeinträchtigt.
                        </p>
                    </div>
                    <div className={styles.functionDetailLeft} id="documentation">
                        <h3 className={styles.functionDetailHeadline}>Foto Dokumentation</h3>
                        <h4> Problem:</h4>
                        <p> Ihre Mitarbeiter müssen Arbeiten von anderen Monteuren beenden oder fortführen. Monate nach Auftragsdurchführung werden Arbeiten reklamiert oder Folgeaufträge müssen
                            durchgeführt werden. Oder Sie müssen Kundendokumente und Bilder verfügbar haben. Wenn Sie keinen zentralen Ort für diese Inforamtionen und Dokumente haben führt dies zu
                            Informationsverlust und kostet Zeit, Nerven und erhöht Ihre Kosten.
                        </p>
                        <h4>Lösung:</h4>
                        <p>
                            mit der Terminplaner Software einsatzplaner.com können Sie alle diese Dokumente direkt im Termin sammeln und zur Verfügung stellen. Sie benötigen keine extra Cloud-Speicher oder Kundenordner
                            auf Ihren Computern und jeder Kollege kann von überall aus die Dokumente einsehen. Dies sorgt für eine maximale Transparenz und Dokumentation in Ihren
                            Aufträgen und bereitet Sie auf Folgeauträge oder Reklamationen optimal vor.
                        </p>
                    </div>
                    <div className={styles.functionDetailRight} id="development">
                        <h3 className={styles.functionDetailHeadline}>Funktionen in der Entwicklung</h3>
                        <p>
                            Wir sind stetig mit der Entwicklung ausgewählter Funktionen für die Terminplaner Software beschäftigt. Wir möchten den Terminplaner jedoch nicht mit Features überladen die kaum benutzt werden
                            und die ganze Bedienung verkomplizieren. Eine einfache Bedienbarkeit hat für uns immer höchste Priorität. Sie können sich jedoch auch in Zukunft auf z.B. die Integration
                            einer Monteur-App und Kalkulationsfunktionen freuen mit denen Sie noch mehr aus Ihren vorhanden Ressourcen herausholen können.
                        </p>

                    </div>
                </section>
            </section>
        </Fragment>
    )

}

export default FunctionsPage