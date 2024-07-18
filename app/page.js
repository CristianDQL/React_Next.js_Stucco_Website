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
import Portfolio from '@/src/components/OurDiff/Portfolio';
import AboutUs from '@/src/components/AboutUs/AboutUs';

export default function Home() {

  /* Animación que afectará al scrollin, a cargo de la app, 
  para el cambio entre secciones */
  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      <BrandingVideo/> 
      <WhatWeDo/> {/* Service */}

      {/* MODIFICAR cambio de color entre secciones, a rojo? */}
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "rgb(203, 203, 203)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} /* cantidad de pantalla vista para comenzar animación */
      >
        <Portfolio/>
      </motion.div>


      <AboutUs/>

      {/* Cambio de color a morado seccion WWI */}
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "rgb(203, 203, 203)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}} /* cantidad de pantalla vista para comenzar animación */
      >
        <Testimonials/>
      </motion.div>
      
      <HowItWorks/>

      <Footer/>

    </motion.div>
  );
}
