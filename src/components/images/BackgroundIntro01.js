import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
/*

*/
        /*
        placeholderImage: file(relativePath: { eq: "ramen-women.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 685) {
                ...GatsbyImageSharpFluid
                }
            }
        }
        */
const BackgroundIntro01 = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "ramen-women.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
    }
    `)

    return <BackgroundImage id="" Tag="div" fluid={data.placeholderImage.childImageSharp.fluid}  backgroundColor={`#000`} > </BackgroundImage>
}

export default BackgroundIntro01