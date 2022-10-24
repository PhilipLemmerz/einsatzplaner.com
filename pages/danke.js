import styles from "../styles/dankePage.module.css";
import Head from "next/head";
import { Fragment } from "react";

function ConfirmPage() {
    return (
        <Fragment>
            <Head>
                <title>Danke für Ihre Anfrage</title>
                <meta name="description" content="Einsatzplaner Software - Vielen Dank für Ihre Anfrage" />
            </Head>
            <section className={styles.section}>
                <h1 className={styles.headline}> Vielen Dank für Ihre Nachricht!</h1>
                <p className={styles.paragraph}> Wir werden uns umgehend bei Ihnen zurückmelden! </p>
            </section>

        </Fragment>

    )

}

export default ConfirmPage;