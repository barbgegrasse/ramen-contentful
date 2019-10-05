import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

class RecetteTemplate extends React.Component {
    render() {
        const categorie = this.props.data.contentfulCategorie
        const articles = this.props.data.allContentfulArticle.edges

        return (
            <>
                <SEO
                    title={`Les délicieuses recettes de ${categorie.titre}`}
                    description={categorie.slug || categorie.excerpt}
                />
                <section className="container">
                    <header>
                        <h1 className="h-title h1-title">
                            {categorie.titre}
                        </h1>
                        <div className="row">
                            {articles.map( article => (
                                <article key={article.node.id} className="col-12 col-sm-6 item-listing relative">
                                    <div className="position-relative">
                                        <BackgroundImage
                                            Tag="section"
                                            className="vignette-listing"
                                            fluid={article.node.image.fluid}
                                            backgroundColor={`#040e18`}
                                        />
                                        <Link to={`recettes/${article.node.idCategorie.slug}/${article.node.slug}`}>
                                            {article.node.titre}
                                        </Link>
                                        <p>{article.node.descriptionCourte}</p>
                                        <p>{article.node.tempsDePreparation}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </header>
                </section>
            </>
        )
    }
}

export default RecetteTemplate

export const pageQuery = graphql`
    query BlogcategorieBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        contentfulCategorie(slug: {eq: $slug}) {
            titre
            slug
        }
        allContentfulArticle(filter: {idCategorie: {slug: {eq: $slug}}}) {
            edges {
                node {
                    titre
                    tempsDePreparation,
                    descriptionCourte
                    idCategorie {
                        titre
                        slug
                    }
                    slug
                    image{
                        fluid {
                            sizes
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            base64
                        }
                    }
                }
            }
        }

    }
`