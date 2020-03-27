/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

const Post = ({ data: { post }}) => (
  <Layout>
    <SEO title="Home" />
    <Styled.div sx={{
      margin: '0 auto',
      width: ['100%', '85ch']
    }}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Styled.div>
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
