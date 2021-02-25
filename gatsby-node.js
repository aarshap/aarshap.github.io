// Generate slugs for all MDX files

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`, trailingSlash: false })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// Generate pages for blog posts

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Queries

    const result = await graphql(`
        query {
            blog: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(blog)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                    previous {
                        frontmatter {
                            title
                            dek
                        }
                        fields {
                            slug
                        }
                    }
                    next {
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
            photography: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(photography)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            work: allMdx(
                sort: { 
                    fields: [frontmatter___date],
                    order: DESC 
                },
                filter: { fileAbsolutePath: {regex: "/(work)/"} }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    result.data.blog.edges.forEach(({ node, next, previous }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                slug: node.fields.slug,
                next,
                previous
            },
        })
    })

    result.data.photography.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/photography.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

    result.data.work.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/work.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })

}


//     // Template variables

//     const templates = {
//         blog: path.resolve(`./src/templates/blog.js`),
//         photography: path.resolve(`./src/templates/photography.js`),
//         work: path.resolve(`./src/templates/work.js`)
//     }

//     // Generate pages based on their directory

//     result.data.allMdx.edges.forEach(({ node, next, previous }) => {

//         // Grabbing the part of the slug used to select a template (i.e. photography)

//         let slugKey = node.fields.slug.split("/")[1]

//         // Matches slugKey to a template and falls back if necessary

//         let template = templates[slugKey] || templates["blog"]

//         createPage({
//             path: node.fields.slug,
//             component: template,
//             context: {
//                 slug: node.fields.slug,
//                 next,
//                 previous
//           },
//         })
//     })
    
// }
  