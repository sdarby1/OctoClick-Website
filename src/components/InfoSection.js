import React from 'react';
import { motion } from 'framer-motion';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import ExpandableText from './ExpandableText';
import { useTranslation } from 'react-i18next';


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


  return (
    <div>
      <div className="info-section">

        <motion.div
          className="info-image-container"
          initial="hidden"
          animate={controls1}
          custom="right"
          variants={sectionVariants}
          ref={ref1}
        ></motion.div>

        <motion.div
          className="info-text-container"
          initial="hidden"
          animate={controls2}
          custom="left"
          variants={sectionVariants}
          ref={ref2}
        >
          <ExpandableText
          title={t('info-section.title1')}
          content={t('info-section.desc1')}
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
          />
        </motion.div>
        <motion.div
          className="info-image-container"
          initial="hidden"
          animate={controls4}
          custom="left"
          variants={sectionVariants}
          ref={ref4}
        ></motion.div>
      </div>

    </div>
  );
};

export default InfoSection;