import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { usePageContext } from "../shared/PageContext";

interface LinkProps {
  to: String;
  ref?: String;
  [rest: string]: any;
}

const Link: React.FC<LinkProps> = ({ to, ref, ...rest }) => {
  const { locale } = usePageContext();

  return <GatsbyLink {...rest} to={`/${locale}${to}`} />;
};

export default Link;
