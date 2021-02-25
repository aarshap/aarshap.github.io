import React, { useEffect } from "react"
import * as Styled from "./styled"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useMediaQuery } from '@react-hook/media-query'

const wrapperVariant = {
    hidden: {
        y: "-100%",
        transition: {
            duration: 0.5,
            ease: [0.85, 0, 0.35, 1],
            type: "tween"
        }
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.85, 0, 0.35, 1],
            type: "tween",
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
}

const childrenVariant = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

export default (props) => {

    // Media query hook used to adjust closing behavior

    const isDesktop = useMediaQuery("(min-width: 800px)")

    useEffect(() => {
    
        // Handles clicks inside and outside of the parent Nav wrapper element

        const handleClick = (event) => {
            if (props.navRef.current.contains(event.target)) {
                return
            }
            props.hideMenu(true)
        }
        
        // Handles scroll events

        const handleScroll = () => {
            if (isDesktop) {
                props.hideMenu(true)
            }
        }

        // Event listener for scrolling, only active on desktop

        document.addEventListener("scroll", handleScroll)

        // Event listener for clicks

        document.addEventListener("mousedown", handleClick)

        return () => {

            // Removes event listeners when menu is closed

            document.removeEventListener("scroll", handleScroll)
            document.removeEventListener("mousedown", handleClick)

        }
    }, [props, isDesktop])

    // Data

    const data = useStaticQuery(graphql`
        query {
            allMdx(
                sort: {fields: frontmatter___key, order: ASC},
                filter: { fileAbsolutePath: {regex: "/(work)/"} }
                ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            tagline
                            dateStart
                            dateEnd
                            key
                        }
                        fields {
                            slug
                        }
                    }
                }
            }            
        }
    `)

    // Mobile close button reveal animation

    const RevealButton = {
        hidden: {
            opacity: 0,
            rotate: 0
        },
        visible: {
            opacity: 1,
            rotate: 90,
            transition: {
                delay: 1
            }
        }
    }

    return (
        <Styled.Wrapper
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={wrapperVariant}
        >
            <Styled.CloseButton onClick={() => props.hideMenu()}>
                <motion.svg initial="hidden" animate="visible" variants={RevealButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.858.636l1.778 1.778L2.414 16.636.636 14.858 14.858.636z"/><path d="M16.636 14.858l-1.778 1.778L.636 2.414 2.414.636l14.222 14.222z"/>/></motion.svg>
            </Styled.CloseButton>
            {data.allMdx.edges.map(({ node }) => (
                <motion.div key={node.id} variants={childrenVariant}>
                    <Styled.Date>{node.frontmatter.dateStart === node.frontmatter.dateEnd ? node.frontmatter.dateEnd : `${node.frontmatter.dateStart} - ${node.frontmatter.dateEnd}`}</Styled.Date>
                    <Styled.Title>
                        <Link
                            className="inverted"
                            onClick={() => props.hideMenu()}
                            to={node.fields.slug}
                        >
                            {node.frontmatter.title}
                        </Link>
                    </Styled.Title>
                    <Styled.Tagline>{node.frontmatter.tagline}</Styled.Tagline>
                </motion.div>
            ))}
        </Styled.Wrapper>
    )
}