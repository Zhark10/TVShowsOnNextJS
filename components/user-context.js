import * as React from 'react';
import { createContext, useState } from 'react';

export const MatchContext = createContext(null);

const MatchProvider = ({ children }) => {
    const [match, setCurrentMatch] = useState(null)

    const store = {
        currentMatch: [match, setCurrentMatch],
    }

    return (
        <MatchContext.Provider value={store}>
            {children}
        </MatchContext.Provider>
    )
}

export default MatchProvider;