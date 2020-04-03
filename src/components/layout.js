/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="font-sans bg-light text-dark flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col">
        <Header className="flex-shrink-0" />
        <main className="flex-1" id="main" style={{ margin: "3rem 0 0 0" }}>
          {children}
        </main>
      </div>

      <footer
        className={`footer bg-dark text-light h-12 p-4 flex justify-between items-center`}
        style={{
          boxShadow: `inset 0 0.125rem 0.25rem -0.25rem black`,
        }}
      >
        <p className>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
