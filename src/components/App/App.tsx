import React from 'react';
import {Box, Container} from '@mui/material';
import {app, appContainer} from './AppStyle';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <Box
      sx={app}
    >
      <Container sx={appContainer}>
        <MainPage />
      </Container>
    </Box>
  );
}

export default App;
