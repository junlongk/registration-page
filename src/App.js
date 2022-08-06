import React, { useState } from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';

import { theme } from './styles/theme';
import Form from './components/Form';
import SuccessfulSubmission from './components/SuccessfulSubmission';
import EmailTemplate from './components/EmailTemplate';

function App() {
  //Toggle form submission status
  const [submitted, setSubmitted] = useState(false);
  //Toggle view to email template component
  const [emailView, setEmailView] = useState(false);
  //Store user's input
  const [submitInput, setSubmitInput] = useState({});
  //Store user's uploaded images
  const [submitFiles, setSubmitFiles] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex justify="center" align="center" minH="100vh" m="20px">
          {submitted && !emailView ? (
            <SuccessfulSubmission
              setSubmitted={setSubmitted}
              setEmailView={setEmailView}
              submitInput={submitInput}
            />
          ) : submitted && emailView ? (
            <EmailTemplate
              setSubmitted={setSubmitted}
              setEmailView={setEmailView}
              submitInput={submitInput}
              submitFiles={submitFiles}
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
