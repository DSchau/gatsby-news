/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from 'gatsby'

const PostPreview = ({ title, excerpt, featuredImage, uri, ...props }) => (
  <article sx={{
    borderTop: theme => `1px solid ${theme.colors.text}`,
    borderBottom: theme => `1px solid ${theme.colors.text}`,
  }} {...props}>
    <Styled.h2><Link to={`/${uri}`}>{title}</Link></Styled.h2>
    <Styled.div dangerouslySetInnerHTML={{ __html: excerpt }} />
  </article>
)

export default PostPreview
