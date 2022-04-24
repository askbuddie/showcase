const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query allProjects {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach((edge) => {
    actions.createPage({
      path: `/projects/${edge.node.slug}`,
      component: path.resolve(`./src/templates/Project-details.js`),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
