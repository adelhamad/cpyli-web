import ChakraWrapper from '../src/hoc/ChakraWrapper'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraWrapper>
      <Component {...pageProps} />
    </ChakraWrapper>
  )
}

export default MyApp
