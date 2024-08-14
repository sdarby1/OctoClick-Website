import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import ExpandableText from './ExpandableText';
import { useTranslation } from 'react-i18next';
import ImageSlider from '../hooks/ImageSlider';

const images1 = [
  './images/slider/film/film-slide-1.jpg',
  './images/slider/film/film-slide-2.jpg',
  './images/slider/film/film-slide-3.jpg',,
  './images/slider/film/film-slide-4.jpg',
  './images/slider/film/film-slide-5.jpg',
  './images/slider/film/film-slide-6.jpg',
];

const images2 = [
  './images/slider/audio/audio-slide-1.jpg',
  './images/slider/audio/audio-slide-2.jpg',
  './images/slider/audio/audio-slide-3.jpg',
  './images/slider/audio/audio-slide-4.jpg',
];

const images3 = [
  './images/slider/static.jpg',
  './images/slider/slide1.jpg',
  './images/slider/slide2.jpg',
  './images/slider/slide3.jpg',
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
  const [ref5, controls5] = useScrollAnimation();

  const [isSlider1Visible, setIsSlider1Visible] = useState(false);
  const [isSlider2Visible, setIsSlider2Visible] = useState(false);
  const [isSlider3Visible, setIsSlider3Visible] = useState(false);

  useEffect(() => {
    const leftElement = document.querySelector('.info-section .perspective-container.left');
    if (leftElement) {
      if (!isSlider1Visible) {
        leftElement.style.setProperty('--current-origin', 'left center');
        leftElement.style.setProperty('--current-rotate', '20deg');
        leftElement.classList.add('returning');
      } else {
        leftElement.classList.remove('returning');
      }
    }
  }, [isSlider1Visible]);

  useEffect(() => {
    const rightElement = document.querySelector('.info-section .perspective-container.right');
    if (rightElement) {
      if (!isSlider2Visible) {
        rightElement.style.setProperty('--current-origin', 'right center');
        rightElement.style.setProperty('--current-rotate', '-20deg');
        rightElement.classList.add('returning');
      } else {
        rightElement.classList.remove('returning');
      }
    }
  }, [isSlider2Visible]);

  useEffect(() => {
    const middleElement = document.querySelector('.info-section .perspective-container.middle');
    if (middleElement) {
      if (!isSlider3Visible) {
        middleElement.style.setProperty('--current-origin', 'center center');
        middleElement.style.setProperty('--current-rotate', '0deg');
        middleElement.classList.add('returning');
      } else {
        middleElement.classList.remove('returning');
      }
    }
  }, [isSlider3Visible]);

  return (
    <div className="info-container">
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
          <svg id="Ebene_1" className="cls-1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style></style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
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
      
      <div className="info-divide-container">
        <div className="info-divider"></div>
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
          <svg id="Ebene_1" className="cls-2" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style></style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
        </motion.div>
      </div>

      <div className="info-divide-container">
        <div className="info-divider"></div>
      </div>

      <div className="info-section">
        <motion.div
          className="info-image-container"
          initial="hidden"
          animate={controls5}
          custom="left"
          variants={sectionVariants}
          ref={ref5}
        >
          <ImageSlider isVisible={isSlider3Visible} images={images3} direction="left" />
          <svg id="Ebene_1" className="cls-3" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.47 190.47">
            <defs>
              <style></style>
            </defs>
            <circle cx="95.24" cy="95.24" r="94.74" transform="translate(-39.45 95.24) rotate(-45)"/>
          </svg>
        </motion.div>

        <motion.div
          className="info-text-container"
          initial="hidden"
          animate={controls5}
          custom="right"
          variants={sectionVariants}
          ref={ref5}
        >
          <ExpandableText
            title={t('info-section.title3')}
            content={t('info-section.desc3')}
            onToggle={setIsSlider3Visible}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;
