import React from "react"
import { graphql  } from "gatsby"

import Page from '../components/page'

const IndexPage = props => <Page {...props} />

export const pageQuery = graphql`
  query IndexQuery {
    posts: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Latest News"}}}}}) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default IndexPage
