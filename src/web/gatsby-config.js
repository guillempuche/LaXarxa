module.exports = {
  siteMetadata: {
    siteName: "Xarxa",
    description: "Toda la información para conseguir los papeles.",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
    // https://github.com/remarkjs/remark/tree/master/packages/remark-parse#processoruseparse-options
    "gatsby-transformer-remark",
  ],
};
