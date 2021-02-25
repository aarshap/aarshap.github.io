import React, { useState } from "react"
import * as Styled from "./styled"
import { motion, AnimatePresence } from "framer-motion"

const variant = {
    hidden: {
        opacity: 0,
        y: 0
    },
    visible: {
        opacity: 1,
        y: 8
    }
}

export default (props) => {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <Styled.Wrapper>
            <div role="presentation" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                {props.children}
            </div>
            <AnimatePresence>
                {showTooltip &&
                    <motion.div
                        animate="visible"
                        exit="hidden"
                        initial="hidden"
                        variants={variant}
                    >
                        <Styled.Bubble>{props.tooltip}</Styled.Bubble>
                    </motion.div>
                }
            </AnimatePresence>
        </Styled.Wrapper>
    )
}