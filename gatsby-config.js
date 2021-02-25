module.exports = {
    siteMetadata: {
        title: `Aaron Shapiro`,
        author: `Aaron Shapiro`,
        description: `Aaron Shapiro is a product designer living in Brooklyn, New York.`,
        canonicalUrl: `https://aaron.mn/`,
        contact: {
            email: `aaron@aaron.mn`,
            github: `https://github.com/aarshap`,
            instagram: `https://instagram.com/aaronshapiro`,
            linkedin: `https://linkedin.com/in/aaron-shapiro-976922109/`,
            twitch: `https://twitch.tv/aarshap`,
            twitter: `https://twitter.com/aaronshapiro`
        }
        
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-heading-slug`
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                typekit: {
                    id: `tee7piv`
                }
            }
        },
        `gatsby-plugin-mdx-embed`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-twitter`,
        `gatsby-transformer-sharp`
    ],
}