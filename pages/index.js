import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Jumbotron, Badge, ListGroupItem, ListGroup, Input } from 'reactstrap';
import Layout from '../components/layout';
import { useDebouncedSearch } from '../utils/hooks/useDebouncedSearch';
import { ShowService } from '../service/get-shows';
import Colors from '../utils/colors';

const Home = ({ TVShows }) => {
  const inputRef = useRef(null);
  const { inputText, setInputText, searchResults } = useDebouncedSearch(
    ShowService.getShows,
  );

  const initialText = 'sport';
  const [wordIndex, setWordIndex] = React.useState(0);

  useEffect(() => {
    if (inputRef.current && wordIndex < 6) {
      const interval = setTimeout(() => {
        const text = initialText.slice(0, wordIndex);
        setInputText(text);
        inputRef.current.value = text;
        setWordIndex(current => current + 1);
      }, 500);
      return () => clearTimeout(interval);
    }
    return () => {};
  }, [inputRef, wordIndex]);

  const category = inputText || 'SPORT';
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
        <h1 className="display-4">Category: {category.toUpperCase()}?</h1>
        <p className="lead">here are all TV-shows by category</p>
      </Jumbotron>

      <Input
        ref={inputRef}
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
