/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../styles/components/header.module.css";
import { BiMenu } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

function Header() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [hideBTN, setHideBTN] = useState(false);
    const router = useRouter();
    const page = router.pathname;

    useEffect(() => {
        if (page === '/testaccount-erstellen') {
            hideHeaderBTN();
        } else {
            showHeaderBTN();
        }
    });

    function hideHeaderBTN() {
        setHideBTN(true);
    }

    function showHeaderBTN() {
        setHideBTN(false);
    }

    function closeMenu() {
        setMobileMenu(false);
    }


    return (
        <header className={styles.header}>
            <div>
                <Link href="/"><img src="/logo.png" alt="logo-einsatzplaner.com" className={styles.logo} /></Link>
                <Link href="/"><img src="/mobileLogo.png" alt="logo-einsatzplaner.com" className={styles.logoMobile} /></Link>
            </div>
            <nav className={styles.mainNavigation}>
                <Link href="/">Start</Link>
                <Link href="/funktionen">Funktionen</Link>
                <Link href="/preise">Preise</Link>
                <Link href="/kontakt">Kontakt</Link>
                {!hideBTN && <Link href="/testaccount-erstellen"><button className={styles.headerBTN}>kostenfrei testen</button></Link>}
            </nav>
            <div className={styles.mobileNavigation}>
                {!hideBTN && <Link href="/testaccount-erstellen"><button className={styles.headerBTNMobile}> kostenfrei testen </button></Link>}
                <button className={styles.toggleBTN} onClick={setMobileMenu.bind(this, !mobileMenu)}> <BiMenu /> </button>
                {mobileMenu && <nav className={styles.mobileNavigationList}>
                    <Link href="/"><a onClick={closeMenu}>Start</a></Link>
                    <Link href="/funktionen"><a onClick={closeMenu}>Funktionen</a></Link>
                    <Link href="/preise"><a onClick={closeMenu}>Preise</a></Link>
                    <Link href="/kontakt"><a onClick={closeMenu}>Kontakt</a></Link>
                </nav>}
            </div>
        </header>
    )
}

export default Header