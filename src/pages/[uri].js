/** @jsx jsx */
import { jsx } from "theme-ui"
import { createPagesFromData, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

const Post = ({ data: { title, content }}) => (
  <Layout>
    <SEO title="Home" />
    <Styled.div sx={{
      margin: '0 auto',
      width: ['100%', '85ch']
    }}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Styled.div>
  </Layout>
)

export default createPagesFromData(Post, graphql`
  {
    allWpPost {
      nodes {
        title
        content
        uri
      }
    }
  }
`)
