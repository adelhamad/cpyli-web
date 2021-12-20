import axios from 'axios'
import { recaptchaKeySecret } from '../constants'

export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export const absoluteUrl = (req) => {
  let protocol = 'https:'
  const host = req
    ? req.headers['x-forwarded-host'] || req.headers.host
    : ''
  if (host.includes('localhost')) {
    protocol = 'http:'
  }
  return {
    protocol,
    host,
    origin: `${protocol}//${host}`,
  }
}

export const validateRecaptcha = async (token) => {
  const res = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKeySecret}&response=${token}`)
  return !!res.data.success
}

export const removeURLParameter = (url, parameter) => {
  // prefer to use l.search if you have a location/link object
  const urlparts = url.split('?')
  if (urlparts.length >= 2) {
    const prefix = `${encodeURIComponent(parameter)}=`
    const pars = urlparts[1].split(/[&;]/g)

    // reverse iteration as may be destructive
    for (let i = pars.length; i-- > 0;) {
      // idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1)
      }
    }

    return urlparts[0] + (pars.length > 0 ? `?${pars.join('&')}` : '')
  }
  return url
}

export const getCookieValue = (name) => (
  document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || ''
)
