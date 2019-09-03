import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulArticle.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        Incididunt exercitation enim aliqua consequat fugiat velit ullamco laboris ullamco proident pariatur exercitation consequat cupidatat. Laboris esse nulla laborum elit reprehenderit esse voluptate pariatur consectetur. Ex aliqua sit ut fugiat sit ad duis Lorem aute. Excepteur duis ex nulla non. Adipisicing ea cupidatat consequat veniam laboris occaecat ex voluptate dolor.

Amet aute deserunt consequat cillum duis ipsum magna esse in. Commodo eiusmod non dolore aute in exercitation esse reprehenderit sunt exercitation sint Lorem qui. Cupidatat sunt ut amet ut amet ex incididunt enim labore amet deserunt. Veniam amet dolor commodo occaecat do labore eiusmod. Eiusmod do eiusmod amet eiusmod magna exercitation non est proident anim. Occaecat ullamco laborum irure elit in tempor consequat. Excepteur sunt non dolore sint mollit proident occaecat ullamco.

Nulla qui nisi cillum labore magna mollit aliqua quis sint sit reprehenderit. Tempor id cillum deserunt nulla occaecat pariatur proident officia cupidatat nulla tempor. Incididunt nisi irure ex laborum amet Lorem. Tempor duis nulla pariatur ullamco aliqua mollit dolore enim ea et esse mollit aliquip nostrud. Anim incididunt consectetur excepteur nulla deserunt officia sit ullamco laborum elit qui. Est commodo excepteur sunt nostrud sit id. Sit aliquip nisi laboris anim veniam veniam incididunt irure occaecat nulla commodo.

Nisi ullamco nulla amet ut quis. Commodo deserunt magna commodo Lorem. Eu adipisicing amet commodo Lorem excepteur nostrud ad. Reprehenderit culpa magna consequat amet proident. Incididunt fugiat labore veniam esse exercitation ea aliqua.
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
