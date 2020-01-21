import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalHeader from '../../atoms/GlobalHeader';
import { routes } from '../../../routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalHeader />
        <Switch>
          {routes.map(
            (route, i) =>
              route.component && (
                <Route key={i} path={route.path} exact component={route.component} />
              )
          )}
        </Switch>
      </Router>
      {/* <Posts /> */}
    </ApolloProvider>
  );
};

export default App;
