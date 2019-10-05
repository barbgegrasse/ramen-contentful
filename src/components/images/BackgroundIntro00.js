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
const BackgroundIntro00 = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "ramen-home2.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 685) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    return <BackgroundImage id="wrap" Tag="div" className="wrap addbg" fluid={data.placeholderImage.childImageSharp.fluid}  backgroundColor={`#000`} > </BackgroundImage>
}

export default BackgroundIntro00