import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/Home';
import History from './pages/History';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});
/* because we're not using the first parameter, but we still need to access the 
second one, we can use an underscore to serve as a placeholder for the first param */
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/history"
            element={<History />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
