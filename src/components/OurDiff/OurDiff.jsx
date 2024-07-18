import React from 'react';
import './OurDiff.css';
import { serviceData } from '@/src/utils/data'; // Usamos serviceData como fuente de datos
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const OurDiff = () => {
  const duplicatedData = [...serviceData, ...serviceData]; // Duplicamos las tarjetas

  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* Head */}
          <div className="od-head">
            <motion.span
              variants={tagVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className='tag'
            >
              Our Selected Projects
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className='title'
            >
              We are ready to scale up your business with our great work result.
            </motion.span>
          </div>

          {/* Feature section */}
          {/* uTILIZO SERVICEDATA CAMBIAR IMAGENES, MANTENER ESTRUCTURA CON TITULO ETC */}
          <div className="od-features">
            {duplicatedData.map((item, index) => (
              <motion.div
                key={index}
                variants={containerVariants((index + 1) * 0.1)}
                initial="offscreen"
                whileInView={"onscreen"}
                whileHover={{ scale: 1.05 }} /* Adding motion hover effect */
                className="od-feature"
              >
                <div className="project-card">
                  <Image
                    src={item.icon}
                    alt="Portfolio"
                    className="project-image"
                    width={150} // Reducimos el tamaño de la imagen
                    height={100} // Reducimos el tamaño de la imagen
                  />
                  <div className="project-info">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-category">{item.des.substring(0, 30)}...</p> {/* Reducimos el texto */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="see-more-container">
            <button className="see-more-button">
              See More <span className="arrow-icon">{">>"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurDiff

