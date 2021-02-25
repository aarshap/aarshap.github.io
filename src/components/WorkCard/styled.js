import { motion } from "framer-motion"
import styled from "styled-components"

export const ImageWrapper = styled(motion.div)`
    background-color: ${props => props.theme.background.normal};
    overflow: hidden;
    position: relative;
    user-select: none;
    z-index: 2;

    > div {
        height: calc(100vw * .56);
    }

    @media (min-width: 800px) {

        > div {
            height: 100vh;
            left: 50%;
            min-height: 1280px;
            position: absolute;
            transform: translateX(-50%);
        }

    }

`

export const ImageCell = styled.div`
    grid-row: 1;
    position: relative;
`

export const ContentCell = styled.div`
    grid-row: 1;

    margin-top: var(--su);

    @media (min-width: 800px) {
        margin-top: 0;
    }

`

export const Wrapper = styled.div`
    background-color: ${props => props.theme.background.normal};

    @media (min-width: 800px) {
        margin-bottom: var(--su);

        &:last-child {
            margin-bottom: 0;
        }    
    
        &:nth-child(odd) {

            ${ImageCell} {
                grid-column: 2;
                margin-left: calc(var(--su) * -1);
            }

            ${ImageWrapper} {

                @media (min-width: 800px) {
                    border-radius: 0 160px 160px 0;
                    margin-right: auto;
                }

                @media (min-width: 1200px) {
                    border-radius: 0 240px 240px 0;
                }

                @media (min-width: 1600px) {
                    border-radius: 0 320px 320px 0;
                }

                @media (min-width: 2560px) {
                    border-radius: 0 480px 480px 0;
                }

            }

            ${ContentCell} {
                grid-column: 1;
            }

        }

        &:nth-child(even) {

            ${ImageCell} {
                grid-column: 1;
                margin-right: calc(var(--su) * -1);
            }

            ${ImageWrapper} {

                @media (min-width: 800px) {
                    border-radius: 160px 0 0 160px;
                    margin-left: auto;
                }
                
                @media (min-width: 1200px) {
                    border-radius: 240px 0 0 240px;
                }

                @media (min-width: 1600px) {
                    border-radius: 320px 0 0 320px;
                }

                @media (min-width: 2560px) {
                    border-radius: 480px 0 0 480px;
                }
                
            }

            ${ContentCell} {
                grid-column: 2;
            }

        }

    }

`
