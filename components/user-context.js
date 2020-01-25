import React, { createContext, useState } from 'react';

export const MatchContext = createContext(null);

const MatchProvider = ({ children }) => {
  const [match, setCurrentMatch] = useState(null);
  const [matches, setMatches] = useState(null);

  const store = {
    currentMatch: [match, setCurrentMatch],
    allMatches: [matches, setMatches],
  };

  return (
    <MatchContext.Provider value={store}>{children}</MatchContext.Provider>
  );
};

export default MatchProvider;
