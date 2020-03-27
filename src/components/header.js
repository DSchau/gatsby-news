/** @jsx jsx */
import { jsx } from "theme-ui"

import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

/*
 * TODO: add categories
 */
const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        simplifiedDate: buildTime(formatString:"MMM DD, YYYY")
        fullDate: buildTime(formatString:"dddd, MMMM DD, YYYY")
      }

      categories: allWpCategory {
        nodes {
          uri
          name
        }
      }
    }
  `)
  return (
    <header>
      <nav sx={{
        padding: 2
      }}>
        <div sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `flex-end`
        }}>
          <h2 sx={{ margin: 0, fontSize: [12, 1] }}>
            <span sx={{ display: [`inline-block`, `none`]}}>
              {data.site.simplifiedDate}
            </span>
            <span sx={{ display: [`none`, `none`, `inline-block`]}}>
              {data.site.fullDate}
            </span>
          </h2>
          <h1 sx={{ margin: 0, fontSize: [3, 4, 5] }}>
            <Link
              to="/"
            >
              The Gatsby Times
            </Link>
          </h1>
          <h2 sx={{ margin: 0, fontSize: [12, 1] }}>
            <Link to="/today/">
              Today<span sx={{ display: [`none`, `none`, `inline-block`]}}>{`'s Paper`}</span>
            </Link>
          </h2>
        </div>
        <div sx={{
          mt: 1,
          mb: 1,
          padding: [1, 2],
          borderTop: theme => `1px solid ${theme.colors.text}`,
          borderBottom: theme => `1px solid ${theme.colors.text}`,
          overflowX: `scroll`
        }}>
          <ul sx={{
            margin: `0 auto`,
            padding: 0,
            display: `flex`,
            justifyContent: `space-between`,
            width: ['100%', '75%', '50%']
          }}>
            {
              data.categories.nodes
                .map(({ name, uri }) => (
                  <li key={uri} sx={{
                    listStyleType: `none`,
                    fontSize: 1,
                    padding: 1
                  }}><Link to={`/${uri}`} activeClassName="active" sx={{
                    color: `text`,
                    textDecoration: `none`,
                    padding: 1,
                    transition: `transitions.ease`,
                    ':hover, &.active': {
                      backgroundColor: `text`,
                      color: `background`
                    }
                  }}>{name}</Link></li>
                ))
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
