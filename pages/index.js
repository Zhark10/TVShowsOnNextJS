import React from 'react';
import Link from 'next/link';
import { Jumbotron, Badge, ListGroupItem, ListGroup, Input } from 'reactstrap';
import Layout from '../components/layout';
import { useDebouncedSearch } from '../utils/hooks/useDebouncedSearch';
import getShows from '../service/get-shows';

const Home = ({ TVShows }) => {
  const { inputText, setInputText, searchResults } = useDebouncedSearch(
    await getShows(),
  );

  console.log(searchResults)

  return (
    <Layout>
      <Jumbotron>
        <h1 className="display-3">All shows</h1>
        <p className="lead">here are all the sports TV-shows</p>
      </Jumbotron>

      <Input
        placeholder="category"
        onChange={e => setInputText(e.target.value)}
      />

      <ListGroup>
        {TVShows.map(item => (
          <Link
            key={item.show.id}
            href="/show/[id]"
            as={`/show/${item.show.id}`}
          >
            <ListGroupItem
              className="justify-content-between"
              tag="a"
              href="#"
              action
            >
              {`${item.show.name}      `}
              <Badge pill>Rating: {item.score}</Badge>
            </ListGroupItem>
          </Link>
        ))}
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
  );
};

Home.getInitialProps = async () => ({ TVShows: await getShows() });

export default Home;
