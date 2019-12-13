import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const GalleryPage = ({ data }) => {
  console.log(data.imgFiles.edges[0].node.childImageSharp.fullImage);

  return (
    <Layout>
      <SEO title="Gallery" />
      <h1>Gallery</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {data.imgFiles.edges.map(({ node }) => {
        return <Img fluid={node.childImageSharp.thumbnail} />;
      })}
      {data.imgFiles.edges.map(({ node }) => {
        return <Img fluid={node.childImageSharp.fullImage} />;
      })}
    </Layout>
  );
};

export const query = graphql`
  query GalleryPage {
    imgFiles: allFile(
      filter: { relativeDirectory: { eq: "gallery" }, sourceInstanceName: { eq: "images" } }
    ) {
      edges {
        node {
          childImageSharp {
            fullImage: fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
            thumbnail: fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default GalleryPage;
