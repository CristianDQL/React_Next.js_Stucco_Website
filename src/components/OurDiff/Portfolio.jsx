import React from 'react';
import './Portfolio.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const Portfolio = () => {
  const duplicatedData = [...serviceData, ...serviceData];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and larger
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          pauseOnFocus: true,// Pause on click for touch devices
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          pauseOnFocus: true, // Pause on click for touch devices
          autoplaySpeed: 3000,
        }
      }
    ]
  };

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
              Our Selected Stucco Projects
            </motion.span>
            <motion.span
              variants={titleVariants}
              initial="offscreen"
              whileInView={"onscreen"}
              className='title'
            >
              We are ready to scale up your business with our great work result
            </motion.span>
          </div>

          {/* Slider section */}
          <Slider {...settings} className='slider-container'>
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
                    width={150}
                    height={100}
                  />
                  <div className="project-info">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-category">{item.des.substring(0, 30)}...</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>

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

export default Portfolio;
