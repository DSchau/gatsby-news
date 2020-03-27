/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Weather = ({ stocks = [
  {
    label: `S&P 500`,
    change: 6.24
  },
  {
    label: `Dow`,
    change: 6.38
  },
  {
    label: `Nasdaq`,
    change: 5.60
  }
] }) => (
  <Styled.div sx={{
    padding: 1,
  }}>
    {
      stocks.map(stock => (
        <Styled.h3 key={stock.label} sx={{ fontSize: 12, fontWeight: `normal` }}>
          <span sx={{ pr: 1 }}>{stock.label}</span>
          <span>{stock.change}</span>
        </Styled.h3>
      ))
    }
  </Styled.div>
)

export default Weather