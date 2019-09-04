const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    /* CREATION DES POSTS */
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const recettesListing = path.resolve(`./src/templates/recettes-listing.js`)

    const result = await graphql(
        `
        {
            allContentfulArticle {
                edges {
                    node {
                        id
                        slug
                        idCategorie {
                            titre
                            slug
                        }
                    }
                }
            }
            allContentfulCategorie {
                edges{
                    node {
                        titre
                        slug
                    }
                }
            }
        }
        `
    )

    if (result.errors) {
        console.log("error :( ")
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulArticle.edges

    posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: `/recettes/${post.node.idCategorie.slug}/${post.node.slug}`,
            component: blogPost,
            context: {
                slug: post.node.slug,
                previous,
                next,
            },
        })
    })

    // Create recette listing.
    const categories = result.data.allContentfulCategorie.edges

    categories.forEach((categorie, index) => {
        createPage({
            path: `/recettes/${categorie.node.slug}`,
            component: recettesListing,
            context: {
                slug: categorie.node.slug,
            },
        })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
