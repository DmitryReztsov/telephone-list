import React from 'react';
import {Box, Container, TextField} from '@mui/material';

interface IDataFilter {
  filter: string,
  change: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function DataFilter({filter, change}: IDataFilter) {
  return (
    <Box>
      <Container
        sx={{p: 2}}
      >
        <TextField
          id="sort"
          label="Искать по имени"
          variant="standard"
          type={'search'}
          sx={{ml: 2}}
          value={filter}
          onChange={change}
        />
      </Container>
    </Box>
  );
}

export default DataFilter;
