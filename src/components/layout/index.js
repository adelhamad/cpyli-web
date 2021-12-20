import { Container, Alert, Box } from '@chakra-ui/react'
import Header from './header'

const announcement = null

export default function Index({ children, settings }) {
  return (
    <Box display="flex" flexDir="column" minHeight="100vh">
      <Header settings={settings} />
      <Container maxW="1400px" marginTop={16} display="flex" flexDir="column" alignItems="center">
        {announcement && <Alert status="info" marginY={2}>{settings.announcement}</Alert>}
        {children}
      </Container>
    </Box>
  )
}
