import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { usePageContext } from "../shared/PageContext";

const Languages: React.FC = () => {
  const { originalPath } = usePageContext();
  const { site } = useStaticQuery(graphql`
    query getss {
      site {
        siteMetadata {
          supportedLanguages
        }
      }
    }
  `);

  return (
    <div>
      <ButtonGroup aria-label="List of languages">
        {site.siteMetadata.supportedLanguages.map(
          (supportedLanguage: string) => {
            return (
              <Link
                key={supportedLanguage}
                to={`/${supportedLanguage}${originalPath}`}
              >
                <Button aria-label="Language">
                  {supportedLanguage === "es"
                    ? ":es"
                    : supportedLanguage === "ar"
                    ? ":ar"
                    : ":fr"}
                </Button>
              </Link>
            );
          },
        )}
      </ButtonGroup>
    </div>
  );
};

export default Languages;
