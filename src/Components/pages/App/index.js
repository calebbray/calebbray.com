import React from 'react';

import About from 'Components/pages/About';
import Banner from 'Components/molecules/Banner';
import SiteLinks from 'Components/molecules/SiteLinks';
import ScrollToTop from 'Components/atoms/ScrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <SiteLinks />
      <Banner />
      <About />
    </>
  );
};

export default App;
