import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

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
        <Link key={match.title} href="/p/[id]" as={`/p/${match.title}`}>
          <div className="match-item">{
            match.title}
            <img src={match.thumbnail} className="match-image" />
          </div>
        </Link>
      ))
    }

    <style jsx>{`
      .matches-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding: 24px;
      }
      .match-item {
        font-size: 18px;
        border: 1px solid rgba(0,0,0,.54);
        margin: 4px 0;
        padding: 24px;
        text-align: center;
        cursor: pointer;
        border-radius: 12px;
      }
      .match-image {
        height: 64px;
        width: 64px;
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
