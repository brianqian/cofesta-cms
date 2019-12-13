const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(edge => {
    const {
      fields: { slug },
      frontmatter,
    } = edge.node;
    actions.createPage({
      path: slug,
      component: path.resolve(`./src/templates/${String(frontmatter.templateKey)}.js`),
      context: { slug },
    });
  });
};
