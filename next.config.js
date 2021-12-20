const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const isDev = process.env.NODE_ENV === 'development'

const pwa = isDev ? { disable: true } : {
  dest: 'public',
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],

}
const onDemandEntries = {
  // period (in ms) where the server will keep pages in the buffer
  maxInactiveAge: 60 * 60 * 1000,
  // number of pages that should be kept simultaneously without being disposed
  pagesBufferLength: 100,
}

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa,
  onDemandEntries,
})
