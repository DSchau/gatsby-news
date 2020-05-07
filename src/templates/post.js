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
      padding: [1, 2],
      width: ['100%', '75ch'],
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'heading',
        fontWeight: 700
      },
      a: {
        color: 'accent'
      },
      h2: {
        fontSize: [2, 3, 4]
      },
      h3: {
        fontSize: [1, 2, 3]
      }
    }}>
      <h1 sx={{
        fontSize: [4, 5, 6],
        lineHeight: 1.2
      }}>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} sx={{
        maxWidth: '100%',
        'figure': {
          maxWidth: '100%'
        },
        'figure img': {
          maxWidth: '100%',
          height: 'auto'
        },
        'p': {
          fontSize: 3,
          fontFamily: `"Georgia", serif`
        },
        '.dfm-title br': {
          display: 'none'
        }
      }} />
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
