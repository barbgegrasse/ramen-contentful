import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IlluHome from '../components/images/IlluHome.js'


class BlogIndex extends React.Component {
 	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
        const categories = data.allContentfulCategorie.nodes
		return(
			<Layout>
				<SEO title="Home" />
				<p className="title-site">Ramen Noob</p>
				<blockquote className="quote-logo">From ramen noob to ramen lord</blockquote>
				<section className="container">
					<div className="row space40 align-items-center">
						<div className="col-12 col-md-6">
							<h1 className="h-title h1-title">Comment faire des ramens ?</h1>
							<p className="mt-4">C'est mon blog dédié à tout ce qui concerne Ramen. <br />Je l'ai créé dans le cadre de mon expérience d'apprentissage et pour partager  ce que j'ai appris tout au long de mon parcours vers la création de mon  Ramen "parfait".  Je posterai des recettes, des expériences (succès et échecs),  des photos de ramen, des critiques de livres, de restaurants,  d'équipement et d'ingrédients, fondamentalement  tout ce que je trouve en rapport  avec les ramen qui est intéressant !</p>
						</div>
						<div className="col-12 col-md-6">
							<IlluHome />
						</div>
					</div>
				</section>
                <section className="container">
                    <div className="row space40 align-items-center">
                        {categories.map(categorie => (
                            <div className="col-sm-6">
                                {console.log(document)}
                                <h2>
                                    <Link to={`recettes/${categorie.slug}`}>{categorie.titre}</Link>
                                </h2>
                            </div>
                        ))}
                    </div>
                </section>
			</Layout >
		)
    }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulCategorie {
        nodes {
            titre
            slug
        }
    }

    allContentfulArticle {
      edges {
        node {
          slug
          titre
          description {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`
