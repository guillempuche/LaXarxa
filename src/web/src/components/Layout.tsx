import React from "react";
import { Helmet } from "react-helmet";

import "../styles/layout.module.scss";
import TopBar from "./TopBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Xarxa</title>
      </Helmet>
      <TopBar />
      {children}
    </div>
  );
};
export default Layout;
