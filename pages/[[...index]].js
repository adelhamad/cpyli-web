import Head from 'next/head'
import {
  Box, FormControl, FormLabel, Textarea, Switch,
  Button, FormHelperText, Input, Tooltip, Text,
  useClipboard, Select,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { RWebShare } from 'react-web-share'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Layout from '../src/components/layout'
import {
  apiActions, seoMeta, SITE_NAME, supportedSyntax,
} from '../src/utils/constants'

// import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('react-responsive-carousel').then((mod) => mod.Carousel), { ssr: false, loading: () => <p>...</p> })

export default function Home({ snippet }) {
  const router = useRouter()
  const { query } = router
  const { index } = query // will be an array
  const slug = index?.[0]
  const readOnly = useMemo(() => !!slug, [slug])
  const {
    register, handleSubmit, watch, reset,
  } = useForm()
  const { hasCopied, onCopy } = useClipboard(watch('snippet'))
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (snippet) {
      reset({
        snippet: snippet?.body,
        language: snippet?.language,
        auto_copy: snippet?.auto_copy,
        password_protected: snippet?.password_protected,
        optional_fields: snippet?.language !== 'text' || snippet?.title || snippet?.description,
        title: snippet?.title,
        description: snippet?.description,
      })
    } else {
      reset({
        snippet: '',
        language: '',
        auto_copy: true,
        password_protected: false,
        optional_fields: false,
        title: '',
        description: '',
      })
      router.push('/')
    }
  }, [reset, snippet, router])

  const onSubmit = (data) => {
    const {
      title, snippet: body, language, auto_copy, description,
    } = data
    const params = {
      title, body, language, auto_copy, description,
    }

    setLoading(true)
    axios.post(`/api/snippet?action=${apiActions.create}`, params)
      .then((res) => {
        setLoading(false)
        router.push(`/${res.data.id}`)
        reset()
      })
      .catch(() => setLoading(false))
  }

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

      <Layout>
        <Box width={['100%', '100%', '80%', '80%']} marginY={14} padding="2">
          <Box display="flex" alignItems="center">
            <Button colorScheme="primary" type="button" size="xs" marginEnd={2} onClick={onCopy} isDisabled={!watch('snippet') || watch('snippet') === ''}>
              {hasCopied ? 'Copied' : 'Copy'}
            </Button>
            <RWebShare
              data={{
                text: 'cpy.li | easiest way to share snippets',
                url: `https://cpy.li/${slug || ''}`,
              }}
            >
              <Button colorScheme="primary" type="button" size="xs" marginEnd={2}>
                Share
              </Button>
            </RWebShare>
            {readOnly && (
              <Button as="a" target="_blank" href={`/r/${slug}`} colorScheme="primary" type="button" size="xs" marginEnd={4}>
                Raw
              </Button>
            )}
            {readOnly && <Text fontSize="xs">{`Views: ${snippet.views}`}</Text>}
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box my={5} width="100%">
              <FormControl marginY={4} id="snippet">
                <Textarea isRequired {...register('snippet')} placeholder="enter your snippet here..." name="snippet" type="text" rows={10} maxLength={20000} isDisabled={loading || readOnly} />
                <FormHelperText>{`max length = 20000 | character count: ${watch('snippet')?.length || 0}`}</FormHelperText>
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <Tooltip label="If enabled the text will be copied to clipboard once link is opened. Supported only in Chrome.">
                  <FormLabel htmlFor="auto-copy">Auto Copy</FormLabel>
                </Tooltip>
                <Switch id="auto-copy" defaultIsChecked {...register('auto_copy')} isDisabled={loading || readOnly} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <Tooltip label="Will be encrypted and stored safely.">
                  <FormLabel htmlFor="password-protected">Password Protected</FormLabel>
                </Tooltip>
                <Switch id="password-protected" {...register('password_protected')} isDisabled={loading || readOnly} />
              </FormControl>
              {watch('password_protected') && (
              <FormControl my={2}>
                <Input id="password" {...register('password')} placeholder="Password" size="sm" type="password" isDisabled={loading || readOnly} />
              </FormControl>
              )}
              <FormControl display="flex" alignItems="center">
                <Tooltip label="Syntax and meta tags.">
                  <FormLabel htmlFor="optional-fields">Optional Fields</FormLabel>
                </Tooltip>
                <Switch id="optional-fields" {...register('optional_fields')} isDisabled={loading || readOnly} />
              </FormControl>
              {watch('optional_fields') && (
              <>
                <FormControl my={2}>
                  <Select placeholder="Syntax Highlight" size="sm" {...register('syntax')} isDisabled={loading || readOnly}>
                    {supportedSyntax.map((item, sIndex) => <option key={sIndex} value={item.value}>{item.label}</option>)}
                  </Select>
                </FormControl>
                <FormControl my={2}>
                  <Input id="title" {...register('title')} placeholder="Snippet Name" size="sm" isDisabled={loading || readOnly} />
                </FormControl>
                <FormControl my={2}>
                  <Input id="description" {...register('description')} placeholder="Description" size="sm" isDisabled={loading || readOnly} />
                </FormControl>
              </>
              )}
              {!readOnly && (
                <Button colorScheme="primary" type="submit" disabled={loading} isLoading={loading} width="100%" marginY={6}>
                  Create
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const slug = context?.query?.index?.[0]
  let snippet = null
  if (slug) {
    const res = await axios.get(`${process.env.BASE_URL}/api/snippet?action=${apiActions.findOne}&slug=${slug}`)
    snippet = res.data
  }
  return {
    props: { snippet },
  }
}
