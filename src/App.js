import React from 'react';
import { ChakraProvider, Box, Flex, theme } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Form from './components/Form';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex justify="center" align="center" minH="100vh" m="20px">
          <Form />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
