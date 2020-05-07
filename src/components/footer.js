/** @jsx jsx */
import { jsx } from "theme-ui"

export default () => (
  <footer sx={{
    padding: [2, 3],
    mt: 2,
    mb: 2,
    textAlign: `center`,
    fontSize: [10, 1, 2],
    borderTop: theme => `1px solid ${theme.colors.text}`
  }}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)
