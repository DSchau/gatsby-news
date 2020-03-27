import React from "react"
import { Link, graphql  } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Ticker from '../components/ticker'
import PostPreview from '../components/post-preview'

const IndexPage = ({ data }) => (
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
  query IndexQuery {
    posts: allWpPost(limit: 25) {
      nodes {
        ...WpPostPreviewFragment
      }
    }
  }
`

export default IndexPage
