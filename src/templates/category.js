import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from '../components/post-preview'

const Category = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {
      data && data.posts.nodes.map(post => (
        <PostPreview key={post.title} {...post} />
      ))
    }
  </Layout>
)

export const categoryQuery = graphql`
  query PostsByCategory($category: String!) {
    posts: allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: $category}}}}}) {
      nodes {
                title
        excerpt
        featuredImage {
          srcSet
        }
        uri
      }
    }
  }
`

export default Category
