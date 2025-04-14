import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {currentYear} Zaid Kamdar. All Rights Reserved.
      </div>
    </footer>
  );
}; 