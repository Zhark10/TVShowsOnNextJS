import React from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Button,
  CardSubtitle,
  CardImg,
} from 'reactstrap';
import Layout from '../../components/layout';
import { ShowService } from '../../service/get-shows';

const defaultImage =
  'https://kardelenguzellik.com/wp-content/uploads/2016/10/orionthemes-featured-image-2.jpg';

const Show = ({ show }) => {
  const showMoreInfo = React.useCallback(() => window.open(show.url), [
    show.url,
  ]);
  return (
    <Layout>
      <div className="show-content">
        <Card>
          <CardImg
            src={(show.image && show.image.original) || defaultImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{show.name}</CardTitle>
            <CardSubtitle>Category: {show.type}</CardSubtitle>
            <CardText>Language: {show.language}</CardText>
            <CardText>Premiered: {show.premiered}</CardText>
            Time: {show.schedule.time}
            <br />
            Days:{' '}
            {show.schedule.days.map(elem => (
              <span key={elem}>{elem},</span>
            ))}
            <br />
            <Button onClick={showMoreInfo}>Official site</Button>
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
  );
};

Show.getInitialProps = async ({ query: { id } }) => {
  const show = await ShowService.getShowById(id);
  return { show };
};

export default Show;
