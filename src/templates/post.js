import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Post = ({ data: { post }}) => (
  <Layout>
    <SEO title="Home" />
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </Layout>
)

export const postQuery = graphql`
  query PostByUri($uri: String!) {
    post: wpPost(uri: { eq: $uri }) {
      title
      content
    }
  }
`

export default Post
