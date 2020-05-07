import 'typeface-goudy-bookletter-1911'
import 'typeface-unifrakturmaguntia'

const lightModeColors = {
  accent: '#247BA0',
  text: '#000',
  background: '#fff',
  primary: '#30e3ca',
}

export default {
  transitions: {
    ease: '1s ease-in-out',
    bg: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
  },
  breakpoints: ['40em', '56em', '64em'],

  initialColorMode: 'light',
  useCustomProperties: true,
  colors: {
    ...lightModeColors,
    modes: {
      light: lightModeColors,
      dark: {
        accent: '#F3FFBD',
        text: '#fff',
        background: '#000',
        primary: '#30e3ca',
      },
      sepia: {
        accent: '#AFA19A',
        text: '#423434',
        background: '#F2ECDC',
        primary: '#D6CEBE',
      },
    },
  },

  fonts: {
    body: "system-ui, sans-serif",
    heading: `'Goudy Bookletter 1911', system-ui, serif`,
    monospace: "Menlo, monospace",
  },
  breakpoints: ['40em', '56em', '64em'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  transitions: {
    ease: `175ms ease-in-out`
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  "styles": {
    "root": {
      "fontFamily": "body",
      "fontSize": 2,
      "fontWeight": "body",
      "lineHeight": "body",
      backgroundColor: 'background',
      color: 'text',
      transition: 'background 0.25s ease-in-out, color 0.25s ease-in-out',
      height: '100%',
    },
    "img": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "maxWidth": "100%"
    },
    "h1": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 5,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "h2": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 4,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "h3": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 3,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "h4": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 2,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "h5": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 1,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "h6": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": 0,
      "fontFamily": "heading",
      "lineHeight": "heading",
      "fontWeight": "heading"
    },
    "ul": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "listStylePosition": "outside",
      "listStyleImage": "none",
      "ml": 3
    },
    "ol": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "listStylePosition": "outside",
      "listStyleImage": "none",
      "ml": 3
    },
    "li": {
      "mb": 2,
      "pl": 0,
      "ol": {
        "my": 2,
        "ml": 3
      },
      "ul": {
        "my": 2,
        "ml": 3
      },
      "p": {
        "mb": 2
      }
    },
    "p": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3
    },
    "table": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "borderCollapse": "collapse",
      "width": "100%"
    },
    "th": {
      "textAlign": "left",
      "borderBottom": "1px solid",
      "px": 2,
      "py": 1,
      ":first-child": {
        "pl": 0
      },
      ":last-child": {
        "pr": 0
      }
    },
    "td": {
      "textAlign": "left",
      "borderBottom": "1px solid",
      "px": 2,
      "py": 1,
      "mt": "-1px",
      ":first-child": {
        "pl": 0
      },
      ":last-child": {
        "pr": 0
      }
    },
    "blockquote": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "mx": 3
    },
    "hr": {
      "padding": 0,
      "margin": 0,
      "marginBottom": 3,
      "border": 0,
      "borderBottom": "1px solid",
      "mt": "-1px",
      "mb": 3
    },
    "b": {
      "fontWeight": "bold"
    },
    "strong": {
      "fontWeight": "bold"
    },
    "code": {
      "fontSize": "85%"
    },
    "pre": {
      "padding": 3,
      "margin": 0,
      "marginBottom": 3,
      "fontSize": "85%"
    }
  },
}