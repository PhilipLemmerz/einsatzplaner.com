import styles from "../../styles/components/slider.module.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Link from "next/link";

function Slider() {
    const [scrolledY, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll);
    });

    return (
        scrolledY >= 500 && <Link href="/kontakt"><div className={styles.slider}>
            <div className={styles.sliderText}>
                <p>Kontakt</p>
                <span className={styles.sliderIcon}> <BsFillChatDotsFill /></span>
            </div>
        </div></Link>
    )
}

export default Slider