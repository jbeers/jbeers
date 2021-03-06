const path = require( 'path' );
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async ( { graphql, actions, reporter } ) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve( 'src/templates/blogPost.js' ); 

    const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {fileAbsolutePath: { regex: "/published/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              pagePath
            }
          }
        }
      }
    }
  `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allMarkdownRemark.edges
      .forEach(({ node }) => {
          createPage({
              path: node.frontmatter.pagePath,
              component: blogTemplate,
              context: {} // additional data can be passed via context
          })
      })
}