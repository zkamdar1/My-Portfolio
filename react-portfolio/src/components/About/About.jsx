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
                        <h3> AI Solutions Architect</h3>
                        <p>Built several AI chatbots using large language models (LLMs) and retrieval-augmented generation (RAG) to help small businesses handle common queries. Integrated tools like OpenAI, Zapier, n8n, and Pinecone for smoother data retrieval and automation. Enjoy exploring ways AI can improve user experiences and reduce manual workflows.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt='Server'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Full-Stack Developer</h3>
                        <p>Experienced with React, Node.js, Python, and PostgreSQL for building web applications end-to-end. Comfortable setting up REST APIs, managing databases, and creating responsive frontends. Familiar with Agile development, version control (Git), and deploying projects to cloud services like Vercel and Heroku.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt='ui Icon'
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Collaborative Team Player</h3>
                        <p>Led two SaaS projects from concept to deployment for small business clients, including a real estate management platform and a dining recommendations tool. Worked closely with clients to gather requirements, communicate technical insights, and adapt to evolving needs. Coordinated with designers and fellow developers to implement user feedback, ensuring each product aligned with both client goals and an optimal end-user experience.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
