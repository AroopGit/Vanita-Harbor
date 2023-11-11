import React, { useEffect } from 'react';
import styles from "@/app/styles/articles.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles

const Articles = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.art} data-aos="fade-up" id="Articles">
                <h1 className={styles.art_name}>Articles</h1>

                <div className={styles.grid}>
                    {/* Include articles related to women's safety, domestic abuse, and reporting */}
                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/main1.jpg" alt="Domestic Abuse" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://nnedv.org/content/media-guide/" className={styles.head_name}>Considerations for Reporting Domestic Violence</Link>
                            <p className={styles.para_men}>Learn about the considerations and guidelines for reporting domestic violence, ensuring the safety and well-being of the victim.</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/see.jpg" alt="Report Anonymously" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://www.wikihow.com/Report-Domestic-Violence-Anonymously" className={styles.head_name}>Reporting Domestic Violence Anonymously</Link>
                            <p className={styles.para_men}>Discover how to report domestic violence anonymously, protecting the victim and ensuring safety.</p>
                        </div>
                    </div>

                    <div className={styles.articles} data-aos="fade-up">
                        <Image src="/medi.jpg" alt="Women's Safety" width={210} height={160} className={styles.dep} />
                        <div className={styles.about_art}>
                            <Link href="https://www.wikihow.com/Ensure-Womens-Safety" className={styles.head_name}>Ensuring Women's Safety</Link>
                            <p className={styles.para_men}>Learn practical tips and strategies to ensure the safety and well-being of women in various situations.</p>
                        </div>
                    </div>

                    {/* Add more articles as needed */}
                </div>

                <Link href="https://pubmed.ncbi.nlm.nih.gov/?term=mental+health" className={styles.btn_more}><button className={styles.bt}>For More Articles</button></Link>
            </div>

            <hr className={styles.line}/>
        </>
    );
};

export default Articles;
