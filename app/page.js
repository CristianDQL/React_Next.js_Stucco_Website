'use client'

//HOME PAGE

//Escribiendo el componente dentro del div, directamente hace las importaciones
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import OurDiff from '@/src/components/OurDiff/OurDiff';
import { motion, unseAnimation, useAnimation  } from "framer-motion";
import HowItWorks from '@/src/components/HowItWorks/HowItWorks';
import WhoWeInvest from '@/src/components/WhoWeInvest/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';

export default function Home() {

  /* Animación que afectará al scrollin, a cargo de la app, 
  para el cambio entre secciones */
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      <BrandingVideo/> 
      <WhatWeDo/>

      {/* MODIFICAR cambio de color entre secciones, a rojo? */}
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} /* cantidad de pantalla vista para comenzar animación */
      >
        <OurDiff/>
      </motion.div>


      <HowItWorks/>

      {/* Cambio de color a morado seccion WWI */}
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} /* cantidad de pantalla vista para comenzar animación */
      >
        <WhoWeInvest/>
      </motion.div>
      
      <Testimonials/>

      <Footer/>

    </motion.div>
  );
}
