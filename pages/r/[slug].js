import Head from 'next/head'
import axios from 'axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { apiActions, seoMeta, SITE_NAME } from '../../src/utils/constants'

// import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('react-responsive-carousel').then((mod) => mod.Carousel), { ssr: false, loading: () => <p>...</p> })

export default function Home({ snippet }) {
  const router = useRouter()

  useEffect(() => {
    if (!snippet) router.push('/')
  }, [snippet, router])

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="twitter:title" content={snippet?.title || seoMeta.title} />
        <meta property="og:title" content={snippet?.title || seoMeta.title} />
        <meta name="description" content={snippet?.description || seoMeta.description} />
        <meta name="twitter:description" content={snippet?.description || seoMeta.description} />
        <meta property="og:description" content={snippet?.description || seoMeta.description} />

      </Head>

      <pre>
        {snippet?.body}
      </pre>

    </>
  )
}

export async function getServerSideProps(context) {
  const slug = context?.query?.slug
  let snippet = null
  if (slug) {
    const res = await axios.get(`${process.env.BASE_URL}/api/snippet?action=${apiActions.findOne}&slug=${slug}`)
    snippet = res.data
  }
  return {
    props: { snippet },
  }
}
