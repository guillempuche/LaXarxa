import React from "react";
import { Helmet } from "react-helmet";

import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ margin: `1rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Helmet>
        <title>Web</title>
      </Helmet>
      <TopBar />
      {children}
      <BottomBar />
    </div>
  );
};
export default Layout;
