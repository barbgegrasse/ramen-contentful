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
            name: 'Ramen-noob',
            short_name: 'Ramen-noob',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        },
    },
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-42665818-4",
            // Defines where to place the tracking script - `true` in the head and `false` in the body
            head: false,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            //exclude: ["/preview/**", "/do-not-track/me/too/"],
            // Delays sending pageview hits on route update (in milliseconds)
            pageTransitionDelay: 0,
            // Enables Google Optimize using your container Id
            //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
            // Enables Google Optimize Experiment ID
            //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
            // Set Variation ID. 0 for original 1,2,3....
            //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
            // Any additional optional fields
            sampleRate: 5,
            siteSpeedSampleRate: 10,
            cookieDomain: "the-ramen-noob.netlify.com",
        },
    },
    `gatsby-plugin-offline`,
  ]
}