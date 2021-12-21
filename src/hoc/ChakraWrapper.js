import { ChakraProvider, extendTheme } from '@chakra-ui/react'

// #975921
// #00242B

const primary = {
  50: '#FAF2EA',
  100: '#F2DAC4',
  200: '#EAC29F',
  300: '#E2AB79',
  400: '#D99353',
  500: '#D17B2E',
  600: '#A76325',
  700: '#7E4A1B',
  800: '#543112',
  900: '#2A1909',

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
