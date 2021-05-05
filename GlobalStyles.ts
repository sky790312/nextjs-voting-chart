import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const DONUT_CHART_COLORS = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
]

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: 1140px) {
    width: 1140px;
  }
`

export const FlexCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextCenterContainer = styled.div`
  text-align: center;
`

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    gray: '#afafaf',
    blue: '#a0c9e1',
  },
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
