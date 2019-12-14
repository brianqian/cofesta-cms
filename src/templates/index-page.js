import styled from 'styled-components';
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Hero = styled.header`
  width: 100vw;
  height: 80vh;
  position: relative;
`;

const HeroText = styled.div`
  z-index: 1;
  font-size: 70px;
  color: white;
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const IndexPage = () => {
  const {
    siteInfo: { frontmatter },
  } = useStaticQuery(
    graphql`
      query {
        siteInfo: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            title
            splashImage {
              childImageSharp {
                fluid(maxWidth: 1080) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Img
          fluid={frontmatter.splashImage.childImageSharp.fluid}
          style={{ width: '100vw', maxHeight: '80vh', position: 'absolute', opacity: '1' }}
        />
        <HeroText>
          <h1>{frontmatter.title}</h1>
        </HeroText>
      </Hero>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/gallery/">Go to Gallery</Link>
    </Layout>
  );
};

export default IndexPage;
