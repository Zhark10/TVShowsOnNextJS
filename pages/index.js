import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Jumbotron, Badge, ListGroupItem, ListGroup } from 'reactstrap';

const Home = ({ TVShows }) => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Jumbotron>
      <h1 className="display-3">All shows</h1>
      <p className="lead">here are all the sports TV-shows</p>
    </Jumbotron>

    <ListGroup>
      {
        TVShows.map(item => (
          <Link key={item.show.id} href="/show/[id]" as={`/show/${item.show.id}`}>
            <ListGroupItem className="justify-content-between" tag="a" href="#" action>
              {item.show.name + "      "}
              <Badge pill>Rating: {item.score}</Badge>
            </ListGroupItem>
          </Link>
        ))
      }
    </ListGroup>

    <style jsx>{`
      .matches-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding: 24px;
      }
      .list-group-item {
        cursor: pointer !important;
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
