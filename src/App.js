import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, theme } from '@chakra-ui/react';

import Form from './components/Form';
import SuccessfulSubmission from './components/SuccessfulSubmission';

function App() {
  //Toggle form submission status
  const [submitted, setSubmitted] = useState(false);
  //Store user's input
  const [submitInput, setSubmitInput] = useState({});
  //Store user's uploaded images
  const [submitFiles, setSubmitFiles] = useState([]);
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex justify="center" align="center" minH="100vh" m="20px">
          {submitted ? (
            <SuccessfulSubmission
              setSubmitted={setSubmitted}
              submitInput={submitInput}
            />
          ) : (
            <Form
              setSubmitted={setSubmitted}
              setSubmitInput={setSubmitInput}
              setSubmitFiles={setSubmitFiles}
            />
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
