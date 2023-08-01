import React, { useState, useEffect } from 'react';
import styles from '../styles/ScrollToTopButton.module.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowButton(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${showButton ? styles.showButton : ''}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <i className={`fas fa-chevron-up ${styles.arrowIcon}`}>↑</i>
    </button>
  );
};

export default ScrollToTopButton;
