'use client'

import React from 'react'
import './WhatWeDo.css'
import { features, serviceData } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants, containerVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    
      <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">

                {/* Head of Section */}
                <div className="wwd-head">
                    <motion.span 
                        initial="offscreen" 
                        whileInView={"onscreen"} 
                        variants={tagVariants} 
                        className='tag'
                    >
                        What we do
                    </motion.span>
                    <motion.span initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='title'>
                        {" "}
                        Transforming Spaces with Premium Stucco and Expert Craftsmanship
                    </motion.span>
                    <motion.span initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='des'>Here is how we can evaluate</motion.span>
                </div>


                {/* Bloque imàgenes */}
                <div className="wwd-features">
                    {serviceData.map((feature, i) => (
                        <motion.div 
                            key={i}
                            className="wwd-feature"
                            variants={containerVariants((i+1)*0.1)}
                            initial="offscreen"
                            whileInView="onscreen"
                            whileHover={{ scale: 1.05 }} /* Adding motion hover effect */
                        >
                            <Image src={feature.icon} alt={feature.title} width={250} height={250} />
                            <span>{feature.title}</span>
                            
                        </motion.div>
                    ))}
                 </div>


                {/* Support Block */}
                <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.3)}
                
                    className="wwd-support"
                >

                    {/* Left Side */}
                    <div>
                        <span className='sec-title'>A Full Service Stucco Company</span>
                        <span className='des'>
                        We’ve been perfecting the art of custom stucco finishes for over 20 years
                        </span>
                    </div>

                    {/* Right Side */}
                    <div>
                        <span className='text'>
                        We offer a variety of stucco finishes best suited for your 
                        residential or commercial project.
                        </span>
                        <span className='text'>
                        Because we are a full-service stucco company, we will help you plan
                         your new look and execute it with a level of quality that you can take 
                         pride in
                        </span>
                    </div>


                </motion.div>

            </div>
        </div>
      </div>
      

  )
}

export default WhatWeDo
