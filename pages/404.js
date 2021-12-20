import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'
import Layout from '../src/components/layout'
import { SITE_NAME } from '../src/utils/constants'

export default function Index() {
  return (
    <>
      <Head>
        <title>{`Not Found | ${SITE_NAME}`}</title>
      </Head>

      <Layout>
        <Box width={['100%', '100%', '80%', '60%']} marginY={10} border="1px solid white" padding="10">
          <Heading as="h2" size="2xl" marginBottom={14}>Not Found 404</Heading>
        </Box>
      </Layout>
    </>

  )
}
