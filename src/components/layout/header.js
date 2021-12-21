/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { Button, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode()
  const router = useRouter()

  const onClickNew = () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    // const consent = confirm('All your changes will be reset!')
    // if (consent) router.push('/')
    router.push('/')
  }

  return (
    <header className="header">
      <div className="logo">
        <Image width={140} height={32} src="/assets/img/logo/logo-full.svg" alt="logo" />
      </div>
      <div className="flex items-center">
        <Button onClick={toggleColorMode} color="white" variant="link" marginX={2} cursor="pointer">
          {colorMode}
        </Button>
        <Link passHref href="/">
          <Button onClick={onClickNew} color="white" variant="link" marginX={2} marginEnd={6}>
            new
          </Button>
        </Link>
      </div>
    </header>
  )
}
