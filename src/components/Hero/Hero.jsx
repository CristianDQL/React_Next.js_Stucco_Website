"use client"

{/*Sección de Hero de Home*/}


import React from 'react'
import './Hero.css'
import EmailBox from '../EmailBox/EmailBox'
import { HeroData } from '@/src/utils/data'
import {animate, delay, motion} from 'framer-motion'

const Hero = () => {

  /* Constantes para las animaciones */
  const variants = (delay) => ({
    initial : {
      y: "18rem"
    },
    animate : {
      y:"0rem",
      transition: {
        type: "spring",
        damping:25,
        duration:2.5,
        delay
      }
    }
  })

    /* Constantes para las animaciones de imágenes */
    const imgVariants = () => ({
      initial : {
        y: "18rem"
      },
      animate : {
        y:"0rem",
        transition: {
          type: "spring",
          duration:2,
          stiffness: 30
        }
      }
    })

  return (
    <div className="h-wrapper">
        <div className="container">

            <img src="hero/paleta_sombra.png" alt="arrow" className="h-arrow" />

            <div className="h-container">

                {/*Left Side*/}
                <div className="h-left">
                   
                   <div className="image-row">
                      {/* componente importado desde utils/data */}
                      {
                        HeroData.slice(0, 3).map((person, i)=> (
                          <div className="person-pill" key={i} >
                            <motion.div 
                              initial={"initial"}
                              animate={"animate"}
                              variants={variants(person.delay)}
                              style={{ backgroundColor: person.bg }}
                              className="person-pill-bg">

                                <motion.img 
                                  initial={"initial"}
                                  animate={"animate"}
                                  variants={imgVariants()}
                                  src={person.src}
                                  alt={person.src}
                                />
                            </motion.div>
                          </div>                        
                        ))
                      }
                   </div>

                   <div className="image-row">
                      {/* componente importado desde utils/data */}
                      {
                        HeroData.slice(3, 6).map((person, i)=> (
                          <div className="person-pill" key={i} >
                            <motion.div 
                              initial={"initial"}
                              animate={"animate"}
                              variants={variants(person.delay)}
                              style={{ backgroundColor: person.bg }}
                              className="person-pill-bg">
                                <motion.img 
                                
                                  initial={"initial"}
                                  animate={"animate"}
                                  variants={imgVariants()}
                                  src={person.src}
                                  alt={person.src}
                                />
                            </motion.div>
                          </div>                        
                        ))
                      }
                   </div>
                </div>

                {/*Right Side*/}
                <div className="h-right">
                  <div className="h-title">
                    <span>Transform your space</span>
                    <span>with premium stucco</span>
                    <span>In Miami</span>
                  </div>

                  <div className="h-des">
                    Experience durable, beautiful finishes with expert local craftsmanship
                  </div>

                  <EmailBox />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
