const { request } = require('graphql-request')
const fs = require('fs-extra')
const path = require('path')

const POST_FRAGMENT = `
  author {
    name
  }
  date
  slug
  featuredImage {
    altText
    sourceUrl
    title
  }
  content
  excerpt
  title
  categories {
    nodes {
      name
    }
  }
  tags {
    nodes {
      name
    }
  }
  primaryCategory {
    node {
      name
    }
  }
`

async function fetchData({ limit = 5000 } = {}) {
  const makeQuery = (endCursor) => `
    {
      posts(first: 100, where: {
        status: PUBLISH
      }${endCursor ? `, after: "${endCursor}"` : ``}) {
        pageInfo {
          endCursor
        }
        nodes {
          ${POST_FRAGMENT}
        }
      }
    }
  `

  let count = 0
  let allPosts = []
  let endCursor = ``
  try {
    while (count <= limit) {
      const { posts = {} } = await request(
        `https://www.denverpost.com/graphql`,
        makeQuery(endCursor)
      )
      if (!posts || !posts.pageInfo.endCursor) {
        break
      }

      endCursor = posts.pageInfo.endCursor
      allPosts = allPosts.concat(posts.nodes)
      count = allPosts.length
      console.log(`Fetched ${count} of ${limit}.`)
    }
  } catch (e) {
    console.error(e)
  } finally {
    const base = path.join(__dirname, `..`, `data`)

    await fs.mkdirp(base)

    await fs.writeFile(
      path.join(base, `posts.json`),
      JSON.stringify(allPosts, null, 2)
    )

    return allPosts
  }
}

module.exports = fetchData

fetchData().then((posts) => {
  console.log(posts)
})
