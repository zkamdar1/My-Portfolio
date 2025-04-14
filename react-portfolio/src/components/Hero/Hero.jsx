import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  const greetingRef = useRef(null);
  
  useEffect(() => {
    // Add fade-in animation when component mounts
    const content = document.querySelector(`.${styles.content}`);
    const heroImg = document.querySelector(`.${styles.heroImg}`);
    
    if (content) content.classList.add(styles.fadeIn);
    if (heroImg) heroImg.classList.add(styles.slideIn);
    
    // Greeting typing animation
    if (greetingRef.current) {
      // Clear any existing text first
      greetingRef.current.textContent = '';
      
      const text = "Hi, I'm Zaid";
      let i = 0;
      let typingInterval = null;
      
      const typeWriter = () => {
        if (i < text.length) {
          greetingRef.current.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      };
      
      typingInterval = setInterval(typeWriter, 100);
      
      return () => {
        clearInterval(typingInterval);
      };
    }
    
    return () => {
      if (content) content.classList.remove(styles.fadeIn);
      if (heroImg) heroImg.classList.remove(styles.slideIn);
    };
  }, []);

  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 ref={greetingRef} className={styles.greeting}></h1>
            <h2 className={styles.title}>Full-Stack Developer</h2>
            <p className={styles.description}>
              Computer Science graduate from UNC Chapel Hill passionate about creating impactful web applications. 
              I build elegant solutions that solve real-world problems with clean code and intuitive design.
            </p>
            <div className={styles.btnContainer}>
              <a href="mailto:zkamdar0908@gmail.com" className={styles.contactBtn}>Contact Me</a>
              <a href="#projects" className={styles.projectsBtn}>View Projects</a>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.socialIcons}>
                <a href="mailto:zkamdar0908@gmail.com" className={styles.iconLink} aria-label="Email">
                  <img src={getImageUrl('contact/emailIcon.png')} alt="Email" />
                </a>
                <a href="https://www.linkedin.com/in/zaid-kamdar-ba1a53271" className={styles.iconLink} aria-label="LinkedIn">
                  <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn" />
                </a>
                <a href="https://www.github.com/zkamdar1" className={styles.iconLink} aria-label="GitHub">
                  <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub" />
                </a>
              </div>
            </div>
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
