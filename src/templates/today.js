import React from "react"
import { graphql  } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Ticker from '../components/ticker'
import PostPreview from '../components/post-preview'

const TodayPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Ticker />
    {
      data.posts.nodes.map(post => (
        <PostPreview key={post.title} {...post} />
      ))
    }
  </Layout>
)

export const pageQuery = graphql`
  query TodayQuery($date: String!) {
    posts: allWpPost(limit:25, filter: {date: { eq: $date }, categories: {nodes: {elemMatch: {name: {eq: "Latest News"}}}}}) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default TodayPage
