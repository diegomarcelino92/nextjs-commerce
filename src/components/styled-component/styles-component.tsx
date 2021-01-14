import React from 'react';

import { Typography } from '@material-ui/core';

import { Container, Spinning } from './styles';

type StyledComponentProps = {
  icon: React.ReactNode;
};

const StyledComponent = ({ icon }: StyledComponentProps) => (
  <Container>
    <Typography>I am a styled component</Typography>
    <Spinning>{icon}</Spinning>
  </Container>
);

export default StyledComponent;
