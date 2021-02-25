import styled from "styled-components"
import { motion } from "framer-motion"

export const Line = styled(motion.div)`
    border-right: var(--line-width) solid ${props => props.invertColor ? props.theme.line.inverted : props.theme.line.normal };
    bottom: 0;
    height: 100%;
    left: calc(50% - var(--line-width));
    position: absolute;
    transform-origin: 50% 0%;
    top: 0;
    width: 0;
    z-index: 0;
`