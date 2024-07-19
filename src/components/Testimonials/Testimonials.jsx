import React from 'react';
import './Testimonials.css';
import PauseOnHoverSlider from './PauseOnHoverSlider';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants } from '@/src/utils/animation'; // Importa las variantes de animación

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView="onscreen"
              className='tag'
            >
              Testimonials
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView="onscreen"
              className='title'
            >
              Experience the Difference with Our Premium Stucco Services
            </motion.span>
            <motion.span
              variants={desVariants}
              initial="offscreen"
              whileInView="onscreen"
              className="des"
            >
              What people say about us
            </motion.span>
          </div>
        </div>
        
        {/* Slider */}
        <PauseOnHoverSlider />
      </div>
    </div>
  );
}

export default Testimonials;


