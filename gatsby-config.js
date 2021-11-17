/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    // title: "Jarom Rial Web Development",
    titleTemplate: "%s - Jarom Rial Professional Web Development",
    description: "Need a website? I'm a professional web developer. Visit my website and let's get working a website for you business.",
    url: "https://jarom.dev",
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.jarom.dev',
        siteUrl: 'https://jarom.dev',
      },
    }
  ],
}
