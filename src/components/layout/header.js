/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { Button, useColorMode, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode()
  const router = useRouter()
  const toast = useToast()

  const onClickFeedback = () => {
    const feedback = prompt('Tell me what to improve, and be kind 🙂')
    if (feedback) {
      axios.post('/api/snippet?action=createFeedback', { feedback })
        .then(() => {
          toast({ title: 'Feedback Sent, Thanks!', status: 'success' })
        })
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <Link passHref href="/">
          <a>
            <Image width={140} height={32} src="/assets/img/logo/logo-full.svg" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="flex items-center">
        <Button onClick={onClickFeedback} color="white" variant="link" marginX={2} cursor="pointer">
          feedback
        </Button>
        <Button onClick={toggleColorMode} color="white" variant="link" marginX={2} cursor="pointer">
          {colorMode}
        </Button>
        <Link passHref href="/">
          <Button onClick={() => router.push('/')} color="white" variant="link" marginX={2} marginEnd={6}>
            new
          </Button>
        </Link>

      </div>
    </header>
  )
}
