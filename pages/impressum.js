import styles from "../styles/impressum.module.css";

function ImpressumPage() {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.headline} > Verantwortlich </h1>
            <p className={styles.text}>
                DSK Service GmbH <br></br>
                Deutschherrenstr. 197-201<br></br>
                53179 Bonn<br></br>
                Steuernummer: 206/5913/1441<br></br>
                Amtsgericht Bonn HRB23997<br></br>
                Geschäftsführer Philip Lemmerz<br></br>
            </p>
            <h2 className={styles.headline}>Kontakt:</h2>
            <p className={styles.text}>
                Telefon Büro Bonn: +49 228 22798347<br></br>
                E-Mail: service@einsatzplaner.com
            </p>
            <h2 className={styles.headline}>Haftungsausschluss und Datenschutz (TDG)</h2>
            <p className={styles.text}>
                1. Inhalt des Onlineangebotes Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
                Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung
                der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen,
                ofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.
                Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder
                die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
            <h2 className={styles.headline}>2. Urheber- und Kennzeichenrecht</h2>
            <p className={styles.text}>
                Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst
                erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen.
                Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des
                jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu
                ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim
                Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten
                Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
            </p>
            <h2 className={styles.headline}>3. Rechtswirksamkeit dieses Haftungsausschlusses</h2>
            <p className={styles.text}>
                Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen
                dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt
                und ihrer Gültigkeit davon unberührt.
            </p>
        </section>
    )
}

export default ImpressumPage;