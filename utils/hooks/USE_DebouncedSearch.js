import React from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';

const useDebouncedSearch = searchFunction => {
  const [inputText, setInputText] = React.useState('');

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 300),
  );

  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    }
    const response = await debouncedSearchFunction(inputText);
    return response;
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export default useDebouncedSearch;
