/* Animación para el interior de CTA email */
export const containerVariants = (delay = 0)=> ({
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
            delay
        }
    }
    
})

/* Animaciones para los titulos, tags y descripciones de varios headers, como WWD */
export const tagVariants= {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2,
        }
    }
}

export const titleVariants= {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.2,
        }
    }
}

export const desVariants= {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 2.6,
            delay: .2
        }
    }
}