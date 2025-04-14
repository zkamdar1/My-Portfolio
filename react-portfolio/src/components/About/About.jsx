import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  const aboutItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.2 }
    );

    aboutItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      aboutItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

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
                <li 
                  className={styles.aboutItem}
                  ref={(el) => (aboutItemsRef.current[0] = el)}
                >
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt='Cursor'
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Problem Solver</h3>
                        <p>I enjoy tackling complex challenges and finding elegant solutions. Whether it's optimizing an algorithm or designing an intuitive user interface, I approach problems with creativity and analytical thinking.</p>
                    </div>
                </li>
                <li 
                  className={styles.aboutItem}
                  ref={(el) => (aboutItemsRef.current[1] = el)}
                >
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server'
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Full-Stack Developer</h3>
                        <p>Experienced with React, Node.js, Python, and MongoDB for building web applications end-to-end. I enjoy creating responsive interfaces and scalable backend systems that work together seamlessly.</p>
                    </div>
                </li>
                <li 
                  className={styles.aboutItem}
                  ref={(el) => (aboutItemsRef.current[2] = el)}
                >
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt='UI Icon'
                        className={styles.aboutIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Collaborative Team Player</h3>
                        <p>I believe great software comes from great teamwork. I'm experienced in Agile development, effective communication, and adapting to the evolving needs of projects and clients.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
