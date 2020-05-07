/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

const toKeys = (arr, key = `name`) => arr.reduce((merged, item) => {
  merged[item[key]] = true
  return merged
}, {})

const PostPreview = ({ title, excerpt, featuredImage, uri, tags: tagNodes, ...props }) => {
  const tags = toKeys(tagNodes.nodes)
  return (
    <article sx={{
      borderTop: theme => `1px solid ${theme.colors.text}`,
      borderBottom: theme => `1px solid ${theme.colors.text}`,
    }} {...props}>
      {featuredImage && featuredImage.remoteFile && (
        <Image {...featuredImage.remoteFile.childImageSharp} />
      )}
      <Styled.h2><Link to={uri}>{title}</Link></Styled.h2>
      <Styled.root dangerouslySetInnerHTML={{ __html: excerpt }} />
    </article>
  )
}

export const postPreviewFragment = graphql`
  fragment WpPostPreviewFragment on WpPost {
    title
    excerpt
    featuredImage {
      remoteFile {
        childImageSharp {
          fluid(maxWidth:400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    uri
    tags {
      nodes {
        name
      }
    }
  }
`

export default PostPreview
