module.exports = {
  siteMetadata: {
    siteName: "Xarxa",
    description: "Toda la información para conseguir los papeles.",
    defaultLanguage: "es",
    supportedLanguages: ["es", "ar", "fr"],
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/src/content/`,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
    // https://github.com/remarkjs/remark/tree/master/packages/remark-parse#processoruseparse-options
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-emojis",
          },
        ],
      },
    },
  ],
};
