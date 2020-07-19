import React, { ReactNode } from "react";

import { PageContextProvider } from "../shared/PageContext";
import Layout from "./Layout";

interface Props {
  element: ReactNode;
  props: any;
}

/**
 * Wraps every Gatsby page with the Layour component. For setting
 * persistent UI elements around pages. Pass all props (hence
 * the `...props`) to the layout component so it has access to things
 * like pageContext or location.
 */
const WrapPageElement: React.FC<Props> = ({ element, props }) => (
  <PageContextProvider pageContext={props.pageContext}>
    <Layout {...props}>{element}</Layout>
  </PageContextProvider>
);

export default WrapPageElement;
