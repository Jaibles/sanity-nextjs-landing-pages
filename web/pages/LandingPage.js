import PropTypes from 'prop-types'
import React, {Component} from 'react'
import NextSeo from 'next-seo'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import Toggle from '../components/Toggle'
import Map from '../components/Map'
import MapToggle from '../components/MapToggle'
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
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false,
      selectedOption: styles.Brand
    } // XXX so we can have variables we can pass to other Components
    this.toggle = this.toggle.bind(this) // XXX this "binds" the function to this component
    this.handleOptionChange = this.handleOptionChange.bind(this) // XXX this "binds" the function to this component
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
    }))
  }

  handleOptionChange = (checkedStyle) => {
    this.setState({
      selectedOption: checkedStyle
    })
  }
  render () {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      featureTitle,
      features = [],
      customersTitle,
      customersSubTitle = [],
      customers = [],
      plansTitle,
      plansSubTitle,
      plans = [],
      content = [],
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
        {(featureTitle &&
          <>
            <Map selectedOption={this.state.selectedOption} />
            <MapToggle selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange} />
          </>
        ) || ''
        }
        {(featureTitle &&
          <div id='features' className={styles.container}>
            <div className={styles.textCenter}>
              <h2>{featureTitle}</h2>
            </div>
            <div className={styles.features}>
              <Feature features={features} />
            </div>
          </div>) || ''
        }
        {(customersTitle &&
          <div id='customers' className={styles.bg}>
            <div className={styles.container}>
              <div className={styles.textCenter}>
                <h2>{customersTitle}</h2>
                <div className={styles.textMono}>{customersSubTitle}</div>
              </div>
              <div className={styles.customersWrapper}>
                <div className={styles.customers}>
                  <Customer customers={customers} />
                </div>
              </div>
            </div>
          </div>) || ''
        }
        {(plansTitle &&
          <div id='pricing' className={styles.container}>
            <div className={styles.textCenter}>
              <h2>{plansTitle}</h2>
              <div className={styles.textMono}>{plansSubTitle}</div>
            </div>
            {/*<Toggle isToggleOn={this.state.isToggleOn} toggle={this.toggle} />*/}
            <div className={styles.plans}>
              <Plan plans={plans} isToggleOn={this.state.isToggleOn} /> {/* pass the state 'isToggleOn' to the Plan component */}
            </div>

            <div className={styles.center}>
              <a className={styles.googleButton} href="https://app.mappied.com">
                <span className={styles.googleButton__icon}>
                  <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg"><path d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z" id="Shape" fill="#EA4335"/><path d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z" id="Shape" fill="#FBBC05"/><path d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z" id="Shape" fill="#4285F4"/><path d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z" fill="#34A853"/></svg>
                </span>
                <span className={styles.googleButton__text}>Continue with Google</span>
              </a>
            </div>
          </div>) || ''
        }
      </Layout>
    )
  }
}

export default LandingPage
