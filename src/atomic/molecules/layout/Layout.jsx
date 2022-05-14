import "./Layout.scss";
import React from "react";

const Layout = ({ content, heights, width }) => {
  return (
    <div
      style={{
        minHeight: `calc(100vh - ${heights}px`,
        maxWidth: `${width}`,
        margin: "0 auto",
        padding: "0px",
        display: "grid",
        gridGap: "1rem",
        gridAutoRows: "20rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(22rem, 1fr))",
        justifyContent: "center",
      }}
    >
      {content}
    </div>
  );
};

export default Layout;
