/* eslint-disable import/prefer-default-export */
import fetch from 'isomorphic-unfetch';

const getShows = async (text = 'sport') => {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
  const TVShows = await res.json();
  return TVShows;
};

const getShowById = async showId => {
  const res = await fetch(`http://api.tvmaze.com/shows/${showId}`);
  const show = await res.json();
  return show;
};

const initShow = async () => ({ TVShows: await getShows() });

export const ShowService = {
  initShow,
  getShows,
  getShowById,
};
