// components/PauseOnHoverSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { containerVariants } from '@/src/utils/animation';
import { testimonialsData } from '@/src/utils/data';

const PauseOnHoverSlider = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          pauseOnFocus: true,
          autoplaySpeed: 3000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          pauseOnFocus: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='poh-container'>
      {testimonialsData.map((item, index) => (
        <motion.div
          key={index}
          variants={containerVariants((index + 1) * 0.1)}
          initial="offscreen"
          whileInView={"onscreen"}
          whileHover={{ scale: 1.05 }}
          className="poh-comment"
        >
          <div className="poh-project-card">
            <div className="poh-c-content">
              <svg width='59' height='39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' clipRule='evenodd' d='M13.75 24.375H0V0h25v24.375L16.25 39H5l8.75-14.625Zm20.25 0V0h25v24.375L50.25 39H39l8.75-14.625H34Z' fill='#E62200'/>
              </svg>
              <span>{item.comment}</span>
            </div>
            <div className="poh-c-info">
              <div className="poh-c-avatar">
                {item.name[0]}
              </div>
              <div className="poh-c-person">
                <span>{item.name}</span>
                <span>{item.profession}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  );
}

export default PauseOnHoverSlider;

