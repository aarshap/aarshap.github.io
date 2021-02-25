import React, { useContext, useEffect, useState } from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import { Link } from "gatsby"
import { NavContext } from "../../contexts/NavContext"
import { useMediaQuery } from '@react-hook/media-query'
import Container from "../Container"
import Grid from "../Grid"
import Image from "../Image"
import SEO from "../SEO"
import SpireText from "../SpireText"

export default () => {

    // Media query hook used to adjust completed panel width

    const isDesktop = useMediaQuery("(min-width: 800px)")

    // Animations

    const panelVariant = {
        initial: {
            width: "100vw"
        },
        completed: {
            width: isDesktop ? "50vw" : "96px",
            transition: {
                duration: 0.75,
                delay: 2,
                ease: [0.85, 0, 0.35, 1],
                type: "tween"
            },
            transitionEnd: {
                width: ""
            }
        },
    }
    
    const imageVariant = {
        initial: {
            opacity: 0,
            scale: 1.1
        },
        completed: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    // Setting initial nav state
    // This is overridden below

    const { updatePageNavScheme, updateVisibleNavScheme } = useContext(NavContext)

    useEffect(() => {
        updatePageNavScheme(true, true)
        updateVisibleNavScheme(true, true)

        setTimeout(() => {
            updatePageNavScheme(true, false)
            updateVisibleNavScheme(true, false)    
        }, 2400)

    }, [updatePageNavScheme, updateVisibleNavScheme])

    // When animation completes

    const [panelComplete, setPanelComplete] = useState(false)

    const handleAnimationComplete = () => {
        setPanelComplete(true)
    }

    return (
        <>
            <SEO
                title="Info"
            />
            <Container isFirst={true} isLast={true}>
                <Grid>
                    <div>
                        <Styled.SidePanel
                            className={panelComplete && "isComplete"}
                            initial="initial"
                            animate="completed"
                            exit="exit"
                            variants={panelVariant}
                            onAnimationComplete={() => handleAnimationComplete()}
                        >
                            <Styled.ImageWrapper
                                initial="initial"
                                animate="completed"
                                exit="exit"
                                variants={imageVariant}
                            >
                                <Image src="images/info.jpg" alt="The author" />
                            </Styled.ImageWrapper>
                        </Styled.SidePanel>
                    </div>
                    <div>
                        <Fade delay="2.7">
                            <Styled.Bio>
                                <h2>Hi.</h2>
                                <p>I’m Aaron. <SpireText>Nice to meet you</SpireText>. You’re probably here to hear about work, so let’s talk about work.</p>
                                <p>I was most recently the director of product design at <Link to="/work/vice">VICE</Link>. Our small team maintained over a dozen websites, iOS, Android, and TV apps, and a video platform serving daily content from VICE TV, VICE News, and elsewhere.</p>
                                <p>Before VICE, I worked with two startups. <Link to="/work/karma">Karma</Link> was a company making Internet access affordable and accessible through a simple hotspot controlled through its mobile apps and website. Before that, I helped redesign and rebrand <Link to="/work/cover">Cover</Link> – an iOS and Android app that made it easier to dine out.</p>
                                <p>I spent two years as a staff product designer at <Link to="/work/etsy">Etsy</Link>. I led an effort to redesign its web-based seller tools and replace its aging CSS with a living style guide.</p>
                                <p>I've also worked for Huge's product design team on projects for HBO, American Express, OkCupid, Newsweek, and Twitter.</p>
                                <p>Aside from work, I love to take photos, shake a healthy number of classic daiquiris, tend to my balcony garden, and continue to wait patiently for a successful Minnesota Timberwolves season. Sometimes I <a href="https://twitch.tv/aarshap">stream</a> very, very old video games. Good inspiration comes from experience. I try to stand often and spend time away from my desk. It helps.</p>
                                <h3>About the website</h3>
                                <p>My website is built with <a href="https://www.gatsbyjs.com/">Gatsby</a> – a React-based framework for generating static sites. As an exercise to relearn to code in 2021, I built the site from scratch (no templates!) with the help of <a href="https://www.framer.com/motion/">Framer Motion</a> and <a href="https://styled-components.com/">Styled Components</a>.</p>
                                <p>I'm proud of how it turned out. You can read about my process <Link to="/blog/on-relearning-to-code">here</Link>.</p>
                            </Styled.Bio>
                        </Fade>
                    </div>
                </Grid>
            </Container>
        </>
    )
}