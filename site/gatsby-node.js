const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          tableOfContents
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create  pages.
  const pages = result.data.allMdx.nodes;
  const newsTemplate = path.resolve(`./src/templates/news.js`);
  const contributeTemplate = path.resolve(`./src/templates/contribute.js`);
  const pageTemplate = path.resolve(`./src/templates/page.js`);

  function getCategory(page) {
    const path = page.internal.contentFilePath;

    return path ? (path.includes('/contribute/') ? 'contribute' : '') : '';
  }

  function getTemplate(category) {
    return category
      ? category.includes('contribute')
        ? contributeTemplate
        : pageTemplate
      : pageTemplate;
  }

  pages.forEach((page) => {
    const category = getCategory(page);
    createPage({
      path: page.fields.slug,
      component: `${getTemplate(category)}?__contentFilePath=${
        page.internal.contentFilePath
      }`,
      context: {
        id: page.id,
        category,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
