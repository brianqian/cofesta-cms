/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import NavBar from './nav';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Special+Elite|Rock+Salt&display=swap');
body, html{
  font-family: 'Open Sans Condensed';
  max-width: 100vw;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.strokeColor};
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  cursor: pointer;
  transition: .25s ease-in;
  color: ${p => p.theme.strokeColor};
    :hover {
      color: ${p => p.theme.strokeColor};
    }
}
`;

const Layout = ({ children }) => {
  const { siteInfo } = useStaticQuery(
    graphql`
      query {
        siteInfo: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <NavBar title={siteInfo.frontmatter.title} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
