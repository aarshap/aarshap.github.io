import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import { motion } from "framer-motion"
import SEO from "../SEO"

export default () => {
    return (
        <>
        <SEO
            title="404"
        />
        <Styled.Wrapper>
            <Fade>
                <motion.div animate={{ x: [-40, 40], rotateY: [180, 0]}} transition={{ repeat: Infinity, repeatType: "reverse" }}>
                    <span role="img" aria-label="404 page emoji">&#128052;</span>
                </motion.div>
                <h4>404 Horse</h4>
            </Fade>
        </Styled.Wrapper>
        </>
    )
}