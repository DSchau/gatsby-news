/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Image from 'gatsby-image'

const TickerItem = ({ image, heading, description, link }) => (
  <Styled.div sx={{
    display: `flex`,
    alignItems: `center`,
    padding: 1,
    borderRight: theme => `1px solid ${theme.colors.text}`
  }}>
    <Image {...image} sx={{ mr: 1 }} />
    <Styled.div>
      <Styled.h2 sx={{ margin: 0, fontSize: 1 }}>{heading}</Styled.h2>
      <Styled.p sx={{ margin: 0, fontSize: 12 }}>{description}</Styled.p>
    </Styled.div>
  </Styled.div>
)

export default TickerItem