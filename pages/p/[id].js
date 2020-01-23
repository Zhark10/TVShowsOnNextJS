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
      console.log(TVShow)
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

      <div className="show-content">
        <Card>
          <CardImg src={(show.image && show.image.original) || defaultImage} alt="Card image cap" />
          <CardBody>
            <CardTitle>{show.name}</CardTitle>
            <CardSubtitle>Category: {show.type}</CardSubtitle>
            <CardText>Language: {show.language}</CardText>
            <CardText>Premiered: {show.premiered}</CardText>
            Time: {show.schedule.time}<br />
            Days: {show.schedule.days.map(elem => <span>{elem},</span>)}<br />
            <Button onClick={() => window.open(show.url)}>Official site</Button>
          </CardBody>
        </Card>
      </div>

      <style jsx>{`
      .show-content {
        width: 50%;
        margin: 0 auto;
      }
    `}</style>
    </Layout>
  )
}

export default Show
