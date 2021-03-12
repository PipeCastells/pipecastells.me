module.exports = {
  pathPrefix: "/pipecastells.me",
  siteMetadata: {
    title: `Portfolio`,
    description: `_Felipe Castells FullStack Developer - Portfolio`,
    author: `@pipecastells`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/assets/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FelipeCastells Portfolio`,
        short_name: `Felipe Portfolio`,
        start_url: `/`,
        background_color: `#ef9885`,
        theme_color: `#ef9885`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
  ],
}
