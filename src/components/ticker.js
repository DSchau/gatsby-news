/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Seperator from './seperator'
import StockTicker from "./stock-ticker"
import TickerItem from './ticker-item'
import Weather from './weather'

/*
 * TODO: add categories
 */
const Ticker = () => {
  const data = useStaticQuery(graphql`
    {
      file(absolutePath: { regex: "/gatsby-astronaut/"}) {
        childImageSharp {
          fixed(height: 48, width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        day: buildTime(formatString: "dddd")
      }
    }
  `)
  return (
    <React.Fragment>
    <div sx={{
      display: `grid`,
      gridTemplateColumns: [`1fr`, `repeat(3, 1fr) min-content min-content`],
      gridTemplateRows: `auto`
    }}>
      {
        [
          {
            image: data.file.childImageSharp,
            heading: `Your ${data.site.day} Evening Briefing`,
            description: `Here's what you need to know at the end of the day.`
          },
          {
            image: data.file.childImageSharp,
            heading: `Listen to 'Still Processing'`,
            description: `A new season for a new time.`
          },
          {
            image: data.file.childImageSharp,
            heading: `Listen: 'Modern Love' Podcast`,
            description: `What's a book lover's most embarassing secret?`
          }
        ]
          .map(item => (
            <TickerItem key={item.heading} {...item} />
          ))
      }
      <StockTicker />
      <Weather />
    </div>
    <Seperator />
    </React.Fragment>
  )
}

export default Ticker
