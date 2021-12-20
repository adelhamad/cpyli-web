import Head from 'next/head'
import { GridItem, Grid } from '@chakra-ui/react'
import Layout from '../src/components/layout'
import { SITE_NAME } from '../src/utils/constants'
// import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('react-responsive-carousel').then((mod) => mod.Carousel), { ssr: false, loading: () => <p>...</p> })

export default function Home({ settings }) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <Layout settings={settings}>
        <Grid templateColumns="repeat(6, 1fr)" gap={6} marginY={2} width="100%">
          <GridItem colSpan={[6, 6, 3, 3]}>
            <p>test</p>
          </GridItem>
          <GridItem colSpan={[6, 6, 3, 3]}>
            <p>test</p>
          </GridItem>
        </Grid>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const settings = []
  return {
    props: { settings },
  }
}
