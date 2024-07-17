import React from 'react'
import './EmailBox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from "framer-motion"
import { containerVariants } from '@/src/utils/animation'; 


const EmailBox = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%"
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1
        }
      }}
      className="emailBox"
    >

        {/* Icon */}
        <motion.div
          variants={containerVariants(0.6)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }} /* La animación solo aparece una vez al cargar pag */

        >
            <LuMail size={30} color='grey'/>
        </motion.div>

        {/* Input */}
        <motion.input
          variants={containerVariants(0.7)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
          type='email'
          placeholder='Enter Email'
        />

        {/* Get Funded Button */}
        <motion.div 
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ once: true }}
          
          className="getFunded">
              Get Started
        </motion.div>

    </motion.div>
  );
};

export default EmailBox
