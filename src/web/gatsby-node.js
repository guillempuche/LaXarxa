// Multilanguage example: https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5
const path = require("path");
const config = require("./gatsby-config");

/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /es/404.js and /ar/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 *
 * Delete the original page automatically created by Gatsby, since we are
 * gonna create localized versions of it. Finnally add a redirect header.
 */
exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage, createPage, createRedirect } = actions;
  const originalPath = page.path;

  // Delete the original page automatically created by Gatsby.
  await deletePage(page);

  // Create one page for each locale
  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async (lang) => {
      const localizedPath = `/${lang}${originalPath}`;

      await createPage({
        // Pass on everything from the original page
        ...page,
        // Since page.path returns with a trailing slash (e.g. "/es/").
        // We want to remove that path: removeTrailingSlash(localizedPath).
        path: localizedPath,
        // Pass in the locale as context to every page.
        // This context also gets passed to the src/components/layout file.
        // This should ensure that the locale is available on every page.
        context: {
          ...page.context,
          originalPath,
          locale: lang,
        },
      });
    }),
  );

  // Create a fallback redirect if the path doesn't contain the supported languages.
  createRedirect({
    fromPath: "/",
    // Add the default language to the path, "/es/"
    toPath: `/${config.siteMetadata.defaultLanguage}${originalPath}`,
    isPermanent: true,
    // Only redirect in the browser during the development.
    redirectInBrowser: true, // process.env.NODE_ENV !== "production",
  });
};

/**
 * To ease the searching of Mardkown files in React components and
 * Gatsby pages we add some variables (`locale` and `filename`) to
 * the Gatsby plugin Markdown Remark. It's necessary to do that,
 * otherwise you couldn't filter by locale (language) and file name.
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Check for `MarkdownRemark` type (nodes created by Markdown Remark
  // plugin), so other nodes (e.g. `site`) are excluded.
  if (node.internal.type === `MarkdownRemark`) {
    // Get the locale and create a field.
    const folderPath = path.dirname(node.fileAbsolutePath);
    const folderName = path.basename(folderPath);
    createNodeField({ node, name: `locale`, value: folderName });

    // Get the filename only from the markdown file (it has the extension .md)
    // and create a field.
    const fileName = path.basename(node.fileAbsolutePath, ".md");
    createNodeField({ node, name: `filename`, value: fileName });
  }
};
