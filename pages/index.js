import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      All matches
   </div>

   {
     props.matches.map(match => (
     <div>{match.title}</div>
     ))
   }

    <style jsx>{`
      
    `}</style>
  </Layout>
)

Home.getInitialProps = async function() {
  const res = await fetch('https://www.scorebat.com/video-api/v1/');
  const matches = await res.json();

  console.log(`Show data fetched. Count: ${matches.length}`);

  return { matches };
};


export default Home
