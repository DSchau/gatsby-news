/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default () => (
  <footer sx={{
    padding: 2,
    mt: 2,
    mb: 2,
    textAlign: `center`,
    fontSize: 11,
    borderTop: theme => `1px solid ${theme.colors.text}`
  }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)
