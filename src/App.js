import React from 'react';
import { ChakraProvider, Box, Grid, Stack, theme } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Form from './components/Form';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid minH="100vh" m="20px">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Stack justifySelf="center">
            <Form />
          </Stack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
