import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { GA_TRACKING_ID } from '../src/utils/lib/gtag'
import { absoluteUrl } from '../src/utils/functions/general'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, PUBLIC_URL: absoluteUrl(ctx.req).origin }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="application-name" content="cpy.li" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="cpy.li" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#00242B" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#00242B" />

          <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/logo/192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logo/32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/logo/16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" /> */}

          <meta name="keywords" content="share snippet, code snippet, share text" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={`${this.props.PUBLIC_URL}`} />
          <meta name="twitter:image" content={`${this.props.PUBLIC_URL}/assets/img/bg/meta-img.jpg`} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="cpy.li" />
          <meta property="og:url" content={`${this.props.PUBLIC_URL}`} />
          <meta property="og:image" content={`${this.props.PUBLIC_URL}/assets/img/bg/meta-img.jpg`} />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} /> */}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
            }}
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
