import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});
/* because we're not using the first parameter, but we still need to access the 
second one, we can use an underscore to serve as a placeholder for the first param */
const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
