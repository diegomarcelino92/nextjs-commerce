import React from 'react';

import { Box } from '@material-ui/core';

import { MAX_WIDTH } from '../../helpers/theme';

import List from './components/List';

const Footer: React.FC = () => (
  <Box
    display="flex"
    justifyContent="center"
    bgcolor="#e0e0e0"
    height="400px"
    padding="20px 0 50px 0"
    component="footer"
    width="100%"
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
