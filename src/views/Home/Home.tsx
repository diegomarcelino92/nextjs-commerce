import React from 'react';

import { Typography } from '@material-ui/core';
import { AcUnit } from '@material-ui/icons';

import { Container, Spinning } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography>I am a styled component</Typography>
      <Spinning>
        <AcUnit />
      </Spinning>
    </Container>
  );
};

export default Home;
