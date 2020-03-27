/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const StockTicker = ({ stocks = [
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
    borderRight: theme => `1px solid ${theme.colors.text}`
  }}>
    {
      stocks.map(stock => (
        <Styled.h3 key={stock.label} sx={{ fontSize: 12, fontWeight: `normal` }}>
          <span sx={{ pr: 2, whiteSpace: `nowrap` }}>{stock.label}</span>
          <span sx={{ textAlign: `right` }}>{stock.change}</span>
        </Styled.h3>
      ))
    }
  </Styled.div>
)

export default StockTicker