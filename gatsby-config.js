module.exports = {
  siteMetadata: {
    title: `Ramen Noob`,
    author: `Johan Petrikovsky`,
    description: `From ramen noob to ramen lord.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `barbegrasse`,
    },
  },
  plugins: [
    {
        resolve: "gatsby-plugin-transition-link",
        options: {
            layout: require.resolve(`./src/components/layout/Layout.js`)
        }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
            spaceId: `uxkgpi34s8wc`,
            accessToken: `GPxSXJqBexyE2gkMztBod0VNt4cSqhI81CE3LJBiPaQ`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/images`,
            name: 'images'
        }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        },
    },
    `gatsby-plugin-offline`,
  ]
}