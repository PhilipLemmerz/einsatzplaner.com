/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/components/footer.module.css";
import { BsBoxArrowInRight, BsWhatsapp, BsAt } from 'react-icons/bs';

function Footer() {
    return (
       
        <footer className={styles.footer}>
            <div className={styles.mobileLogoDiv}>
                <Link href="/"><img className={styles.mobileFooterLogo} src="/logo-white.png" alt="logo-einsatzplaner.com" /></Link>
            </div>
            <div className={styles.footerTop}>
                <Link href="/"><img className={styles.footerLogo} src="/logo-white.png" alt="logo-einsatzplaner.com" /></Link>
                <div className={styles.footerMenu}>
                    <h4> Weiterführende Informationen </h4>
                    <nav className={styles.footerNavigation}>
                        <Link href="/">Start</Link>
                        <Link href="/funktionen">Funktionen</Link>
                        <Link href="/preise">Preise</Link>
                    </nav>
                </div>
                <div className={styles.footerContact}>
                    <h4>Kontakt</h4>
                    <Link href="/kontakt"><div className={styles.contactBoxForm}>
                        <BsBoxArrowInRight size={20} />
                        <span>Kontaktformular</span>
                    </div></Link>
                    <div className={styles.contactBox}>
                        <BsWhatsapp size={18} />
                        <span> +49 (0) 160 92 654 321</span>
                    </div>
                    <div className={styles.contactBox}>
                        <BsAt size={20} />
                        <span> service@einsatzplaner.com</span>
                    </div>
                </div>
            </div>
            <hr className={styles.line}></hr>
            <nav className={styles.footerBottom}>
                <Link href="/datenschutz">Datenschutz</Link>
                <Link href="/impressum">Impressum</Link>
            </nav>
            

        </footer>
    )
}

export default Footer