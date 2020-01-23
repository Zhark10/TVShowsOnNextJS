import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from '../../components/layout'
import { Card, CardText, CardTitle, CardBody, Button, CardSubtitle, CardImg, Jumbotron, Container } from 'reactstrap';
const defaultImage = 'https://kardelenguzellik.com/wp-content/uploads/2016/10/orionthemes-featured-image-2.jpg';

const Show = () => {
  const [show, setShow] = React.useState(null);

  const router = useRouter();
  React.useEffect(() => {
    const getDataByShow = async () => {
      const res = await fetch(`http://api.tvmaze.com/shows/${router.query.id}`);
      const TVShow = await res.json();
      setShow(TVShow)
    }
    getDataByShow()
  }, [])

  return (
    show &&
    <Layout>
      <Head>
        <title>Current match</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <CardImg src={(show.image && show.image.original) || defaultImage} alt="Card image cap" />
        <CardBody>
          <CardTitle>{show.name}</CardTitle>
          <CardSubtitle>Category: {show.type}</CardSubtitle>
          <CardText>Language: {show.language}</CardText>
          <CardText>Official site: {show.officialSite}</CardText>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default Show
