import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const path = './ZaidKamdar_resume.pdf';
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>AI Developer & Full-Stack Engineer</h1>
            <p className={styles.description}>
            Recent Computer Science graduate from UNC Chapel Hill building AI-powered solutions for small businesses. Co-founder of Advantis Solutions, where we develop custom chatbots and SaaS tools that automate workflows using LLMs like GPT-4. Passionate about bridging technical innovation with real-world impact.
            </p>
            <a href="mailto:zkamdar0908@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}
        />
          <div className={styles.topBlur}/>
          <div className={styles.bottomBlur}/>
    </section>
  );
};
