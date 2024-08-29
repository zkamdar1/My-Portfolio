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
                        <h3> Software Engineer</h3>
                        <p>Enthusiastic Software Engineer with a background in Computer Science from the University of North Carolina at Chapel Hill. Passionate about building innovative solutions and continuously expanding my expertise in full-stack development and new technologies.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Technical Skills</h3>
                        <p>Skilled in using a wide range of programming languages and frameworks to build innovative solutions. Experienced in full-stack development, optimizing performance, and enhancing user experiences. Familiar with software engineering best practices, version control systems, and Agile development methodologies.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt='ui Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Collaborative Team Player</h3>
                        <p>Effective communicator and team player, experienced in collaborating with cross-functional teams to deliver high-quality software solutions. Proven track record of contributing to projects through active collaboration, adaptability, and a commitment to achieving shared objectives.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
