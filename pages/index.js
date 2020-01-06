import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

   <div>
     some content
   </div>

    <style jsx>{`
      
    `}</style>
  </div>
)

export default Home
