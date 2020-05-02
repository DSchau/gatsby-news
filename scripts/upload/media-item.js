exports.mutation = `
mutation createMediaItem($filePath: String!, $title: String!, $altText: String!) {
  createMediaItem(input: {clientMutationId: "node-item-whatever", filePath: $filePath, title: $title, altText: $altText}) {
    mediaItem {
      id
    }
  }
}
`

exports.normalize = arr => arr.filter(item => !!item.featuredImage).map(item => {
  return {
    filePath: item.featuredImage.sourceUrl,
    altText: item.featuredImage.altText,
    title: item.featuredImage.title
  }
})
