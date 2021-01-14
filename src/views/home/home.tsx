import React from 'react';

import { Box } from '@material-ui/core';

import { AcUnit, Refresh, BlurCircular, ChildCare } from '@material-ui/icons';

import StyledComponent from '../../components/styled-component';

const Home: React.FC = () => (
  <Box>
    <Box
      width="100%"
      height="280px"
      borderRadius="10px"
      bgcolor="primary.light"
      marginTop="20px"
    />

    <Box display="flex">
      <StyledComponent icon={<AcUnit />} />
      <StyledComponent icon={<Refresh />} />
      <StyledComponent icon={<BlurCircular />} />
      <StyledComponent icon={<ChildCare />} />
    </Box>

    <Box display="flex" justifyContent="space-between" margin="0 0 30px 0">
      <Box
        flex="1"
        marginRight="10px"
        height="200px"
        borderRadius="10px"
        bgcolor="primary.light"
      />
      <Box
        flex="1"
        marginRight="10px"
        height="200px"
        borderRadius="10px"
        bgcolor="primary.light"
      />
      <Box
        flex="1"
        height="200px"
        borderRadius="10px"
        bgcolor="primary.light"
      />
    </Box>
  </Box>
);

export default Home;
