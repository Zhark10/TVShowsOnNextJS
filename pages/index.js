import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Home = ({ TVShows }) => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="matches-title">
      All matches
   </div>

    {
      TVShows.map(item => (
        <Link key={item.show.id} href="/p/[id]" as={`/p/${item.show.id}`}>
          <div className="match-item">{item.show.name}
            <img src={item.show.image && item.show.image.original} className="match-image" />

            <a href={item.url}>подробнее</a>
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
  const res = await fetch('http://api.tvmaze.com/search/shows?q=sport');
  const TVShows = await res.json();

  console.log(TVShows[0].show.image.original);

  return { TVShows };
};


export default Home
