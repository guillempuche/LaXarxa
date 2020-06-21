import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import { MarkdownRemark } from "../utils/graphql-types";

type Edge = {
  node: MarkdownRemark;
};

const BottomBar: React.FC = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const data = useStaticQuery(graphql`
    query getPagesPaths {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (!data || !data.allMarkdownRemark) return;

    // // Examples:
    // // https://github.com/atfieldson/whipworks.com/blob/4661ce881c/src/components/templates/ProductPage.tsx
    // const list = data.allMarkdownRemark.edges.map((edge: Edge) => {
    //   return edge.node.frontmatter.path;
    // });
    let list: any[] = [];
    for (let edge of data.allMarkdownRemark.edges) {
      if (
        edge.node &&
        edge.node.frontmatter &&
        typeof edge.node.frontmatter.path == "string"
      )
        // list.push("'" + edge.node.frontmatter.path + "' ");
        list.push(
          <div key={edge.node.frontmatter.title}>
            <Link to={edge.node.frontmatter.path}>
              {edge.node.frontmatter.title}
            </Link>
          </div>,
        );
    }

    setPaths((prevState: string[]) => [...prevState, ...list]);
  }, [data]);

  return (
    <div>
      <div>----------</div>
      <br />
      <div>{paths}</div>
    </div>
  );
};

// export const query = graphql`
//   query getPagesPaths {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             path
//           }
//         }
//       }
//     }
//   }
// `;

export default BottomBar;
