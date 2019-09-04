import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class RecetteTemplate extends React.Component {
    render() {
        const categorie = this.props.data.contentfulCategorie
        const articles = this.props.data.allContentfulArticle.edges
        const siteTitle = this.props.data.site.siteMetadata.title
        console.log(articles);

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={categorie.titre}
                    description={categorie.slug || categorie.excerpt}
                />
                <section className="container">
                    <header>
                        <h1 className="h-title">
                            {categorie.titre}
                        </h1>
                        <h2>Retrouvez toutes les recettes de {categorie.titre}</h2>
                        <div className="row">
                            {articles.map( article => (
                                <article className="col-12 col-sm-4">
                                    <h2>{article.node.titre}</h2>
                                </article>
                            ))}
                        </div>
                    </header>
                </section>
            </Layout>
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
                idCategorie {
                    titre
                }
                slug
                }
            }
        }

    }
`