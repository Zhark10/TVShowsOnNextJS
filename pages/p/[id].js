import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from '../../components/layout'
import { Card, CardText, CardTitle, CardBody, Button, CardSubtitle, CardImg, Jumbotron, Container } from 'reactstrap';
const defaultImage = 'https://kardelenguzellik.com/wp-content/uploads/2016/10/orionthemes-featured-image-2.jpg';

const Show = () => {
  const [item, setShow] = React.useState(null); 

  const router = useRouter();
  React.useEffect(() => {
    const getDataByShow = async () => {
      const res = await fetch(`http://api.tvmaze.com/shows/${router.query.id}`);
      const TVShow = await res.json();
      // setShow(TVShow)
    }
    getDataByShow()
  }, [])

  return (
    item &&
    <Layout>
      <Head>
        <title>Current match</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
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
    </Layout>
  )
}

export default Show
