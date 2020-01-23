import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import { Card, CardText, CardTitle, CardBody, Button, CardSubtitle, CardImg, Jumbotron, Container } from 'reactstrap';
const defaultImage = 'https://kardelenguzellik.com/wp-content/uploads/2016/10/orionthemes-featured-image-2.jpg';

const Home = ({ TVShows }) => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">All shows</h1>
        <p className="lead">here are all the sports TV-shows</p>
      </Container>
    </Jumbotron>

    <div className="cards">
      {
        TVShows.map(item => (
          <div key={item.show.id} className="cards-item">
            <Card >
              <CardImg src={(item.show.image && item.show.image.original) || defaultImage} alt="Card image cap" />
              <CardBody>
                <CardTitle>{item.show.name}</CardTitle>
                <CardSubtitle>{item.show.type}</CardSubtitle>
                <CardSubtitle>{item.score}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Link href="/p/[id]" as={`/p/${item.show.id}`}>
                  <Button>Подробнее</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        ))
      }
    </div>

    <style jsx>{`
      .matches-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        padding: 24px;
      }
      .cards {
        display: flex;
        flex-wrap: wrap;
      }
      .cards-item {
        width: 20%;
      }
    `}</style>
  </Layout>
)

Home.getInitialProps = async function () {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=sport');
  const TVShows = await res.json();

  console.log(TVShows)
  return { TVShows };
};


export default Home
