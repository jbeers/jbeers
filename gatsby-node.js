const path = require( 'path' );


exports.createPages = async ( { graphql, actions, reporter } ) => {
    const { createPage } = actions; 
    const prismicBlogPost = require.resolve( './src/templates/prismicBlogPost.js' ); 

    const result = await graphql(`
    {
      allPrismicPost{
        nodes {
          id
          data {
            title {
              text
            }
            publish_date
            main_image {
              url
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

    result.data.allPrismicPost.nodes
    .forEach(( node ) => {
        createPage({
            path: '/' + node.data.title.text.replace( /\W/g, '_' ).toLowerCase(),
            component: prismicBlogPost,
            context: {
              id: node.id
            }
        })
    })
}