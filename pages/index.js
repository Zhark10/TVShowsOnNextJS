import React from 'react';
import Link from 'next/link';
import { Jumbotron, Badge, ListGroupItem, ListGroup, Input } from 'reactstrap';
import Layout from '../components/layout';
import useDebouncedSearch from '../utils/hooks/USE_DebouncedSearch';
import useExampleText from '../utils/hooks/USE_ExampleText';
import { ShowService } from '../service/get-shows';
import Colors from '../utils/colors';

const Home = ({ TVShows }) => {
  const { inputText, setInputText, searchResults } = useDebouncedSearch(
    ShowService.getShows,
  );

  const [errorIndex, setErrorIndex] = React.useState(-1);
  const errorMessages = [
    'F#CK! Too many letters!',
    'Don`t do this anymore please!',
  ];

  React.useEffect(() => {
    if (inputText && inputText.length > 15) {
      const timeout = setTimeout(() => {
        setErrorIndex(current => current + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [inputText]);

  React.useEffect(() => {
    if (
      inputText &&
      inputText.length > 15 &&
      errorIndex <= errorMessages.length - 1
    ) {
      setInputText(errorMessages[errorIndex]);
    } else {
      setErrorIndex(-1);
      setInputText('');
    }
  }, [errorIndex]);

  const inputRef = useExampleText(setInputText);

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
