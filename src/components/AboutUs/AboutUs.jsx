'use client'

import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';  // Importar ícono de Material UI
import GradeIcon from '@mui/icons-material/Grade';  // Importar ícono de Material UI
import FastForwardIcon from '@mui/icons-material/FastForward';  // Importar ícono de Material UI
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { desVariants, tagVariants, titleVariants, containerVariants } from '@/src/utils/animation';

const AboutUs = () => {
  const leftFeatures = [
    { title: "Durability", icon: <AccessTimeIcon style={{ fontSize: 60 }} /> },
    { title: "Premium Product", icon: <GradeIcon style={{ fontSize: 60 }} /> },
    { title: "Efficiency", icon: <FastForwardIcon style={{ fontSize: 60 }} /> }
  ];

  const rightFeatures = [
    { title: "Customer Satisfaction", icon: <SentimentVerySatisfiedIcon style={{ fontSize: 60 }} /> },
    { title: "Integrity", icon: <ThumbUpIcon style={{ fontSize: 60 }} /> },
    { title: "Sustainable Practices", icon: <RecyclingIcon style={{ fontSize: 60 }} /> }
  ];

  return (
      <div className="au-wrapper">
        <div className="container">
            <div className="au-container">

                {/* Head of Section */}
                <div className="au-head">
                    <motion.span 
                        initial="offscreen" 
                        whileInView={"onscreen"} 
                        variants={tagVariants} 
                        className='tag'
                    >
                        About Us
                    </motion.span>
                    <motion.span initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='title'>
                        {" "}
                        Transforming Spaces with Premium Stucco Solutions
                    </motion.span>
                    <motion.span initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='des'>Here is how we can enhance your property</motion.span>
                </div>

                {/* Two Horizontal Blocks */}
                <div className="au-blocks">
                    
                    {/* First Block -left */}
                    <div className="au-block">
                        <motion.span 
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'
                        >
                            Superior Stucco Services
                        </motion.span>
                        <motion.span 
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}                       
                            className='text'>
                            Ensuring your property stands out with top-quality stucco
                        </motion.span>

                        <div className="block-features">
                            {leftFeatures.map((feature, i) => (
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}
                                >
                                    {feature.icon}
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Second block- right */}
                    <div className="au-block"> 
                    <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='sec-title'>Our Commitment to You</motion.span>
                        <motion.span 
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='text'>Building trust through exceptional service and craftsmanship
                        </motion.span>

                        <div className="block-features">
                            {rightFeatures.map((feature, i) => (
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}
                                >
                                    {feature.icon}
                                    <span>{feature.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Block */}
                <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.3)}
                    className="au-support"
                >
                    {/* Left Side */}
                    <div>
                        <span className='sec-title'>Expert Stucco Services</span>
                        <span className='des'>
                        Comprehensive stucco solutions to enhance your property&apos;s durability and aesthetic appeal
                        </span>
                    </div>

                    {/* Right Side */}
                    <div>
                        <span className='text'>
                        Utilizing advanced stucco techniques to ensure long-lasting and visually stunning results for your property
                        </span>
                        <span className='text'>
                        Our team of skilled professionals delivers exceptional stucco application and repair services, adhering to the highest standards of quality and efficiency
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
  )
}

export default AboutUs;


