import React from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Julio Rugolo</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => handleNavigation('section2')}>
            Skills
          </li>
          <li className={styles.navItem} onClick={() => handleNavigation('section3')}>
            Projetos
          </li>
          {/* Add more navigation items for each section */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
