import Link from 'next/link'
import { Button, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import routes from '../../utils/constants/routes'

export default function Header() {
  const { toggleColorMode } = useColorMode()

  return (
    <header className="header">
      <div className="logo">
        <Link passHref href="/">
          <a href={routes.root}>
            <Image width={180} height={38} className="mx-4 cursor-pointer" src="/assets/img/logo/logo-full.svg" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <Link passHref href="routes.register">
          <Button as="a" color="white" variant="link" marginX={2}>
            Register
          </Button>
        </Link>
        <Button as="a" onClick={toggleColorMode} color="white" variant="link" marginX={2} marginEnd={6} cursor="pointer">
          Login
        </Button>
      </div>
    </header>
  )
}
