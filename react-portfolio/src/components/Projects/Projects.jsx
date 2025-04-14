import React, { useEffect, useRef } from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const projectElements = document.querySelectorAll(`.${styles.projectCard}`);
          projectElements.forEach((project, index) => {
            setTimeout(() => {
              project.classList.add(styles.animateIn);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects} ref={projectsRef}>
            {
                projects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project} />
                    );
                })
            }
        </div>
    </section>
  );
};
