import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalHeader from '../../atoms/GlobalHeader';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalHeader />
      <Router>
        <Switch>
          <Route path="/" exact component={() => 'Hello there'} />
          <Route path="/posts" exact component={() => 'Posts page'} />
        </Switch>
      </Router>
      {/* <Posts /> */}
    </ApolloProvider>
  );
};

export default App;
