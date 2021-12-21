import Head from 'next/head'
import {
  Box, FormControl, FormLabel, Textarea, Switch, Button, FormHelperText, Input, Tooltip, Text, useClipboard, Select,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { RWebShare } from 'react-web-share'
import { useEffect } from 'react'
import Layout from '../src/components/layout'
import { SITE_NAME } from '../src/utils/constants'

// import dynamic from 'next/dynamic'
// const Carousel = dynamic(() => import('react-responsive-carousel').then((mod) => mod.Carousel), { ssr: false, loading: () => <p>...</p> })

export default function Home() {
  const router = useRouter()
  const { asPath } = router
  // const { index } = query // will be an array
  const {
    register, handleSubmit, watch, reset,
  } = useForm()
  const { hasCopied, onCopy } = useClipboard(watch('snippet'))

  useEffect(() => {
    if (asPath === '/') reset()
  }, [reset, asPath])

  const onSubmit = () => {
    // console.log(data)
  }

  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <Layout>
        <Box width={['100%', '100%', '80%', '80%']} marginY={10} padding="10">
          <Box display="flex" alignItems="center">
            <Button colorScheme="primary" type="button" size="xs" marginEnd={2} onClick={onCopy} isDisabled={!watch('snippet') || watch('snippet') === ''}>
              {hasCopied ? 'Copied' : 'Copy'}
            </Button>
            <RWebShare
              data={{
                text: 'cpy.li | easiest way to share snippets',
                url: 'https://cpy.li',
              }}
            >
              <Button colorScheme="primary" type="button" size="xs" marginEnd={2}>
                Share
              </Button>
            </RWebShare>
            <Button colorScheme="primary" type="button" size="xs" marginEnd={4}>
              Raw
            </Button>
            <Text fontSize="xs">{`Views: ${1}`}</Text>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box my={5} width="100%">
              <FormControl marginY={4} id="snippet">
                <Textarea isRequired {...register('snippet', { required: true })} placeholder="enter your snippet here..." name="snippet" type="text" disabled={false} rows={10} maxLength={10000} />
                <FormHelperText>{`max length = 10000 | character count: ${watch('snippet')?.length || 0}`}</FormHelperText>
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <Tooltip label="If enabled the text will be copied to clipboard once link is opened. Supported only in Chrome.">
                  <FormLabel htmlFor="auto-copy">Auto Copy</FormLabel>
                </Tooltip>
                <Switch id="auto-copy" defaultIsChecked {...register('auto_copy')} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="allow-edit">Allow Edit</FormLabel>
                <Switch id="allow-edit" {...register('allow_edit')} />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <Tooltip label="Will be encrypted and stored safely.">
                  <FormLabel htmlFor="password-protected">Password Protected</FormLabel>
                </Tooltip>
                <Switch id="password-protected" {...register('password_protected')} />
              </FormControl>
              {watch('password_protected') && (
              <FormControl my={2}>
                <Input id="password" {...register('password')} placeholder="Password" size="sm" type="password" />
              </FormControl>
              )}
              <FormControl display="flex" alignItems="center">
                <Tooltip label="Syntax and meta tags.">
                  <FormLabel htmlFor="optional-fields">Optional Fields</FormLabel>
                </Tooltip>
                <Switch id="optional-fields" {...register('optional_fields')} />
              </FormControl>
              {watch('optional_fields') && (
              <>
                <FormControl my={2}>
                  <Select placeholder="Syntax Highlight" size="sm" {...register('syntax')}>
                    <option value="text">Normal Text</option>
                    <option value="option2">Option 2</option>
                  </Select>
                </FormControl>
                <FormControl my={2}>
                  <Input id="title" {...register('title')} placeholder="Snippet Name" size="sm" />
                </FormControl>
                <FormControl my={2}>
                  <Input id="description" {...register('description')} placeholder="Description" size="sm" />
                </FormControl>
                <FormControl my={2}>
                  <Input id="author" {...register('author')} placeholder="Author" size="sm" />
                </FormControl>
              </>
              )}

              <Button colorScheme="primary" type="submit" disabled={false} isLoading={false} width="100%" marginY={6}>
                Create
              </Button>
            </Box>
          </form>
        </Box>
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
