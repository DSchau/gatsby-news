/** @jsx jsx */
import { jsx } from "theme-ui"

const Seperator = props => (
  <hr sx={{
    border: `none`,
    height: 3,
    borderTop: theme => `1px solid ${theme.colors.text}`,
    borderBottom: theme => `1px solid ${theme.colors.text}`,
  }} {...props} />
)

export default Seperator
