import React, { ReactElement } from 'react'
import App from 'next/app'
import '../public/css/tailwind.css'

class MyApp extends App {
  render(): ReactElement {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
