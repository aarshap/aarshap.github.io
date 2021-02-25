import React, { useContext, useEffect } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { NavContext } from "../contexts/NavContext"
import ArticleBody from "../components/ArticleBody"
import ArticleIntro from "../components/ArticleIntro"
import ArticleMedia from "../components/ArticleMedia"
import ArticleRecirc from "../components/ArticleRecirc"
import Grid from "../components/Grid"
import Image from "../components/Image"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {

    // Setting nav state

    const { updatePageNavScheme, updateVisibleNavScheme } = useContext(NavContext)

    useEffect(() => {
        updatePageNavScheme(false, false)
        updateVisibleNavScheme(false, false)
    }, [updatePageNavScheme, updateVisibleNavScheme])

    // Components usable in MDX

    const includedComponents = { Link, Image, ArticleMedia, Grid }

    // Post data

    const post = data.mdx

    // Page context from gatsby-node.js used for next and previous links

    const { next, previous } = pageContext

    const previousProps = {}
    const nextProps = {}

    if (previous) {
        previousProps.show = true
        previousProps.slug = previous.fields.slug
        previousProps.title = previous.frontmatter.title
        previousProps.dek = previous.frontmatter.dek
    }

    if (next) {
        nextProps.show = true
        nextProps.slug = next.fields.slug
        nextProps.title = next.frontmatter.title
        nextProps.dek = next.frontmatter.dek
    }

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.dek}
            />
            <ArticleIntro
                date={post.frontmatter.date}
                category={post.frontmatter.category}
                title={post.frontmatter.title}
                dek={post.frontmatter.dek}
            />
            <ArticleBody>
                <MDXProvider components={includedComponents}>
                    <MDXRenderer>
                        {post.body}
                    </MDXRenderer>
                </MDXProvider>
            </ArticleBody>
            <ArticleRecirc
                previous={previousProps}
                next={nextProps}
            />
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                dek
                date(formatString: "MMMM Do, YYYY")
                category
            }
        }
    }
`