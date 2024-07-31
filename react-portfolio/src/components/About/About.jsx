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
                        <h3>Frontend Developer</h3>
                        <p>Frontend Dev with experience in blah blah</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Backend Dev with experience in blah blah</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt='ui Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>UI and UX Designer with experience in blah blah</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
