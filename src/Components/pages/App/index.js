import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import About from 'Components/pages/About';
import Banner from 'Components/molecules/Banner';
import SiteLinks from 'Components/molecules/SiteLinks';
import ScrollToTop from 'Components/atoms/ScrollToTop';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

const App = () => {
  fetch(`${process.env.REACT_APP_CALEB_API_URL}/skills`)
    .then(res => res.json())
    .then(json => console.log(json));
  return (
    <ApolloProvider client={client}>
      <ScrollToTop />
      <SiteLinks />
      <Banner />
      <About />
    </ApolloProvider>
  );
};

export default App;
