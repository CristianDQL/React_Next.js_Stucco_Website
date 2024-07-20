/*Especifica que no haya más renderizado del lado del servidor, solo client-side render-mejor????*/
"use client"

import React, {useState} from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi'; 
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"; /* Sticky menu */
import { Link } from "react-scroll"; /* Menu clickable */

const Navbar = () => {
    {/*State Hook - funcionalidad para abrir el menú hamburguesa con clicl*/}
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

    /* Sticky menu */
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) { 
            setNavStyle("sticky");
        } else {
            setNavStyle("");
        }
    });

  return (
    //n = navbar-wrapper, short n for navbar
    //Esta concatenación de divs es para faciltiar el Responsive
    <div className={`n-wrapper ${navStyle}`}>

        {/*Desktop version*/}
        <div className="container">
            <div className="n-container">
                {/*Dos secciones para el navbat*/}
                {/*Left side */}
                <div className="n-logo">
                <img src="NavBar/logo.svg" alt="LOGO"  />
                </div>

                {/*Right side*/}
                <div className="n-right">
                    <div className="n-menu">
                        {/*4 spans para cada submenu del menu*/}
                        {/* Sin autoscrolling */}
                        {/* <span>Services</span>
                        <span>Portfolio</span>
                        <span>Details</span>
                        <span>Contact Us </span> */}

                        <Link to="wwd-wrapper" spy={true} smooth={true}>
                            <span>HOME</span>
                        </Link>
                        <Link to="hiw-wrapper" spy smooth offset={100}>
                            <span>SERVICES</span>
                        </Link>
                        <Link to="wwi-wrapper" spy smooth >
                            <span>PORTFOLIO</span>
                        </Link>
                        <Link to="t-wrapper" spy smooth offset={100}>
                            <span>DETAILS </span>
                        </Link>
                        
                    </div>
                    <div className="fund-button">CONTACT US</div>
                </div>

                

            </div>

            {/* <hr/> */}
        </div>

        {/*Mobile/Tab Version = nm = navbarMobile version*/}
        <div className="nm-container">
            {/*Logo*/}
            <img src="NavBar/LOGO_1.png" alt="LOGO"  />

            {/*Menu Icon = MenuHamburguesa + cambio de estado con Hook de arriba*/}
            {!mobileMenuOpened ? (
               <BiMenuAltRight size={30} onClick={()=>setMobileMenuOpened(true)} /> 
            ) : (  
               <RxCross2 size={30}  onClick={()=>setMobileMenuOpened(false)}/> 
            )}              
                

            {/*Mobile Menu*/}
            <div className="nm-menu" style={{transform: mobileMenuOpened && "translateX(0%)"}}> {/*El style es para que se vea con el click*/}
                {/* Sin autoscrolling */}
                {/* <span>Services</span>
                <span>Portfolio</span>
                <span>Details</span>
                <span>Contact Us </span> */}
                <Link 
                    onClick={() => setMobileMenuOpened(false)}
                    to="wwd-wrapper"
                    spy={true}
                    smooth={true}
                >
                    <span>HOME</span>
                </Link>
                <Link
                    onClick={() => setMobileMenuOpened(false)}
                    to="hiw-wrapper"
                    spy
                    smooth
                    offset={100}
                >
                    <span>SERVICES</span>
                </Link>
                <Link 
                    onClick={() => setMobileMenuOpened(false)}
                    to="wwi-wrapper"
                    spy
                    smooth
                >
                    <span>PORTFOLIO</span>
                </Link>
                <Link
                    onClick={() => setMobileMenuOpened(false)}
                    to="t-wrapper"
                    spy
                    smooth
                    offset={100}
                >
                    <span>Contact Us</span>
                </Link>
                <div className="m-funded-button">Contact Us</div>




            </div>
        </div>

    </div>
  );
};

export default Navbar
