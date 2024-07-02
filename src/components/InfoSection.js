import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import ExpandableText from './ExpandableText';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../hooks/ImageSlider';
 // Ensure you import the ImageSlider component

 const images1 = [
  './images/slider/static.jpg',
  './images/slider/slide1.jpg',
  './images/slider/slide2.jpg',
  './images/slider/slide3.jpg',
  // Weitere Bilder hier hinzufügen
];

const images2 = [
  './images/slider/static.jpg',
  './images/slider/slide1.jpg',
  './images/slider/slide2.jpg',
  './images/slider/slide3.jpg',
  // Weitere Bilder hier hinzufügen
];

const InfoSection = () => {
  const { t } = useTranslation();
  const sectionVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [ref1, controls1] = useScrollAnimation();
  const [ref2, controls2] = useScrollAnimation();
  const [ref3, controls3] = useScrollAnimation();
  const [ref4, controls4] = useScrollAnimation();

  const [isSlider1Visible, setIsSlider1Visible] = useState(false);
  const [isSlider2Visible, setIsSlider2Visible] = useState(false);

  useEffect(() => {
    if (!isSlider1Visible) {
      document.querySelector('.info-section .perspective-container.left').style.setProperty('--current-origin', 'left center');
      document.querySelector('.info-section .perspective-container.left').style.setProperty('--current-rotate', '20deg');
      document.querySelector('.info-section .perspective-container.left').classList.add('returning');
    } else {
      document.querySelector('.info-section .perspective-container.left').classList.remove('returning');
    }
  }, [isSlider1Visible]);

  useEffect(() => {
    if (!isSlider2Visible) {
      document.querySelector('.info-section .perspective-container.right').style.setProperty('--current-origin', 'right center');
      document.querySelector('.info-section .perspective-container.right').style.setProperty('--current-rotate', '-20deg');
      document.querySelector('.info-section .perspective-container.right').classList.add('returning');
    } else {
      document.querySelector('.info-section .perspective-container.right').classList.remove('returning');
    }
  }, [isSlider2Visible]);

  return (
    <div>
      <div className="info-section">
        <motion.div
          className="info-image-container"
          initial="hidden"
          animate={controls1}
          custom="left"
          variants={sectionVariants}
          ref={ref1}
        >
          <ImageSlider isVisible={isSlider1Visible} images={images1} direction="left" />
        </motion.div>

        <motion.div
          className="info-text-container"
          initial="hidden"
          animate={controls2}
          custom="right"
          variants={sectionVariants}
          ref={ref2}
        >
          <ExpandableText
            title={t('info-section.title1')}
            content={t('info-section.desc1')}
            onToggle={setIsSlider1Visible}
          />
        </motion.div>
      </div>

      <div className="info-section">
        <motion.div
          className="info-text-container"
          initial="hidden"
          animate={controls3}
          custom="right"
          variants={sectionVariants}
          ref={ref3}
        >
          <ExpandableText
            title={t('info-section.title2')}
            content={t('info-section.desc2')}
            onToggle={setIsSlider2Visible}
          />
        </motion.div>

        <motion.div
          className="info-image-container"
          initial="hidden"
          animate={controls4}
          custom="left"
          variants={sectionVariants}
          ref={ref4}
        >
          <ImageSlider isVisible={isSlider2Visible} images={images2} direction="right" />
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;