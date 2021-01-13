import React, { Fragment } from 'react';

import { Box } from '@material-ui/core';

import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      <Box component="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
