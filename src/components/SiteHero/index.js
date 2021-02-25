import React from "react"
import * as Styled from "./styled"
import { Fade } from "../Animations"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Button from "../Button"
import Card from "../Card"
import Container from "../Container"
import Grid from "../Grid"
import Linebreaker from "../Linebreaker"
import SpireText from "../SpireText"

export default () => {

    // Query for latest blog post

    const data = useStaticQuery(graphql`
    query {
        allMdx(
            limit: 1,
            sort: {fields: frontmatter___date, order: DESC},
            filter: { fileAbsolutePath: {regex: "/(blog)/"} }
            ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
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
        <Container isFirst={true} showLine={true}>
            <Grid>
                <div>
                    <Fade delay={0.5}>
                        <p><b>Aaron Shapiro</b> is a product designer, technologist, balcony gardener, amateur bartender, leftist, and your next best friend in Brooklyn, New&nbsp;York.</p>
                    </Fade>
                </div>
            </Grid>
            <Linebreaker>
                <h1>
                    <Fade><b>Basically</b>, a normal guy who makes <b>nice websites</b>.</Fade>
                </h1>
            </Linebreaker>
            <Grid alignItems="end">
                <div>
                    <Fade delay={0.5}>
                        <Styled.Blog>
                            <Card
                                slug={data.allMdx.edges[0].node.fields.slug}
                                meta={{
                                    primary: "Latest blog"
                                }}
                                title={data.allMdx.edges[0].node.frontmatter.title}
                                dek={data.allMdx.edges[0].node.frontmatter.dek}
                                cta="Read"
                            />
                        </Styled.Blog>
                    </Fade>
                </div>
                <div>
                    <Fade delay={0.5}>
                        <Styled.Bio>
                            <p>I’m a cross-functional designer with over a decade of experience designing and building tools for journalists, artists, and makers. Creative people make me <SpireText>happy</SpireText>.</p>
                            <p>I most recently led the product design team at <Link to="/work/vice">VICE</Link>. It was a lot of&nbsp;fun.</p>
                            <div>
                                <Button to="/info">More about me</Button>
                            </div>
                        </Styled.Bio>
                    </Fade>
                </div>
            </Grid>
        </Container>
    )
}