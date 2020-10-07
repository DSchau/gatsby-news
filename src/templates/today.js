import React from "react"
import { graphql  } from "gatsby"

import Page from '../components/page'

const TodayPage = props => <Page {...props} />

export const pageQuery = graphql`
  query TodayQuery($date: Date!) {
    posts: allWpPost(limit:25, sort: {fields: date, order:DESC}, filter: {date: { eq: $date }, categories: {nodes: {elemMatch: {name: {eq: "Latest News"}}}}}) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default TodayPage
