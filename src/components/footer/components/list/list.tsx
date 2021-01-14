import React from 'react';

import { Box, Typography, List as ListMUI } from '@material-ui/core';

import { generate } from 'shortid';

import { StyledListItem } from './styles';

type ItemProps = {
  title: string;
  link?: string;
};

type ListProps = {
  title: string;
  items?: ItemProps[];
};

const List = ({ title, items, children }: ListProps) => (
  <Box padding="10px">
    <Typography variant="h6">{title}</Typography>
    {items && (
      <ListMUI>
        {items.map((item) => (
          <StyledListItem button key={generate()}>
            {item.title}
          </StyledListItem>
        ))}
      </ListMUI>
    )}
    {children}
  </Box>
);

export default List;
