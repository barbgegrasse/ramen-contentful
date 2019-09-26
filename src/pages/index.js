import React from "react"

import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import SEO from "../components/seo"

import IlluHome from '../components/images/IlluHome.js'
import RamenNoobTxt from '../components/images/RamenNoobTxt.js'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


class IndexPage extends React.Component {


    componentDidMount(){
        const logo = document.querySelectorAll("#logo-txt path");
        console.log(logo);
        for (let i =0; i<logo.length;i++){
            console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
        }
    }

 	render() {
         
/*
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
                            <p className="mt-4">Un bon bol de ramen se compose de 4 éléments clés. Ex non qui sint exercitation in consequat nostrud dolor amet consectetur culpa labore sit duis. Est eiusmod do ad officia labore ea ullamco elit ullamco do. Cupidatat elit in adipisicing exercitation cupidatat. Id cupidatat qui labore aute dolore duis culpa. Magna laborum est laborum velit labore occaecat excepteur ullamco culpa dolor sunt sint occaecat. Id in esse qui esse est elit quis deserunt ea ad ea sunt. Reprehenderit elit nisi est enim duis culpa sint qui et cillum esse commodo.</p>
                        </div>
                    </div>
                    <div className="row space40 align-items-center mt-4">
                        {categories.map(categorie => (
                            <article key={categorie.id} className="col-sm-3">
                                <BackgroundImage
                                    Tag="section"
                                    className="clip-polygon"
                                    fluid={categorie.vignette.fluid}
                                    backgroundColor={`#040e18`}
                                >
                                    <h3 className="h-title h1-title text-white">
                                        <Link to={`/recettes/${categorie.slug}`} >{categorie.titre}</Link>
                                    </h3>
                                </BackgroundImage>
                            </article>
                        ))}
                    </div>
                </section>


 */       
		const { data } = this.props
		//const siteTitle = data.site.siteMetadata.title
        const categories = data.allContentfulCategorie.nodes
		return(
            <>
                <SEO title="Home" />
                <div className="master-container">
                    <div className="block-logo">
                        <Fade>
                            <RamenNoobTxt />
                        </Fade>
                        <Zoom delay={3500} clear>
                            <blockquote className="quote-logo">From ramen noob to ramen lord</blockquote>
                        </Zoom>
                    </div>
                </div>
                <Fade delay={4500}>
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
                                <p className="mt-4">Un bon bol de ramen se compose de 4 éléments clés. Ex non qui sint exercitation in consequat nostrud dolor amet consectetur culpa labore sit duis. Est eiusmod do ad officia labore ea ullamco elit ullamco do. Cupidatat elit in adipisicing exercitation cupidatat. Id cupidatat qui labore aute dolore duis culpa. Magna laborum est laborum velit labore occaecat excepteur ullamco culpa dolor sunt sint occaecat. Id in esse qui esse est elit quis deserunt ea ad ea sunt. Reprehenderit elit nisi est enim duis culpa sint qui et cillum esse commodo.</p>
                            </div>
                        </div>
                        <div className="row space40 align-items-center mt-4">
                            {categories.map(categorie => (
                                <article key={categorie.id} className="col-sm-3">
                                    <BackgroundImage
                                        Tag="section"
                                        className="clip-polygon"
                                        fluid={categorie.vignette.fluid}
                                        backgroundColor={`#040e18`}
                                    >
                                        <h3 className="h-title h1-title text-white">
                                            <Link to={`/recettes/${categorie.slug}`} >{categorie.titre}</Link>
                                        </h3>
                                    </BackgroundImage>
                                </article>
                            ))}
                        </div>
                    </section>
                </Fade>
            </>
		)
    }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allContentfulCategorie {
        nodes {
            id
            titre
            slug
            vignette {
                fixed(width: 375) {
                    src
                    srcSet
                    height
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
