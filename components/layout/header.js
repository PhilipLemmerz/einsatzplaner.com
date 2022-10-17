/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/components/header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/"><img src="/logo.png" alt="logo-einsatzplaner.com" className={styles.logo} /></Link>
            </div>
            <nav className={styles.mainNavigation}>
                <Link href="/">Funktionen</Link>
                <Link href="/">Zielgruppe</Link>
                <Link href="/">Preise</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Kontakt</Link>
                <button className={styles.headerBTN}>kostenfrei testen</button>
            </nav>            
        </header>
    )
}

export default Header