import React from 'react';
import {Paper, Typography} from '@mui/material';
import DataPanel from '../DataPanel/DataPanel';

function MainPage() {
  return (
    <Paper elevation={3}>
      <Typography
        variant={'h2'}
        component={'header'}
        textAlign={'center'}
        py={2}
      >
        Список контактов
      </Typography>
      <DataPanel />
    </Paper>
  );
}

export default MainPage;
