import React from 'react';
import {
  Flex,
  Text,
  Container,
  Heading,
  chakra,
  Link,
  Image,
} from '@chakra-ui/react';
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const EmailTemplate = ({
  setSubmitted,
  setEmailView,
  submitInput,
  submitFiles,
}) => {
  const backToMain = () => {
    setSubmitted(false);
    setEmailView(false);
  };

  const listOfImages = submitFiles.map((file, key) => {
    return (
      <Image
        boxSize="200px"
        objectFit="cover"
        src={URL.createObjectURL(file)}
        key={key}
        alt={file.name}
      />
    );
  });
  return (
    <AnimatePresence>
      <Flex
        as={motion.div}
        direction="column"
        justify="center"
        align="center"
        m="20px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        fontFamily="Open Sans"
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          p="20px"
          border="solid 1px"
          minW={{ base: '360px', sm: '440px', md: '720px', lg: '960px' }}
          bg="white"
        >
          <Heading as="h1" size="xl" my="16px">
            Hello {submitInput.firstName} {submitInput.lastName}!
          </Heading>
          <Heading as="h2" size="md" my="16px">
            Thanks for registering! Below are your form details!
          </Heading>
          <Flex direction="column" gap="8px" mt="24px">
            <Text fontWeight="bold">Email: {submitInput.email}</Text>
            <Text fontWeight="bold">
              Description: {submitInput.description}
            </Text>
            <Text fontWeight="bold">Uploaded Images:</Text>
            <Flex gap="16px" wrap="wrap">
              {listOfImages}
            </Flex>
          </Flex>
        </Flex>
        <Text mt="16px">
          Click{' '}
          <Link fontWeight="bold" onClick={backToMain}>
            here
          </Link>{' '}
          to go back
        </Text>
      </Flex>
    </AnimatePresence>
  );
};

export default EmailTemplate;
