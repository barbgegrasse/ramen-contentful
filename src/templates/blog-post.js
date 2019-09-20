import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import BackgroundImage from 'gatsby-background-image'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
//import lazyCss from "../vendor/lazycss"
import SEO from "../components/seo"
import ArticleListing from "../components/recettes/ArticleListing"
import FormContact from "../components/FormContact"

class BlogPostTemplate extends React.Component {
    display_related() {
        console.log(this.props.data.contentfulArticle.related)
        /*
        const RelatedArticles = this.props.data.contentfulArticle.related.map(
            Article =>
                <ArticleListing titre={Article.titre}  />
        )
        */
        const RelatedArticles = this.props.data.contentfulArticle.related.map(function (article, i) {
            return <ArticleListing sizes={article.image.sizes} titre={article.titre} />
        })

        return RelatedArticles
     }

    render() {
        const post = this.props.data.contentfulArticle
        //console.log(post)
        //const siteTitle = this.props.data.site.siteMetadata.title
        //const { previous, next } = this.props.pageContext
        const Text = ({ children }) => <Fade><p>{children}</p></Fade>
        const options = {
            renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
                [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                    const fields = node.data.target.fields;
                    if (typeof node.data.target.sys.contentType.sys.id !== 'undefined') {
                        switch (node.data.target.sys.contentType.sys.id) {
                            case "sectionImageText":    
                                //console.log(fields.texteADroite['fr-FR'].content[0].data.target.fields.titre['fr-FR'])
                                return <div className="row section-image-text">
                                    <div className="col-6 col-illu">
                                        <img className="illu-section" src={fields.image['fr-FR'].fields.file['fr-FR'].url+'?w=700'} />
                                    </div>
                                    <div className="col-6 col-text">
                                        {documentToReactComponents(fields.texteADroite['fr-FR'], options)}
                                    </div>
                                </div>
                            default:
                                return <div>Fallback Element</div>
                        }
                    }
                },
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                    return <Fade clear><div className="image-container"><img src={node.data.target.fields.file['fr-FR'].url} alt={node.data.target.fields.title} title={node.data.target.fields.title} /></div></Fade>
                },
                [BLOCKS.HEADING_2]: (node, children) => {
                    return <h2 className="h-title h2-title">{node.content[0].value}</h2>
                },
                [BLOCKS.HEADING_3]: (node, children) => {
                    return <Fade><h3 className="h-title h3-title"><span className="span-title">{node.content[0].value}</span></h3></Fade>
                },
                [BLOCKS.HEADING_4]: (node, children) => {
                    return <h4 className="h-title h4-title">{node.content[0].value}</h4>
                },
                [BLOCKS.HEADING_5]: (node, children) => {
                    return <h5 className="h-title h5-title">{node.content[0].value}</h5>
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
                <section className="container detail-recette">
                    <div className="row">
                        <Zoom delay={500} clear>
                            <div className="col-5 presentation-recette">
                                <h1 className="titre-recette">{post.titre}</h1>
                                <h2 className="sous-titre-recette">Ingrédients</h2>
                                {documentToReactComponents(post.ingredients.json)}
                                <p><span className="bold">Temps de préparation</span> : {post.tempsDePreparation}</p>
                            </div>
                        </Zoom>
                        <Zoom delay={700} clear>
                            <div className="col-7">
                                <div className="main-citation">
                                    <blockquote className="guillemets">
                                        {post.citation.citation}
                                    </blockquote>
                                </div>
                            </div>
                        </Zoom>
                        <div className="row description-longue">
                            <div className="col-12">
                                {documentToReactComponents(post.description.json, options)}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container related-articles">
                    <div className="row related">
                        {this.display_related()}
                    </div>
                </section>
                <section className="container related-articles">
                    <div className="row related">
                        <div className="col-12">
                            <FormContact />
                        </div>
                    </div>
                </section>
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
                image {
                    sizes(quality: 100 ) {
                        ...GatsbyContentfulSizes_withWebp
                    }
                    fluid {
                        sizes
                        src
                        srcSet
                        srcSetWebp
                    }
                }
            }
        }
    }
`