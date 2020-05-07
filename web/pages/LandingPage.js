import PropTypes from 'prop-types'
import React, {Component} from 'react'
import NextSeo from 'next-seo'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import client from '../client'
import RenderSections from '../components/RenderSections'
import Feature from '../components/Feature'
import Customer from '../components/Customer'
import Plan from '../components/Plan'
import styles from './LandingPage.module.css'

const builder = imageUrlBuilder(client)
const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      }
    }
  }
}
`

class LandingPage extends Component {
  constructor(props) {
    super(props)  // XXX react makes us do this
    this.state = {
      isToggleOn: true,
    } // XXX so we can have variables we can pass to other Components
    this.toggle = this.toggle.bind(this) // XXX this "binds" the function to this component
  }

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    // TODO: improve types
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    features: PropTypes.any,
    customers: PropTypes.any,
    plans: PropTypes.any,
    featureTitle: PropTypes.string,
    customersTitle: PropTypes.string,
    customersSubTitle: PropTypes.string,
    plansTitle: PropTypes.string,
    plansSubTitle: PropTypes.string,
    config: PropTypes.any,
    slug: PropTypes.any
  }

  static async getInitialProps ({query}) {
    const {slug} = query
    if (!query) {
      console.error('no query')
      return
    }
    if (slug && slug !== '/') {
      return client.fetch(pageQuery, {slug}).then(res => ({...res.page, slug}))
    }

    // Frontpage
    if (slug && slug === '/') {
      return client
        .fetch(
          groq`
        *[_id == "global-config"][0]{
          frontpage -> {...,content[] {...,},
          features[]->,
          customers[]->,
          plans[]->
        }
      }
      `
        )
        .then(res => ({...res.frontpage, slug}))
    }

    return null
  }

  toggle = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render () {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      features = [],
      featureTitle = [],
      customersTitle = [],
      customersSubTitle = [],
      plansTitle = [],
      plansSubTitle = [],
      content = [],
      customers = [],
      plans = [],
      config = {},
      slug
    } = this.props
    const openGraphImages = openGraphImage
      ? [
        {
          url: builder
            .image(openGraphImage)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
          alt: title
        },
        {
          // Facebook recommended size
          url: builder
            .image(openGraphImage)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
          alt: title
        },
        {
          // Square 1:1
          url: builder
            .image(openGraphImage)
            .width(600)
            .height(600)
            .url(),
          width: 600,
          height: 600,
          alt: title
        }
      ]
      : []

    return (
      <Layout config={config}>
        <NextSeo
          config={{
            title,
            titleTemplate: `${config.title} | %s`,
            description,
            canonical: config.url && `${config.url}/${slug}`,
            openGraph: {
              images: openGraphImages
            },
            noindex: disallowRobots
          }}
        />
        {content && <RenderSections sections={content} />}
        {features && (
          <div id='features' className={styles.container}>
            <div className={styles.textCenter}>
              <h2>{featureTitle}</h2>
            </div>
            <div className={styles.features}>
              <Feature features={features} />
            </div>
          </div>
        )}
        {customers && (
          <div id='customers' className={styles.bg}>
            <div className={styles.container}>
              <div className={styles.textCenter}>
                <h2>{customersTitle}</h2>
                <div className={styles.textMono}>{customersSubTitle}</div>
              </div>
              <div className={styles.customers}>
                <Customer customers={customers} />
              </div>
            </div>
          </div>
        )}
        {plans && (
          <div id='pricing' className={styles.container}>
            <div className={styles.textCenter}>
              <h2>{plansTitle}</h2>
              <div className={styles.textMono}>{plansSubTitle}</div>
            </div>
            <div className={styles.toggleContainer}>
              <span className={styles.textMono}>Pay Monthly</span>
              <Toggle isToggleOn={this.state.isToggleOn} toggle={this.toggle}/> {/* pass the state 'isToggleOn' AND the function toggle() to the Toggle component */}
              <span className={styles.textMonoBlack}>Pay Annually</span>
            </div>
            <div className={styles.plans}>
              <Plan plans={plans} isToggleOn={this.state.isToggleOn}/> {/* pass the state 'isToggleOn' to the Plan component */}
            </div>
          </div>
        )}
      </Layout>
    )
  }
}

export default LandingPage
