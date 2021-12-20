import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// #7DE38D
// #00242B

const primary = {
  50: '#EAFAED',
  100: '#C4F2CB',
  200: '#9EEAAA',
  300: '#79E289',
  400: '#53DA68',
  500: '#2DD247',
  600: '#24A839',
  700: '#1B7E2B',
  800: '#12541C',
  900: '#092A0E',
}

const secondary = {
  50: '#E5FBFF',
  100: '#B8F3FF',
  200: '#8AECFF',
  300: '#5CE4FF',
  400: '#2EDDFF',
  500: '#00D5FF',
  600: '#00ABCC',
  700: '#008099',
  800: '#005566',
  900: '#002B33',
}

const themeOptions = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Menlo, monospace, system-ui, sans-serif',
    heading: 'Menlo, monospace, Georgia, serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    primary,
    secondary,
    white: '#fafafa',
  },
}
const theme = extendTheme(themeOptions)

export default function ChakraWrapper({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
