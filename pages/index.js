import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Jumbotron, Badge, ListGroupItem, ListGroup } from 'reactstrap';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import Layout from '../components/layout';

class Home extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=sport');
    const TVShows = await res.json();

    return { TVShows };
  }

  useDebouncedSearch = searchFunction => {
    const [inputText, setInputText] = React.useState('');

    const debouncedSearchFunction = useConstant(() =>
      AwesomeDebouncePromise(searchFunction, 300),
    );

    const searchResults = useAsync(async () => {
      if (inputText.length === 0) {
        return [];
      }
      return debouncedSearchFunction(inputText);
    }, [debouncedSearchFunction, inputText]);

    return {
      inputText,
      setInputText,
      searchResults,
    };
  };

  render() {
    const { TVShows } = this.props;
    return (
      <Layout>
        <Jumbotron>
          <h1 className="display-3">All shows</h1>
          <p className="lead">here are all the sports TV-shows</p>
        </Jumbotron>

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
  }
}

export default Home;
