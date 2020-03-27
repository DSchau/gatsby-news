/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <Styled.div sx={{
      margin: `0 auto`,
      padding: [1, `0 5vw`, `0 10vw`]
    }}>
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Styled.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
