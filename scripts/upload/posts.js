const he = require('he')

const getRandomAuthor = (authors) => {
  const index = Math.floor(Math.random() * authors.length)
  return authors[index].id
}

exports.mutation = `
mutation createPost($author_id: ID!, $date: String!, $content: String!, $excerpt: String, $title: String!, $slug: String!, $categories: PostCategoriesInput, $tags: PostTagsInput) {
  createPost(input: {
    authorId: $author_id,
    date: $date,
    content: $content,
    excerpt: $excerpt,
    title: $title,
    slug: $slug,
    categories: $categories,
    tags: $tags,
    status: PUBLISH,
    clientMutationId: "local-node-script"
  }) {
    post {
      id
    }
  }
}
`

exports.normalize = (data, authors) =>
  data.map((item) => {
    return {
      author_id: getRandomAuthor(authors),
      date: item.date,
      content: item.content,
      excerpt: item.excerpt,
      title: he.decode(item.title),
      slug: item.slug,
      categories: item.categories,
      tags: item.tags,
    }
  })
