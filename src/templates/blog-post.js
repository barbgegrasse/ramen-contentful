import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"



class BlogPostTemplate extends React.Component {
  render() {
	const post = this.props.data.contentfulArticle
	const siteTitle = this.props.data.site.siteMetadata.title
	const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.description || post.excerpt}
        />
        <article>
          <header>
            <h1>
              {post.title}
            </h1>
			{documentToReactComponents(post.description.json)}
          </header>
          <footer>
     
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulArticle(slug: { eq: $slug }) {
        titre
		image{
			fluid{
				src
			}
		}
        description{
            json
        }
    }
  }
`