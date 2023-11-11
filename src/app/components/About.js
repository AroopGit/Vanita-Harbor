import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Add AOS styles
import styles from "@/app/styles/about.module.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
    }, []);

    return (
        <>
            <div className={styles.about} id="About">
                <h1 className={styles.head} data-aos="fade-up">Why We Care</h1>
                <div className={styles.grid}>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Why You Should Raise your Voice</h1>
                        <p className={styles.paras}>
                        In today's world, mental health is more than just a personal concern, it's a global issue that affects millions of people every day. Women, in particular, face unique challenges and often struggle to seek help due to societal stigmas and lack of resources. Don't let mental health issues define you. Raise your voice, seek support, and start your journey to well-being. Together, we can create a world where mental health is a priority for everyone.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Why Mental Health Matters to Us</h1>
                        <p className={styles.paras}>
                            In today's society, the demands and expectations placed on us can sometimes become overwhelming. The relentless pursuit of success, the constant comparison on social media, and the stressors of academic and personal life can take a toll on our mental well-being. It's no surprise that many of us find ourselves battling feelings of stress, anxiety, and depression.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Vision</h1>
                        <p className={styles.paras}>
                        Our vision is to create a world where every woman feels empowered to share her experiences and seek support for her mental health, fostering a community that understands, supports, and uplifts. We envision a future where mental health is no longer a taboo, but a topic of open conversation and collective action, leading to a society where women's well-being is prioritized and celebrated.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Mission</h1>
                        <p className={styles.paras}>
                        Our mission is to provide a safe, anonymous, and accessible platform for women to express their experiences with mental health issues and anonymous complaints. We aim to connect women with resources, support, and a community that understands their struggles, encouraging them to seek help, share their stories, and find strength in unity. Through our platform, we strive to break the silence surrounding mental health, promote awareness, and empower women to take control of their mental health journey.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Our Approach</h1>
                        <p className={styles.paras}>
                            This website isn't just about technology; it's about empathy and understanding. We're here to offer a wealth of resources, from informative articles to interactive forums, all designed to help you better understand and manage your mental health. We've also collaborated with mental health professionals to provide accurate, evidence-based information.
                        </p>
                    </div>
                    <div data-aos="fade-up" className={styles.box}>
                        <h1 className={styles.name}>Join Our Mission</h1>
                        <p className={styles.paras}>
                            Mental health is a shared responsibility, and together, we can make a difference. I invite you to join us on this journey. Explore our content, engage with our community, and reach out if you need assistance or just want to connect.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
