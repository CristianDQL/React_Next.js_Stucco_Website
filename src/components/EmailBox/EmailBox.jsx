import React from 'react'
import './EmailBox.css'
import { motion } from 'framer-motion'
import { containerVariants } from '@/src/utils/animation'
import { FaArrowRight } from 'react-icons/fa'

const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%"
      }}
      whileInView={{
        width: "50%", // Ajusta el tamaño según sea necesario
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1
        }
      }}
      className="emailBox"
    >
        {/* Get Started Button */}
        <motion.div 
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
          className="getFunded"
        >
              Get Started <span className="arrow-icon">{">>"}</span>
        </motion.div>
    </motion.div>
  )
}

export default EmailBox
