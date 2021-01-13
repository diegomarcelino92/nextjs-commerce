import React from 'react';

import { AppBar, IconButton, Button, Box, Badge } from '@material-ui/core';
import { Person, PersonAdd, Apple, ShoppingBasket } from '@material-ui/icons';

import { MAX_WIDTH } from '../../helpers/theme';

import HeaderInput from './components/HeaderInput';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="center" width="100%" padding="12px 0">
        <Box
          display="flex"
          alignItems="center"
          maxWidth={MAX_WIDTH}
          width="100%"
        >
          <Box width="200px">
            <Apple />
          </Box>
          <Box flex="1">
            <HeaderInput />
          </Box>
          <Box padding="0 10px">
            <Button color="inherit" endIcon={<Person />}>
              Entrar
            </Button>
          </Box>
          <Box padding="0 10px">
            <Button color="inherit" endIcon={<PersonAdd />}>
              Cadastrar
            </Button>
          </Box>
          <Box padding="0 10px">
            <IconButton color="inherit">
              <Badge badgeContent="10" color="secondary">
                <ShoppingBasket />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
