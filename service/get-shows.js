/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-unfetch';

const getShows = async (text = 'sport') => {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
  const TVShows = await res.json();
  return TVShows;
};

const initShow = async () => ({ TVShows: await getShows() });

export const ShowService = {
  getShows,
  initShow,
};
