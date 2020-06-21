import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { MarkdownRemark, Query } from "../utils/graphql-types";

interface Props {
  // data: { markdownRemark: MarkdownRemark, };
  data: Query;
}

// const Content: React.FC<Props> = ({ data: {markdownRemark} }) => {
// const Content: React.FC<Props> = ({ data }) => {
const Content: React.FC = () => {
  // const Content = ({ data }: Props) => {
  const data = useStaticQuery(graphql`
    query GetContent {
      markdownRemark(frontmatter: { path: { eq: "/" } }) {
        html
        frontmatter {
          path
          title
        }
      }
    }
  `);

  if (!data) return <>Cargando...</>;

  return (
    <div
      // Print on the screen the HTML egality content.
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html || "" }}
    />
  );
};

// Get thCargandoe html content & front matter data (path & title) filtered on page's path name.
// Frontmatter & content query examples:
// - https://github.com/nakanishi8/sdl_officialhp/blob/5383758938/src/templates/Type.ts
// export const query = graphql`
//   query GetContent {
//     markdownRemark(frontmatter: { path: { eq: "/legalidad" } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;

export default Content;

// export const query = graphql`
//   query GetContent {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             path
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         siteName
//       }
//     }
//   }
// `;
// export const query = graphql`
//   query GetContent($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       frontmatter {
//         path
//         title
//       }
//     }
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             path
//           }
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         siteName
//       }
//     }
//   }
// `;
