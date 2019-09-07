import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BackgroundImage from 'gatsby-background-image'
//import lazyCss from "../vendor/lazycss"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
    render() {

        const post = this.props.data.contentfulArticle
        const siteTitle = this.props.data.site.siteMetadata.title
        //const { previous, next } = this.props.pageContext
        //console.log(post)

        return (
            <>
                <SEO
                title={post.titre}
                />
                <div>
                    <div className="hero_container">
                        <BackgroundImage
                            Tag="section"
                            className="background-hero"
                            fluid={post.banniere.fluid}
                            backgroundColor={`#040e18`}
                        >
                            
                        </BackgroundImage>
                    </div>
   
                    <h1>
                        {post.titre}
                    </h1>

                    <div className="container detail-recette">
                        <div className="row">
                            <div className="col-4 presentation-recette">
                                <h1 className="text-primary">{post.titre}</h1>
                                <span className="bold">Ingrédients</span>
                                <ul>
                                    <li>1 cup & 2 tbsp white miso</li>
                                    <li>1/2 cup sea salt</li>
                                    <li>6 tbsp water</li>
                                    <li>2 tbsp rice vinegar</li>
                                    <li>1 tbsp honey</li>
                                    <li>1 tbsp mirin</li>
                                    <li>12 roasted ripe cherry tomatoes</li>
                                    <li>3 roasted garlic heads</li>
                                    <li>2.5 tsp MSG</li>
                                    <li>1 tsp white pepper</li>
                                    <li>1 tsp Chinese 5 spice</li>
                                    <li>2 tsp smoked paprika</li>
                                    <li>6 tbsp tahini</li>
                                    <li>1/4 cup of sesame oil</li>
                                    <li>1 tbsp dried shiitake powder</li>
                                </ul>
                                <p><span className="bold">Temps de préparation</span> : 30min</p>
                            </div>
                            <div className="col-8">
                                <p class="main-citation">Something that will enhance the pork flavor because for me tonkotsu is all about the pork</p>
                            </div>
                        </div>
                    </div>
  
                    Nostrud eiusmod cillum mollit ipsum veniam. Ullamco qui elit id exercitation id est qui do do nulla qui. Est id laboris ea aliquip.

Anim aliquip pariatur adipisicing magna occaecat esse. Nostrud id culpa eu do do ex et anim. Irure dolore occaecat nulla est nulla proident sit est anim veniam ipsum est in eu. Incididunt qui cillum amet fugiat sunt nisi dolore pariatur culpa sint velit excepteur. Do aute velit reprehenderit ut excepteur aliqua enim ut proident ut ut.

Qui consequat irure aute quis ullamco qui velit esse occaecat ea. Consequat pariatur ad Lorem adipisicing Lorem ullamco. Labore eu ullamco sint nisi officia. Minim aute enim amet exercitation nisi consequat aliqua consequat amet.

Occaecat labore consequat occaecat sint irure amet ea sunt do esse est elit sint. Officia adipisicing ad laborum sunt sunt minim nulla. Aute sit nisi laborum id exercitation. Elit fugiat nostrud in cillum mollit mollit aliqua Lorem esse ea laboris sit deserunt. Cillum cupidatat tempor labore do aliqua commodo sit nulla sint nostrud nostrud aliquip. Veniam esse nulla ipsum proident. Quis excepteur irure magna sint et mollit Lorem.

Ipsum ad nulla eu officia. Aliqua laboris irure tempor magna proident laborum. Commodo ullamco ullamco ipsum do labore duis labore Lorem sit aute excepteur ea. Est ex occaecat laboris nostrud. Nulla Lorem eu cupidatat nisi est exercitation voluptate et nostrud ut ea est. Ex pariatur eiusmod esse magna laborum.

Cillum amet sit ea veniam nostrud proident. Sint labore reprehenderit excepteur id. Lorem sunt est non aliqua incididunt exercitation cupidatat sunt. Duis ullamco quis culpa commodo laborum labore ipsum cupidatat proident enim dolore ea. Reprehenderit pariatur est ea incididunt tempor adipisicing ut fugiat id exercitation sunt. Quis qui Lorem dolore dolor. Incididunt nostrud veniam proident aliqua sunt laboris sint.

Non consequat eu do laborum qui anim dolor veniam quis consequat occaecat in dolore. Officia ex esse nulla sint et adipisicing irure eu. Aliqua amet nulla ad Lorem sunt adipisicing excepteur voluptate magna. Sit ipsum ea do voluptate consequat duis exercitation laborum non. Laboris excepteur tempor nostrud ad exercitation pariatur sit elit ad ex cupidatat qui officia est. Dolor irure nisi nisi mollit occaecat amet voluptate minim duis non esse consectetur.

Minim pariatur sint Lorem deserunt est sint amet aliqua veniam quis. Exercitation commodo ipsum irure sit. Incididunt aliqua qui est excepteur culpa eu.

Est dolor eu duis voluptate. Non quis aute ullamco officia laboris pariatur. Ad nostrud et culpa minim ullamco laborum elit exercitation.

Dolor minim velit exercitation pariatur aliqua enim quis. Ex do cillum veniam non enim est consectetur in velit quis esse eu deserunt. Pariatur velit minim ipsum velit.
                </div>
            </>
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
        banniere {
          fluid(quality: 100, maxWidth: 1610, maxHeight: 620) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
        description{
            json
        }
    }
  }
`