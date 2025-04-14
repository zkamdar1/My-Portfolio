import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  return (
    <div className={`${styles.container} projectCard`}>
      <div className={styles.imageContainer}>
        <img 
          src={getImageUrl(project.imageSrc)} 
          alt={`Image of ${project.title}`} 
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Demo
            </a>
            <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
              Source
            </a>
          </div>
        </div>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
