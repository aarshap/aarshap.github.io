import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const Fade = (props) => {

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const Animation = {
        initial: {
            opacity: 0,
            y: 8,
        },
        visible: {
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 8,
            transition: {
                delay: props.delay ? props.delay : 0,
                duration: 0.5,
                type: "tween"
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5,
                type: "tween"
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={Animation}
        >
            {props.children}
        </motion.div>        
    )
    
}

export const SlideUp = (props) => {

    // In view triggering

    const controls = useAnimation()

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "240px"
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    // Motion animations

    const parentAnimation = {
        hidden: {},
        visible: {
            transition: {
                delay: props.delay ? props.delay : 0,
                staggerChildren: 0.1
            }
        }
    }
    
    const childAnimation = {
        initial: {
            y: "110%",
            transition: {
                duration: 0.5,
                type: "tween"
            }
        },
        visible: {
            y: "-9%",
            transition: {
                duration: 0.5,
                type: "tween"
            }
        },
        exit: {
            y: "110%",
            transition: {
                duration: 0.5,
                type: "tween"
            }
        }
    }

    // Using split to grab each word

    var words = props.children.split(" ")
    
    return (
        <motion.div
            initial="initial"
            animate={controls}
            exit="exit"
            variants={parentAnimation}
        >
            {words.map((text, index) =>
                <div key={index} ref={ref} style={{ overflow: "hidden", display: "inline-block", marginBottom: "-24px" }}>
                    <motion.div variants={childAnimation} key={index}>
                        {words.length !== index + 1 ? text + "\xa0" : text }
                    </motion.div>
                </div>
            )}
        </motion.div>
    )

}
