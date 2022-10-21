import styles from "../styles/dankePage.module.css";

function ConfirmPage() {
    return (
        <section className={styles.section}>
            <h1 className={styles.headline}> Vielen Dank für Ihre Nachricht !</h1>
            <p className={styles.paragraph}> Wir werden uns umgehend bei Ihnen zurückmelden ! </p>
        </section>
    )

}

export default ConfirmPage;