import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

const Home = props => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="matches-title">
      All matches
   </div>

    {
      props.matches.map(match => (
        <div key={match.title} className="match-item">{match.title}</div>
      ))
    }

    <style jsx>{`
      .matches-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
      }
      .match-item {
        border: 1px solid rgba(0,0,0,.54);
        margin: 12px 0;
        padding: 12px;
        text-align: center;
        cursor: pointer;
        border-radius: 12px;
      }
      .match-item:hover {
        background-color: rgba(0,0,0,.12)
      }
    `}</style>
  </Layout>
)

Home.getInitialProps = async function () {
  const res = await fetch('https://www.scorebat.com/video-api/v1/');
  const matches = await res.json();

  console.log(matches);

  return { matches };
};


export default Home
