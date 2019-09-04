import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
import Img from 'gatsby-image'
import Layout from '../components/layout/layout'


const Recettes = ({data}) => (
    <Layout>
		<SEO title="Recettes" />
				{console.log(data)}
        <p className="title-site">Ramen Noob</p>
        <blockquote className="quote-logo">From ramen noob to ramen lord</blockquote>
        <section className="container">
            <div className="row space40 align-items-center">
                <div className="col-12 col-md-6">
                    <h1 className="h-title h1-title">Listing des recettes</h1>
                </div>
            </div>
            <div className="row">
            {data.allContentfulArticle.edges.map(document => (
                <div className="col-sm-6">
                    {console.log(document)}
                    <h2>
                        <Link to={`recettes/${document.node.idCategorie.slug}/${document.node.slug}`}>{document.node.titre}</Link>
                    </h2>
                    <p>{documentToReactComponents(document.node.description.json)}</p>
                </div>
            ))}
            </div>
        </section>
    </Layout>
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