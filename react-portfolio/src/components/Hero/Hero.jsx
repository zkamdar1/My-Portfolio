import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const path = './ZaidKamdar_resume.pdf';
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Zaid</h1>
            <p className={styles.description}>
            I'm currently a Computer Science student at the University of North Carolina at Chapel Hill (Go Heels!!!). Passionate about technology and innovation, I'm always eager to learn and take on new challenges. Feel free to reach out if you'd like to connect!
            </p>
            <a href="mailto:zkamdar0908@gmail.com" className={styles.contactBtn}>Contact Me</a>
            <a href={path} download="ZK_resume.pdf" className={styles.resumeBtn}>My Resume</a>
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
