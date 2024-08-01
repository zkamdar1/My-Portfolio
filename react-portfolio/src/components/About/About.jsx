import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")}
                alt='Me sitting with arms crossed'
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt='Cursor'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Aspiring Full-Stack Developer</h3>
                        <p>As a Computer Science student at the University of North Carolina at Chapel Hill, I thrive on learning new technologies and tackling challenging problems.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Technical Skills</h3>
                        <p>Proficient in JavaScript, Python, React, and Node.js. Experienced in various programming languages and frameworks, including web development and software engineering practices.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt='ui Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Team Player</h3>
                        <p>Strong collaborator with excellent communication skills, committed to working effectively in diverse teams to achieve shared goals.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
