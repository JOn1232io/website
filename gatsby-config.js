module.exports = {
  siteMetadata: {
    title: `Project YCRO`,
    description: `Official website for Project YCRO.`,
    author: `Project YCRO`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project YCRO`,
        short_name: `YCRO`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-postcss`,
    // {
    // resolve: 'gatsby-source-google-sheets',
    // options: {
    //  spreadsheetId: '1_bZheUOFAcYnmUXDwCRR0rLXt2jqg9drwI2ZlmPxI-k',
    //  worksheetTitle: 'Hospitals - NOVA',
    //  credentials: require('./credentials/data.json')
    // }
},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
