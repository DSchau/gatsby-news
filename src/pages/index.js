import React from "react"
import { graphql  } from "gatsby"

import Page from '../components/page'

const IndexPage = props => <Page {...props} />

export const pageQuery = graphql`
  query IndexQuery {
    posts: allWpPost(sort: {fields: date, order:DESC}, filter: {categories: {nodes: {elemMatch: {name: {eq: "Latest News"}}}}}) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default IndexPage
