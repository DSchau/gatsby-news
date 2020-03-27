/** @jsx jsx */
import { jsx } from "theme-ui"

const ShowFor = ({ smallUp, mediumUp, largeUp = true, children }) => (
  <span sx={{
    display: [
      smallUp && `inline-block`,
      mediumUp && `inline-block`,
      largeUp && `inline-block`
    ]
  }}>
    {children}
  </span>
)

export default ShowFor
