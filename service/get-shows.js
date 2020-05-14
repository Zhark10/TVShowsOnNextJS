const getShows = (text = 'sport') => {
  (async () => {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${text}`);
    const shows = await res.json();
    return { shows };
  })();
};

export default getShows;
