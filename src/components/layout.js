/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <Styled.root sx={{
      margin: `0 auto`,
      padding: [1, `0 5vw`, `0 10vw`]
    }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
