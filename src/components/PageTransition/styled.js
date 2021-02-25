import styled from "styled-components"
import { motion } from "framer-motion"

export const CurtainLeft = styled(motion.div)`
    background-color: ${props => props.theme.curtain.background};
    position: fixed;
        top: 0;
        right: calc(50% - 1px); // Extra pixel ensures there isn't a percentage based gap
        bottom: 0;
        left: 0;
    z-index: 10;
`

export const CurtainRight = styled(motion.div)`
    background-color: ${props => props.theme.curtain.background};
    position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: calc(50% - 1px);
    z-index: 10;
`
