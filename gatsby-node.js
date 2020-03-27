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
  const { data: { posts, categories} } = await graphql(`
    {
      posts: allWpPost {
        nodes {
          uri
        }
      }

      categories: allWpCategory {
        nodes {
          name
          uri
        }
      }
    }
  `)

  posts.nodes.forEach(node => {
    actions.createPage({
      component: require.resolve('./src/templates/post.js'),
      path: `/${node.uri}`,
      context: {
        uri: node.uri
      }
    })
  })

  categories.nodes.forEach(node => {
    actions.createPage({
      component: require.resolve('./src/templates/category.js'),
      path: `/${node.uri}`,
      context: {
        category: node.name
      }
    })
  })
}
