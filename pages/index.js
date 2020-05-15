import React from 'react';
import Link from 'next/link';
import { Jumbotron, Badge, ListGroupItem, ListGroup, Input } from 'reactstrap';
import Layout from '../components/layout';
import useDebouncedSearch from '../utils/hooks/USE_DebouncedSearch';
import useExampleText from '../utils/hooks/USE_ExampleText';
import useCheckErrors from '../utils/hooks/USE_CheckErrors';
import { ShowService } from '../service/get-shows';
import Colors from '../utils/colors';

const Home = ({ TVShows }) => {
  const { inputText, setInputText, searchResults } = useDebouncedSearch(
    ShowService.getShows,
  );

  const inputRef = useExampleText(setInputText);
  useCheckErrors(inputText, setInputText);

  const category = inputText || 'SOME TEXT';
  const shows = searchResults.result || TVShows;
  return (
    <Layout>
      <Jumbotron
        style={{
          marginBottom: 12,
          backgroundColor: Colors.mainColor.dark87,
          color: Colors.secondaryColor.light0,
        }}
      >
        <h1 className="display-4">Category: {category.toUpperCase()}...</h1>
        <p className="lead">here are all TV-shows by category</p>
      </Jumbotron>

      <Input
        ref={inputRef}
        value={inputText}
        placeholder="category"
        onChange={e => setInputText(e.target.value)}
      />

      <ListGroup>
        {shows.map(item => (
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
    </Layout>
  );
};

Home.getInitialProps = ShowService.initShow;

export default Home;
