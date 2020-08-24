import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {LogoJsonLd} from 'next-seo'
import Header from './Header'
import Footer from './Footer'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-TRP28VQ'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs)
}

function Layout (props) {
  const {config, children} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {title, mainNavigation, footerNavigation, footerText, logo, url} = config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        <link rel='preload' href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' crossOrigin='anonymous' rel='stylesheet' />
        <link rel='preload' href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' crossOrigin='anonymous' rel='stylesheet' />
      </Head>
      <div className='container'>
        <Header title={title} navItems={mainNavigation} logo={logo} />
        <div className='content'>{children}</div>
        <Footer navItems={footerNavigation} text={footerText} />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    url: PropTypes.string
  })
}

export default Layout
