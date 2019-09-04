import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class RecetteTemplate extends React.Component {
    render() {
        const categorie = this.props.data.contentfulCategorie
        const siteTitle = this.props.data.site.siteMetadata.title
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={categorie.titre}
                    description={categorie.slug || categorie.excerpt}
                />
                <article>
                    <header>
                        <h1>
                            {categorie.titre}
                        </h1>
                    </header>

                    <footer>
                        footer
                    </footer>
                </article>
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
        contentfulCategorie(slug: { eq: $slug }) {
            titre
            slug
        }
    }
`