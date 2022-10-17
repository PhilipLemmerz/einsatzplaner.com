/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/components/footer.module.css";
import { BsBoxArrowInRight, BsWhatsapp, BsAt } from 'react-icons/bs';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <Link href="/"><img className={styles.footerLogo} src="/logo-white.png" alt="logo-einsatzplaner.com" /></Link>
                <div>
                    <h4> Weiterführende Informationen </h4>
                    <nav className={styles.footerNavigation}>
                        <Link href="/">Funktionen</Link>
                        <Link href="/">Zielgruppe</Link>
                        <Link href="/">Preise</Link>
                        <Link href="/">Blog</Link>
                    </nav>
                </div>
                <div>
                    <h4> Kontakt </h4>
                    <Link href="/"><div className={styles.contactBoxForm}>
                        <BsBoxArrowInRight size={20} />
                        <span>Konktaktformular</span>
                    </div></Link>
                    <div className={styles.contactBox}>
                        <BsWhatsapp size={18} />
                        <span> +49 (0) 160 92 654 321</span>
                    </div>
                    <div className={styles.contactBox}>
                        <BsAt size={20} />
                        <span> service@einsatzplaner</span>
                    </div>
                </div>
            </div>
            <hr className={styles.line}></hr>
            <nav className={styles.footerBottom}>
                <Link href="/">Datenschutz</Link>
                <Link href="/">AGB</Link>
                <Link href="/">Impressum</Link>
            </nav>

        </footer>
    )
}

export default Footer