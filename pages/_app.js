import React from 'react'
import App from 'next/app'
import MatchProvider from '../components/user-context';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <MatchProvider><Component {...pageProps} /></MatchProvider>
    }
}

export default MyApp