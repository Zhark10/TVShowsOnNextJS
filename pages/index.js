import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';

const Home = ({ TVShows }) => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      All shows
    </div>

    {
      TVShows.map(item => (
        <Link key={item.show.id} href="/p/[id]" as={`/p/${item.show.id}`}>
          <Card>
            <CardBody>
              <CardHeader>Hello Next.js!</CardHeader>
              <br />
              <CardText>Bootstrap 4 power!</CardText>
              <Button color="danger">OK</Button>
            </CardBody>
          </Card>
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
    `}</style>
  </Layout>
)

Home.getInitialProps = async function () {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=sport');
  const TVShows = await res.json();
  return { TVShows };
};


export default Home
