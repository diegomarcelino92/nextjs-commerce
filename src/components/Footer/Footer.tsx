import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { MAX_WIDTH } from '../../helpers/theme';

import List from './components/List';

const Footer: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    bgcolor="#333333"
    color="#ffffff"
    height="400px"
    padding="20px 0 50px 0"
  >
    <Box
      width="100%"
      maxWidth={MAX_WIDTH}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <List title="ATENDIMENTO" items={[{ title: 'Central de atendimento' }]} />
      <List
        title="MINHA CONTA"
        items={[
          { title: 'Entrar' },
          { title: 'Cadastrar' },
          { title: 'Dados pessoais' },
          { title: 'Endereço' },
        ]}
      />
      <List
        title="EMPRESA"
        items={[{ title: 'Sobre nós' }, { title: 'Trabalhe conosco' }]}
      />
      <List title="PROMOÇÕES" />
    </Box>
  </Box>
);

export default Footer;
