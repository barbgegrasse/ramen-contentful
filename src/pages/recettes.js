import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import SEO from "../components/seo"

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
                                    image {
                                        sizes(quality: 100) {
                                            ...GatsbyContentfulSizes_withWebp
                                        }
                                        fluid {
                                            sizes
                                            src
                                            srcSet
                                            srcSetWebp
                                        }
                                    }
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

                            <section className="container">
                                <div className="row space40 align-items-center">
                                    <div className="col-12">
                                        <h1 className="h-title h1-title">Toutes les recettes pour créer son bol de ramen</h1>
                                    </div>
                                    <div className="col-12">
                                        <p>Ipsum amet veniam voluptate incididunt. Elit ullamco magna esse anim dolor exercitation ipsum duis. Esse proident nostrud laborum culpa quis aute nisi do consequat commodo adipisicing. Commodo velit eiusmod enim eu id exercitation tempor labore amet et laboris esse tempor.</p>
                                        <p>Exercitation dolore officia pariatur magna amet anim laborum irure Lorem quis nostrud pariatur ad veniam. Et exercitation proident consectetur esse qui eu laboris proident sunt do ullamco. Sit sunt veniam consequat exercitation minim reprehenderit tempor ullamco. Enim cillum duis pariatur sint nostrud qui labore eiusmod sit. Id officia culpa eiusmod nisi sunt dolore aute do velit duis nostrud qui irure. Elit occaecat sunt aliquip officia elit consectetur adipisicing incididunt eiusmod culpa do Lorem fugiat. Voluptate non incididunt eu quis ex tempor eiusmod qui laboris dolore laboris.</p>
                                    </div>
                                </div>

                                <div className="row">
                                {data.allContentfulArticle.edges.map(document => (
                                    <article key={document.node.id} className="col-12 col-sm-6 item-listing relative">
                                        <h2>
                                            <Link to={`recettes/${document.node.idCategorie.slug}/${document.node.slug}`}>
                                                {document.node.titre}
                                            </Link>
                                        </h2>
                                        <div className="position-relative">
                                            <BackgroundImage
                                                Tag="section"
                                                className="vignette-listing"
                                                fluid={document.node.image.fluid}
                                                backgroundColor={`#040e18`}
                                            />
                                            <Link to={`recettes/${document.node.idCategorie.slug}`} className="categorie-article">{document.node.idCategorie.titre}</Link>
                                            <p>{document.node.descriptionCourte}</p>
                                        </div>
                                    </article>
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