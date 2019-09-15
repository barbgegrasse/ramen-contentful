import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import BackgroundImage from 'gatsby-background-image'
//import lazyCss from "../vendor/lazycss"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.contentfulArticle
        //const siteTitle = this.props.data.site.siteMetadata.title
        //const { previous, next } = this.props.pageContext
        const Text = ({ children }) => <p className="align-center">{children}</p>
        const options = {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
                [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                    const fields = node.data.target.fields;
                    console.log(node)
                    if (typeof node.data.target.sys.contentType.sys.id !== 'undefined') {
                        switch (node.data.target.sys.contentType.sys.id) {
                            case "sectionImageText":
                                return <div className="row">
                                    <div className="col-6">
                                        <img className="illu-section" src={fields.image['fr-FR'].fields.file['fr-FR'].url+'?w=700'} />
                                    </div>
                                    <div className="col-6">
                                        {documentToReactComponents(fields.texteADroite['fr-FR'])}
                                    </div>
                                </div>
                            default:
                                return <div>Fallback Element</div>
                        }
                    }
                },
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                    return <div className="image-container"><img src={node.data.target.fields.file['fr-FR'].url} alt={node.data.target.fields.title} title={node.data.target.fields.title} /></div>
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                    return <h3 className="h-title h1-title">{node.content[0].value}</h3>
                }
            },
            renderText: text => text.replace('!', '?')
        }

        return (
            <>
                <SEO
                title={post.titre}
                />
                <div className="hero_container">
                    <BackgroundImage
                        Tag="section"
                        className="background-hero"
                        fluid={post.banniere.fluid}
                        backgroundColor={`#040e18`}
                    >
                    </BackgroundImage>
                </div>
                <h1>
                    {post.titre}
                </h1>
                <div id="test"></div>
                <div className="container detail-recette">
                    <div className="row">
                        <div className="col-5 presentation-recette">
                            <h1 className="titre-recette">{post.titre}</h1>
                            <h2 className="sous-titre-recette">Ingrédients</h2>
                            {documentToReactComponents(post.ingredients.json)}
                            <p><span className="bold">Temps de préparation</span> : {post.tempsDePreparation}</p>
                        </div>
                        <div className="col-7">
                            <div className="main-citation">
                                <blockquote className="guillemets">
                                    {post.citation.citation}
                                </blockquote>
                            </div>
                        </div>
                        <div className="row description-longue">
                            <div className="col-12">
                                <h2>Réalisation de la recette</h2>
                                {documentToReactComponents(post.description.json, options)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        contentfulArticle(slug: { eq: $slug }) {
            titre
            tempsDePreparation
            banniere {
                fluid(quality: 100, maxWidth: 1610, maxHeight: 620) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                }
            }
            description{
                json
            }
            ingredients{
                json
            }
            citation{
                citation
            }
            related {
                titre
                descriptionCourte
            }
        }
    }
`