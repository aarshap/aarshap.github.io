import { motion } from "framer-motion"
import styled from "styled-components"

export const SidePanel = styled(motion.div)`
    background-color: ${(props) => props.theme.infoImg.background};
    height: 100vh;
    overflow: hidden;
    position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
    user-select: none;
    z-index: 0;

    &.isComplete {
        width: calc(var(--su) * 3);

        @media (min-width: 800px) {
            margin: calc(var(--nav-height) * -1) calc(var(--su) * -1) calc(var(--su) * -1);
            width: 50vw;
            position: sticky;
                bottom: auto;
                left: auto;    
        }

    }

`

export const ImageWrapper = styled(motion.div)`
    background-color: ${(props) => props.theme.infoImg.background};

    > div {
        height: 100vh;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 100vh;
    }

    div {
        background-color: ${(props) => props.theme.infoImg.background};
    }

    img {
        mix-blend-mode: ${(props) => props.theme.infoImg.blend};
    }
`

export const Bio = styled.div`
    margin-left: calc(var(--su) * 3);

    @media (min-width: 800px) {
        margin-left: 0;
    }

    h2 {
        margin-bottom: 0.5em;
    }

    p:not(:last-child) {
        margin-bottom: 1em;
    }

    h3 {
        margin: 2em 0 1em;
    }
    
`
