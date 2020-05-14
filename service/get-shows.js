const getShows = async (text = 'sport') => {
  const res = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
  const TVShows = await res.json();
  return TVShows;
};

export default getShows;
