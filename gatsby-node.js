const path = require('path')
const fs = require('fs-extra')

const { zipFunctions } = require('@netlify/zip-it-and-ship-it');

exports.onPostBuild = async function () {
  const inputDir = path.join(__dirname, `functions`)
  const outputDir = path.join(__dirname, 'public', 'functions')

  if (!await fs.exists(outputDir)) {
    await fs.mkdir(outputDir)
  }

  return zipFunctions(inputDir, outputDir)
}


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
      categories: allWpCategory {
        nodes {
          name
          uri
        }
      }
    }
  `)

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
