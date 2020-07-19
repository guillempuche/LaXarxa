import React from "react";
import { graphql } from "gatsby";
import { useTranslation, getI18n } from "react-i18next";

import { MarkdownRemark } from "../types/graphql-types";

interface Props {
  data: { markdownRemark: MarkdownRemark };
}

const Index: React.FC<Props> = ({ data }) => {
  // const [t, i18n] = useTranslation();

  // console.log("getI18n", getI18n());
  return (
    <div
      // Print on the screen the HTML egality content.
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html || "" }}
    />
  );
};

export const query = graphql`
  query IndexPage($locale: String!) {
    markdownRemark(
      fields: { locale: { eq: $locale }, filename: { eq: "legalidad" } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Index;
