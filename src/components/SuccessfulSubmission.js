import React from 'react';
import {
  Flex,
  Circle,
  Icon,
  Text,
  Button,
  Container,
  Heading,
  chakra,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const SuccessfulSubmission = ({ setSubmitted, submitInput }) => {
  const backToForm = () => {
    setSubmitted(false);
  };
  return (
    <AnimatePresence>
      <Flex
        as={motion.div}
        direction="column"
        justify="center"
        align="center"
        p="20px"
        maxW={{ base: '360px', sm: '440px', md: '720px', lg: '960px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ChakraBox
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: [0.5, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Circle
            size={{ base: '120px', sm: '200px' }}
            bg="green"
            color="white"
            my="24px"
          >
            <Icon
              as={CheckIcon}
              w={{ base: '90px', sm: '150px' }}
              h={{ base: '90px', sm: '150px' }}
            />
          </Circle>
        </ChakraBox>
        <Container my="24px">
          <Heading as="h1" size="xl">
            Hello {submitInput.firstName}!
          </Heading>
          <Text>
            Email has been sent to {submitInput.email}, please check your inbox
            for the form details.
          </Text>
        </Container>
        <Button color="green.300" onClick={backToForm} my="24px">
          Back To Form
        </Button>
      </Flex>
    </AnimatePresence>
  );
};

export default SuccessfulSubmission;
