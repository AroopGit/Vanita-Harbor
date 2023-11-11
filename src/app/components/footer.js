import React, { useEffect } from 'react';
import styles from "@/app/styles/footer.module.css";
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.footer} data-aos="fade-up">
                <div className={styles.bex1}>
                    <div className={styles.comb1}>
                        <Link href="/"
                              className={styles.logo_link1}>
                            <h1 className={styles.logo1} data-aos="zoom-in">Vanita</h1>
                        </Link>
                        <Link href="/"
                              className={styles.logo_link1}>
                            <h1 className={styles.logo2} data-aos="zoom-in">Harbor</h1>
                        </Link>
                    </div>
                    <h1 className={styles.tags} data-aos="fade-right">Your Source of Strength for Mental Health & Wellness</h1>
                    
                </div>
                <div className={styles.bex2} data-aos="fade-up">
                    <h1 className={styles.use}>Links</h1>
                    <ul className={styles.un_lists}>
                        <Link href="/" className={styles.link}><li className={styles.list_sty}>Home</li></Link>
                        <Link href="/about" className={styles.link}><li className={styles.list_sty}>About</li></Link>
                        <Link href="/articles" className={styles.link}><li className={styles.list_sty}>Articles</li></Link>
                        <Link href="/contact" className={styles.link}><li className={styles.list_sty}>Contact</li></Link>
                    </ul>
                </div>
                <div className={styles.bex3} data-aos="fade-up">
                    <h1 className={styles.use}>Contact us</h1>
                    <div className={styles.add}>
                        <h1 className={styles.moves}>Web Information Manager National Informatics Centre A4B4, Lodhi Road ,New Delhi-110003</h1>
                        <h1 className={styles.moves}>indiaportal@gov.in</h1>
                        <h1 className={styles.moves}>+91 112</h1>
                        <Link href="https://services.india.gov.in/service/detail/lodge-your-complaint-with-national-commission-for-women-1" className={styles.moves}>complaint</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
