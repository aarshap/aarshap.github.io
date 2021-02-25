import styled from "styled-components"
import { motion } from "framer-motion"

export const Wrapper = styled(motion.div)`
    display: inline-block;
`

export const Svg = styled.svg`
    fill: ${props => props.inverted ? props.theme.logo.inverted : props.theme.logo.normal };
    height: 32px;
    transition: fill 0.2s linear;
    width: 32px;

    @media (min-width: 800px) {
        height: 40px;
        width: 40px;
    }

`