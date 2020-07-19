import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { usePageContext } from "../shared/PageContext";
import Emoji from "./Emoji";

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
      <ButtonGroup>
        {site.siteMetadata.supportedLanguages.map(
          (supportedLanguage: string) => {
            return (
              <Link
                key={supportedLanguage}
                to={`/${supportedLanguage}${originalPath}`}
              >
                <Button variant="outline-light">
                  {supportedLanguage === "es" ? (
                    <Emoji code={[0x1f1ea, 0x1f1f8]} />
                  ) : supportedLanguage === "ar" ? (
                    <Emoji code={[0x1f1f2, 0x1f1e6]} />
                  ) : (
                    <Emoji code={[0x1f1e8, 0x1f1f5]} />
                  )}
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
