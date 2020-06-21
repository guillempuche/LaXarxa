const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Get all names of the path name (it's extracted from the front matter information) of the markdown file (the table )
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  reporter.info(JSON.stringify(result));

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // // Create a page for each the path name, they will called as the path name.
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   reporter.info(JSON.stringify(node));
  //   reporter.info(path.resolve("./src/components/Content.tsx"));

  //   createPage({
  //     path: node.frontmatter.path,
  //     // Component where deals with the content for each page.
  //     component: path.resolvequery GetContent {
  //       allMarkdownRemark {
  //         edges {
  //           node {
  //             frontmatter {
  //               path
  //             }
  //           }
  //         }
  //       }
  //       site {
  //         siteMetadata {
  //           siteName
  //         }("./src/components/Content.tsx"),
  //     // context: {
  //     //   path: node.frontmatter.path,
  //     // },
  //   });
  //   // createPage({
  //   //   path: node.frontmatter.path,
  //   //   component: path.resolve("./src/components/BottomBar.tsx"),
  //   // });
  // });
};
