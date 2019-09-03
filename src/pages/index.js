import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IlluHome from '../components/images/IlluHome.js'


class BlogIndex extends React.Component {
 	render() {
		const { data } = this.props
		const siteTitle = data.site.siteMetadata.title
		const posts = data.allContentfulArticle.edges
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
			</Layout >
		)
    
    /*
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />

        {posts.map(({ node }) => {
          console.log(node);
          const title = node.titre || node.slug
          return (
            <article key={node.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
              <section>
                  lorem ipsum
              </section>
            </article>
            
          )
       
        })}
      </Layout>
    )
    */
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
