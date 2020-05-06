import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Ticker from '../components/ticker'
import PostPreview from '../components/post-preview'

const Page = ({ data }) => (
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

export default Page
