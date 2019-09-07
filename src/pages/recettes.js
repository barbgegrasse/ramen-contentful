import React from 'react'
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"


const Recettes = ({data}) => (
    <>
		<SEO title="Recettes" />
        <p className="title-site">Ramen Noob</p>
        <blockquote className="quote-logo">From ramen noob to ramen lord</blockquote>
        <section className="container">
            <div className="row space40 align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="h-title h1-title">Listing des recettes - recettes.js</h1>
                </div>
            </div>
            <div className="row">
            {data.allContentfulArticle.edges.map(document => (
                <div key={document.node.id} className="col-sm-6">
                    <h2>
                        <AniLink duration={1} to={`recettes/${document.node.idCategorie.slug}/${document.node.slug}`}>
                            {document.node.titre}
                        </AniLink>
                    </h2>
                    <div>
                        {documentToReactComponents(document.node.description.json)}
                    </div>
                </div>
            ))}
            </div>
        </section>
    </>
)

export default Recettes

export const pageQuery = graphql`
    query IndexQuery {
        allContentfulArticle {
            edges {
                node {
                    id
                    titre
                    slug
                    description{
                        json
                    }
                    idCategorie {
                        titre
                        slug
                    }
                }
            }
        }

    }
`