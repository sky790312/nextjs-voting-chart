import { GlobalStyles, theme } from '@/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

export default function App({ Component }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component />
    </ThemeProvider>
  )
}
