/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

const PostPreview = ({ title, excerpt, featuredImage, uri, ...props }) => (
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
  }
`

export default PostPreview
