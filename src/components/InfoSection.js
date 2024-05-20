import React from 'react';
import { motion } from 'framer-motion';

const InfoSection = () => {
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

  return (
    <div>
      <div className="info-section">
        <motion.div
          className="info-image-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom="right"
        ></motion.div>
        <motion.div
          className="info-text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom="left"
        >
          <h2>Headline Info</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr...</p>
        </motion.div>
      </div>
      <div className="info-section">
        <motion.div
          className="info-text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom="right"
        >
          <h2>Headline Info</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr...</p>
        </motion.div>
        <motion.div
          className="info-image-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          custom="left"
        ></motion.div>
      </div>
    </div>
  );
};

export default InfoSection;