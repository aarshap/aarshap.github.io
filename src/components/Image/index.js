import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

export default ({ src, backgroundColor, hasShadow, ...rest }) => {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(
                filter: { internal: { mediaType: { regex: "/image/" } } }
            ) {
                edges {
                    node {
                        relativePath
                        extension
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 2400, quality: 90) {
                                ...GatsbyImageSharpFluid_noBase64
                            }
                        }
                    }
                }
            }
        }
    `)

    const match = useMemo(
        () => data.images.edges.find(({ node }) => src === node.relativePath),
        [data, src]
    )

    if (!match) return null

    const { node: { childImageSharp } = {} } = match

    return (
        <Img fluid={childImageSharp.fluid} backgroundColor={backgroundColor} {...rest} />
    )

}