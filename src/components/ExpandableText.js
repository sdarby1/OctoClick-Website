import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ExpandableText = ({ title, content, initialVisible = false, onToggle }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(initialVisible);

  const toggleVisibility = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    onToggle(newVisibility); // Inform the parent component about the visibility change
  };

  const containerVariants = {
    hidden: {
      y: '0%',
      opacity: 1
    },
    visible: {
      y: '-10%',
      opacity: 1,
      transition: {
        y: { duration: 0.5 },
        when: "beforeChildren",
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      maxHeight: 0,
      overflow: 'hidden',
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      maxHeight: '350px',
      overflow: 'visible',
      transition: { duration: 0.5 }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h4>{title}</h4>
        <button className="showmore-btn" onClick={toggleVisibility}>
          {isVisible ? t('showLess') : t('showMore')}
        </button>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={textVariants}
        >
          <p>{content}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExpandableText;
