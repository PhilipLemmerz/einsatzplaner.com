import { Fragment } from "react";
import styles from "../styles/testaccount-erstellen.module.css";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useRef, useState } from 'react';
import router from "next/router";
import Head from "next/head";

function TestAccountPage(props) {
    const companyNameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const [loading, setLoading] = useState(false);
    const nameRef = useRef();
    const [error, setError] = useState();
    const [formStep, setFormStep] = useState(0);
    const [errorServer, setServerError] = useState(false);

    function toSecondStep() {
        if (emailRef.current.value.length > 0 && companyNameRef.current.value.length > 0 && emailRef.current.value.includes('@')) {
            setFormStep(1);
            setError(false)
        } else {
            setError(true)
        }
    }

    function backToStepOne() {
        setFormStep(0);
    }

    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true);
        const data = {
            email: emailRef.current.value,
            companyName: companyNameRef.current.value,
            phone: telRef.current.value,
            name: nameRef.current.value,
        }
        const response = await fetch('https://api.einsatzplaner.com/website-contact/form', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            console.log(response)
            setLoading(false);
            setServerError(false);
            router.replace('danke');
        } else {
            console.log('error');
            setLoading(false);
            setServerError(true);
        }
    }

    return (
        <Fragment>
            <Head>
                <title> Einsatzplaner Software - kostenfrei testen </title>
                <meta name="description" content="Einsatzplaner Software - überzeugen Sie sich kostenfrei von Einsatzplaner.com" />
            </Head>
            <section className={styles.sectionGetTestAccount}>
                <h1 className={styles.headline}> Zugangsdaten kostenfrei erhalten: </h1>
                <p className={styles.headlineParagraph}>
                    Wir freuen uns, dass Sie einsatzplaner.com kostenfrei testen möchten - <br></br>
                    Füllen Sie einfach das Formular aus und Sie erhalten Ihre Zugangsdaten umgehend per E-Mail !
                </p>
                <form onSubmit={submitHandler}>
                    <div className={formStep === 0 ? styles.formBlock : styles.hide}>
                        <div className={styles.formGroup}>
                            <label htmlFor="company" className={styles.label}>Firmenname *</label>
                            <input id="company" className={styles.input} type="text" ref={companyNameRef} placeholder="Mustermann GmbH"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>E-Mail Adresse *</label>
                            <input id="email" className={styles.input} type="text" ref={emailRef} placeholder="info@gmbh.de"></input>
                        </div>
                        <div className={styles.secondStepBTN} onClick={toSecondStep}>weiter</div>
                    </div>

                    <div className={formStep === 1 ? styles.formBlock : styles.hide}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Telefonnummer *</label>
                            <input id="phone" className={styles.input} type="tel" ref={telRef} placeholder="0228 - 227 983 47"></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Ansprechpartner</label>
                            <input id="name" className={styles.input} type="text" ref={nameRef} placeholder="Herr Müller"></input>
                        </div>
                        <button className={styles.secondStepBTN} onClick={props.onSubmit}>absenden</button>
                    </div>
                </form>
                {error && <p className={styles.errorMessage}> Bitte füllen Sie beide Felder aus & geben Sie eine gültige E-Mail Adresse an</p>}
                {errorServer && <p className={styles.errorMessage}>Leider ist ein Fehler aufgetreten! Versuchen Sie es bitte nocheinmal oder kontaktieren Sie den Support</p>}
                <div className={styles.stepsBox}>
                    <div>
                        {formStep === 0 && <p> Schritt 1 von 2</p>}
                        {formStep === 1 && <p> Schritt 2 von 2</p>}
                    </div>
                </div>
                {formStep === 1 && <div className={styles.back} onClick={backToStepOne}>
                    <BsFillArrowLeftCircleFill />
                    <p className={styles.backText}> zurück</p>
                </div>}
            </section>
            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
            </div>}
        </Fragment>
    )
}


export default TestAccountPage