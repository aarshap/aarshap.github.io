import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled(motion.div)`
    background-color: ${props => props.theme.background.inverted};
    border-bottom: var(--line-width) solid ${props => props.theme.line.inverted};
    display: grid;
        align-items: center;
        grid-gap: 40px;
        grid-template-rows: repeat(4, minmax(0, 1fr));
    height: 100vh;
    padding: calc(var(--su) * 2) var(--su);
    position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    z-index: 4;

    @media (min-width: 800px) {
        align-items: start;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-template-rows: auto;
        height: auto;
        padding: 192px var(--su) 80px;
        position: absolute;
            bottom: auto;
        z-index: 2;
    }

`

export const Date = styled.h6`
    color: ${props => props.theme.text.invertedMuted};
    margin-bottom: 16px;
`

export const Title = styled.h3`
    margin-bottom: 12px;
    line-height: var(--line-height-tight);

    @media (min-width: 800px) {
        margin-bottom: 20px;
    }

`

export const Tagline = styled.h5`
    color: ${props => props.theme.text.invertedMuted};
    font-weight: 400;
    line-height: var(--line-height-paragraph);
`

export const CloseButton = styled.button`
    position: absolute;
        top: var(--su);
        right: var(--su);

    @media (min-width: 800px) {
        display: none;
    }

    svg {
        height: 16px;
        width: 16px;

        path {
            fill: ${props => props.theme.link.text.inverted};
            transition: fill 0.2s linear;
        }

    }

    &:hover svg path {
        transition: none;
        fill: ${props => props.theme.link.text.invertedHover};
    }

`