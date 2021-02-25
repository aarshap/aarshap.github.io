import React, { useContext, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { NavContext } from "../../contexts/NavContext"
import { Fade } from "../Animations"
import { useMediaQuery } from '@react-hook/media-query'
import Container from "../Container"
import Card from "../Card"
import Grid from "../Grid"
import Linebreaker from "../Linebreaker"
import SEO from "../SEO"
import SiteHero from "../SiteHero"
import WorkCard from "../WorkCard"

export default () => {

    // Setting nav state

    const { updatePageNavScheme, updateVisibleNavScheme } = useContext(NavContext)

    useEffect(() => {
        updatePageNavScheme(false, false)
        updateVisibleNavScheme(false, false)
    }, [updatePageNavScheme, updateVisibleNavScheme])

    // Media query hook used to adjust copy

    const isDesktop = useMediaQuery("(min-width: 800px)")

    // Data

    const data = useStaticQuery(graphql`
    query {
        work: allMdx(
            sort: { fields: [frontmatter___key], order: ASC },
            filter: { fileAbsolutePath: {regex: "/(work)/"  }}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        dek
                        dateStart
                        dateEnd
                        cardImage
                        cardImagePosition
                        key
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        blog: allMdx(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex: "/(blog)/"} }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY")
                        category
                        dek
                    }
                    fields {
                        slug
                    }
                }
            }
        }
        photography: allMdx(
            sort: { fields: [frontmatter___date], order: DESC },
            filter: { fileAbsolutePath: {regex: "/(photography)/"  }}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "YYYY")
                        dek
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`)

    return (
        <>
            <SEO
                title="Home"
            />
            <SiteHero />
            <Container isLast={true} showLine={true}>
                {data.work.edges.map(({ node }) => (
                    <WorkCard
                        key={node.id}
                        title={node.frontmatter.title}
                        image={node.frontmatter.cardImage}
                        imageAlt={`${node.frontmatter.title} image`}
                        imagePosition={node.frontmatter.cardImagePosition}
                        dateStart={node.frontmatter.dateStart}
                        dateEnd={node.frontmatter.dateEnd}
                        description={node.frontmatter.dek}
                        slug={node.fields.slug}
                        cta="Read"
                    />
                ))}
                <Linebreaker>
                    <h2>
                        <Fade>Writing.</Fade>
                    </h2>
                </Linebreaker>
                <Grid>
                    <div>
                        {data.blog.edges.map(({ node }) => (
                            <Card
                                key={node.id}
                                meta={{
                                    primary: node.frontmatter.date,
                                    secondary: node.frontmatter.category
                                }}
                                slug={node.fields.slug}
                                title={node.frontmatter.title}
                                dek={node.frontmatter.dek}
                                category={node.frontmatter.category}
                                cta="Read"
                            />
                        ))}
                    </div>
                </Grid>
                <Linebreaker>
                    <h2>
                        <Fade>
                            {isDesktop ? "Photography." : "Photos."}
                        </Fade>
                    </h2>
                </Linebreaker>
                <Grid>
                    <div>
                        {data.photography.edges.map(({ node }) => (
                            <Card
                                key={node.id}
                                meta={{
                                    primary: node.frontmatter.date
                                }}
                                slug={node.fields.slug}
                                title={node.frontmatter.title}
                                dek={node.frontmatter.dek}
                                cta="Look"
                            />
                        ))}
                    </div>
                </Grid>
            </Container>
        </>
    )
}
