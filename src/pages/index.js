import React from "react"
import { graphql } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IlluHome from '../components/images/IlluHome.js'

/*
<img className="poly" src={categorie.vignette.fixed.src} srcSet={categorie.vignette.fixed.srcSet} alt="" title="" />
*/
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
							<h1 className="h-title h1-title">Les ramens qu'est ce que c'est ?</h1>
							<p className="mt-4">C'est mon blog dédié à tout ce qui concerne Ramen. <br />Je l'ai créé dans le cadre de mon expérience d'apprentissage et pour partager  ce que j'ai appris tout au long de mon parcours vers la création de mon  Ramen "parfait".  Je posterai des recettes, des expériences (succès et échecs),  des photos de ramen, des critiques de livres, de restaurants,  d'équipement et d'ingrédients, fondamentalement  tout ce que je trouve en rapport  avec les ramen qui est intéressant !</p>
						</div>
						<div className="col-12 col-md-6">
							<IlluHome />
						</div>
					</div>
				</section>
                <section className="container mt-4">
                    <div className="row space40 align-items-center ">
                        <div className="col-12">
                            <h2 className="h-title h1-title">Que trouve t-on dans un bol de ramen ?</h2>
                            <p class="mt-4">Un bon bol de ramen se compose de 4 éléments clés. Ex non qui sint exercitation in consequat nostrud dolor amet consectetur culpa labore sit duis. Est eiusmod do ad officia labore ea ullamco elit ullamco do. Cupidatat elit in adipisicing exercitation cupidatat. Id cupidatat qui labore aute dolore duis culpa. Magna laborum est laborum velit labore occaecat excepteur ullamco culpa dolor sunt sint occaecat. Id in esse qui esse est elit quis deserunt ea ad ea sunt. Reprehenderit elit nisi est enim duis culpa sint qui et cillum esse commodo.</p>

                            <p>Do occaecat amet sint duis voluptate sit ullamco occaecat eiusmod commodo pariatur laboris fugiat sit. Consequat elit ex irure id magna nisi eiusmod non esse non reprehenderit dolor culpa anim. Elit dolore minim pariatur reprehenderit duis ad magna tempor ut aliqua qui.</p>
                        </div>
                    </div>
                    <div className="row space40 align-items-center mt-4">
                        {categories.map(categorie => (
                            <div className="col-sm-3">
                                <BackgroundImage
                                    Tag="section"
                                    className="clip-polygon"
                                    fluid={categorie.vignette.fixed}
                                    backgroundColor={`#040e18`}
                                >
                                    <h3 class="h-title h1-title clr-white">
                                        <AniLink className="text-white"  paintDrip to={`recettes/${categorie.slug}`} hex="#ee4749" duration={1}>
                                            {categorie.titre}
                                        </AniLink>
                                    </h3>
                                
                                </BackgroundImage>
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
            vignette {
                fixed(width: 375) {
                    src
                    srcSet
                    height
                }
                fluid(maxWidth: 10) {
                    sizes
                    src
                    srcSet
                    srcSetWebp
                }
            }
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
