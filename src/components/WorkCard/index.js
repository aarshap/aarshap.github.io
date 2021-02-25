import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import { useInView } from "react-intersection-observer"
import Card from "../Card"
import Grid from "../Grid"
import Image from "../Image"
import Linebreaker from "../Linebreaker"

export default (props) => {

    // Intersection Observer

    const [ref, inView] = useInView({
        rootMargin: "-160px 0px",
        triggerOnce: true,
    })

    // Animations

    const imageVariant = {
        initial: {
            width: 0,
        },
        visible: {
            width: inView ? "auto" : 0,
            transition: {
                duration: 0.75,
                ease: [0.85, 0, 0.35, 1],
                type: "tween"
            },
        },
        exit: {
            width: 0,
            transition: {
                duration: 0.5,
                ease: [0.85, 0, 0.35, 1],
                type: "tween"
            },
        },
    }

    return (
        <Styled.Wrapper>
            <Linebreaker>
                <Grid alignItems="center">
                    <Styled.ContentCell>
                        <Fade>
                            <Card
                                meta={{
                                    primary: props.dateStart === props.dateEnd ? props.dateEnd : props.dateStart + " - " + props.dateEnd
                                }}
                                title={props.title}
                                dek={props.description}
                                cta={props.cta}
                                slug={props.slug}
                            />
                        </Fade>
                    </Styled.ContentCell>
                    <Styled.ImageCell>
                        <Styled.ImageWrapper
                            ref={ref}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                            variants={imageVariant}
                        >
                            <Image src={props.image} alt={props.imageAlt} objectPosition={props.imagePosition} />
                        </Styled.ImageWrapper>
                    </Styled.ImageCell>
                </Grid>
            </Linebreaker>
        </Styled.Wrapper>
    )
}