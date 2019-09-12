import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import SEO from "../components/seo"
/*
class Recettes extends Component{
    constructor{
        this.state
    }

    componentWillMount() {
        
    }
}
*/

//const Recettes = ({data}) => (
class Recettes extends Component {
    render(){
        return(
            <>
                <StaticQuery
                    query={graphql`
                      query IndexQuery {
                        allContentfulArticle (sort: {order: ASC, fields: idCategorie___slug}) {
                            edges {
                                node {
                                    id
                                    titre
                                    slug
                                    descriptionCourte
                                    idCategorie {
                                        titre
                                        slug
                                    }
                                }
                            }
                        }
                        allContentfulCategorie {
                            edges {
                                node {
                                    titre
                                    slug
                                }
                            }
                        }
                      }
                    `}
                    render={data => (
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
                                <div className="row filters-category">
                                    <div className="col-3">
                                        {data.allContentfulCategorie.edges.map(categorie => (
                                            <Link to={`recettes/${categorie.node.slug}`}>
                                                {categorie.node.titre}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="row">
                                {data.allContentfulArticle.edges.map(document => (
                                    <div key={document.node.id} className="col-sm-6">
                                        <h2>
                                            <Link to={`recettes/${document.node.idCategorie.slug}/${document.node.slug}`}>
                                                {document.node.titre}
                                            </Link>
                                        </h2>
                                        <div>
                                            <p className="categorie-article">{document.node.idCategorie.titre}</p>
                                            {document.node.descriptionCourte}
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </section>
                        </>
                     )}
                />
            </>
        )
    }
}

export default Recettes
/*
export const pageQuery = graphql`
    query IndexQuery {
        allContentfulArticle (sort: {order: ASC, fields: idCategorie___slug}) {
            edges {
                node {
                    id
                    titre
                    slug
                    descriptionCourte
                    idCategorie {
                        titre
                        slug
                    }
                }
            }
        }
    }
`
*/