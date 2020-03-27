exports.onCreateNode = function onCreateNode({ node, actions }) {
  if (node.internal.type === 'WpPost') {
    actions.createNodeField({
      node,
      name: `slug`,
      value: `/${node.uri}`
    })
  }
}

exports.createPages = async function createPages({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allWpPost {
        nodes {
          uri
        }
      }
    }
  `)

  data.allWpPost.nodes.forEach(node => {
    actions.createPage({
      component: require.resolve('./src/templates/post.js'),
      path: `/${node.uri}`,
      context: {
        uri: node.uri
      }
    })
  })
}
