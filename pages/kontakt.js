import styles from "../styles/contactPage.module.css";
import { Fragment, useRef } from "react";
import { useRouter } from 'next/router';
import { useState } from 'react'

function ContactPage(props) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const nameRef = useRef();
    const acquisitionRef = useRef();
    const companyNameRef = useRef();
    const emailRef = useRef();
    const telRef = useRef();
    const messageRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();
        setLoading(true)
        const data = {
            name: nameRef.current.value,
            companyName: companyNameRef.current.value,
            email: emailRef.current.value,
            phone: telRef.current.value,
            message: messageRef.current.value,
            acquisition: acquisitionRef.current.value,
            contactPage: true
        }
        const response = await fetch('https://api.einsatzplaner.com/website-contact/form', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        if (response.ok) {
            setLoading(false)
            router.replace('danke')
        } else {
            setError(true);
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <section className={styles.contactSection}>
                <h1 className={styles.headline}> Kontaktformular</h1>
                <p className={styles.headlineParagraph}> Wir freuen uns auf Ihre Fragen oder Wünsche und melden uns in Kürze zurück</p>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name"> Name *</label>
                            <input className={styles.input} ref={nameRef} type="text" id="name" required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="companyName"> Firmenname </label>
                            <input className={styles.input} ref={companyNameRef} type="text" id="companyName"></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email"> E-Mail Adresse * </label>
                            <input className={styles.input} ref={emailRef} type="email" id="email" required></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone"> Telefonnummer * </label>
                            <input className={styles.input} ref={telRef} type="tel" id="phone" required></input>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupTextArea}>
                            <label className={styles.label} htmlFor="message"> Ihre Nachricht * </label>
                            <textarea required rows={10} ref={messageRef} className={styles.textArea} id="message" />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroupTextArea}>
                            <label className={styles.label} htmlFor="acquisition"> Wie sind Sie auf uns aufmerksam geworden ? </label>
                            <select ref={acquisitionRef} className={styles.selectInput} id="acquisition">
                                <option className={styles.optionSelect}> bitte auswählen...</option>
                                <option className={styles.optionSelect}> Suchmaschinen (z.B.Google)</option>
                                <option className={styles.optionSelect}> Suchmaschinen (z.B.Google)</option>
                                <option className={styles.optionSelect}> Soziale Medien (z.B. Facebook)</option>
                                <option className={styles.optionSelect}> Zeitschriften (z.B Handwerker Magazin) </option>
                                <option className={styles.optionSelect}> Weiterempfehlung </option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitBTN} onClick={props.onSubmit}> senden </button>
                </form>
            </section>
            {loading && <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}>
                </div>
            </div>}
            {error && <p className={styles.error}> Leider ist ein Fehler aufgetreten - Bitte versuchen Sie es nochmal oder kontaktieren Sie den Support </p>}
        </Fragment>
    )
}

export default ContactPage;