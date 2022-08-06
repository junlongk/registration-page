import React, { useState, useRef } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Form = ({ setSubmitted, setSubmitInput, setSubmitFiles }) => {
  //Toggle form submitting progress
  const [submitting, setSubmitting] = useState(false);
  //User's input
  const [userInput, setUserInput] = useState({});
  //User's uploaded images
  const [files, setFiles] = useState([]);
  //Utilize useRef to extract file input functionality
  const fileInputField = useRef(null);

  //Check if all input fields are empty
  const isEmpty =
    !userInput.firstName ||
    !userInput.lastName ||
    !userInput.description ||
    !userInput.email;

  //Email validation
  const emailRegEx = /^\S+@\S+\.\S+$/;
  const emailTest = emailRegEx.test(userInput.email);

  //Handler for input field's onFocus toggle
  const focusHandler = event => {
    const { name, value } = event.target;
    if (!value) {
      setUserInput({
        ...userInput,
        [name]: '',
      });
    }
  };

  //Handler for input field's changes
  const changeHandler = event => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  //Handler for submit button
  const submitHandler = event => {
    event.preventDefault();
    setSubmitInput(userInput);
    setSubmitFiles(files);
    setSubmitting(true);

    //Simulate API event
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 3000);
  };

  //Extract file input functionality to "Add Image" button
  const uploadHandler = () => {
    fileInputField.current.click();
  };

  //Handler for file uploads
  const addFileHandler = event => {
    let fileList = event.target.files;
    let filesArr = [];
    for (let i = 0; i < fileList.length; i++) {
      filesArr.push(fileList[i]);
    }
    if (filesArr.length > 0) {
      setFiles(files => [...files, ...filesArr]);
    }
  };

  //Generate uploaded images to Image component for preview
  const listOfImages = files.map((file, key) => {
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        direction="column"
        borderRadius="8px"
        p="20px"
        maxW={{ base: '360px', sm: '440px', md: '720px', lg: '960px' }}
        boxShadow="dark-blue"
        bg="white"
        fontFamily="Open Sans"
      >
        <form onSubmit={submitHandler}>
          <Flex direction="row" wrap="wrap" justify="space-evenly" gap="8px">
            <Box
              minW={{ base: '318px', sm: '398px', md: '312px', lg: '420px' }}
              minH="96px"
            >
              <FormControl isRequired isInvalid={userInput.firstName === ''}>
                <FormLabel fontWeight="bold">First Name</FormLabel>
                <Input
                  variant="flushed"
                  value={userInput.firstName}
                  onFocus={focusHandler}
                  onChange={changeHandler}
                  name="firstName"
                  placeholder="John"
                  type="text"
                  isDisabled={submitting}
                />
                <FormErrorMessage>First name is required.</FormErrorMessage>
              </FormControl>
            </Box>

            <Box
              minW={{ base: '318px', sm: '398px', md: '312px', lg: '420px' }}
              minH="96px"
            >
              <FormControl isRequired isInvalid={userInput.lastName === ''}>
                <FormLabel fontWeight="bold">Last Name</FormLabel>
                <Input
                  variant="flushed"
                  value={userInput.lastName}
                  onFocus={focusHandler}
                  onChange={changeHandler}
                  name="lastName"
                  placeholder="Doe"
                  type="text"
                  isDisabled={submitting}
                />
                <FormErrorMessage>Last name is required.</FormErrorMessage>
              </FormControl>
            </Box>
          </Flex>

          <Box my="8px" minH="136px">
            <FormControl isRequired isInvalid={userInput.description === ''}>
              <FormLabel fontWeight="bold">Description</FormLabel>
              <Textarea
                variant="flushed"
                value={userInput.description}
                onFocus={focusHandler}
                onChange={changeHandler}
                name="description"
                placeholder="My name is John Doe."
                isDisabled={submitting}
              />
              <FormErrorMessage>Please enter a description.</FormErrorMessage>
            </FormControl>
          </Box>

          <Box my="8px" minH="96px">
            <FormControl
              isRequired
              isInvalid={
                userInput.email === '' || (userInput.email && !emailTest)
              }
            >
              <FormLabel fontWeight="bold">Email</FormLabel>
              <Input
                variant="flushed"
                value={userInput.email}
                onFocus={focusHandler}
                onChange={changeHandler}
                name="email"
                placeholder="johndoe@abc.xyz"
                isDisabled={submitting}
              />
              {userInput.email && !emailTest ? (
                <FormErrorMessage>
                  Please enter a valid email address.
                </FormErrorMessage>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>

          <Flex direction="column">
            {files.length > 0 && (
              <Text my="8px" fontWeight="bold">
                Images
              </Text>
            )}
            <Flex gap="16px" wrap="wrap">
              {listOfImages}
            </Flex>
          </Flex>

          <Flex justify="space-between" align="center" mt="32px">
            <Button
              leftIcon={<AddIcon />}
              size="md"
              variant="outline"
              colorScheme="sgxgreen"
              onClick={uploadHandler}
              minW="140px"
              isDisabled={submitting}
            >
              Add Image
              <input
                type="file"
                ref={fileInputField}
                onChange={addFileHandler}
                multiple
                accept="image/*"
                style={{ display: 'none' }}
              />
            </Button>

            <Button
              size="lg"
              variant="solid"
              colorScheme="sgxgreen"
              type="submit"
              isDisabled={isEmpty || !emailTest}
              isLoading={submitting}
              loadingText={submitting ? 'Saving' : null}
              minW="140px"
            >
              Save
            </Button>
          </Flex>
        </form>
      </Flex>
    </AnimatePresence>
  );
};

export default Form;
