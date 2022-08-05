import React, { useState, useEffect, useRef } from 'react';
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

const Form = () => {
  const defaultFields = {
    firstName: '',
    lastName: '',
    description: '',
    email: '',
  };

  const [userInput, setUserInput] = useState(defaultFields);
  const [submitInput, setSubmitInput] = useState({});
  const [files, setFiles] = useState([]);

  const fileInputField = useRef(null);

  //Check if all input fields are empty
  const isEmpty =
    userInput.firstName === '' ||
    userInput.lastName === '' ||
    userInput.description === '' ||
    userInput.email === '';

  //Email validation
  const emailRegEx = /^\S+@\S+\.\S+$/;
  const emailTest = emailRegEx.test(userInput.email);

  //Handler for input field changes
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
  };

  //Utilize useRef to extract file input functionality to "Add Image" button
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

  //Generate uploaded images to Image component
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
    <Flex
      direction="column"
      border="solid 1px"
      borderRadius="8px"
      p="20px"
      maxW={{ base: '360px', sm: '440px', md: '720px', lg: '960px' }}
    >
      <form onSubmit={submitHandler}>
        <Flex direction="row" wrap="wrap" justify="space-evenly" gap="8px">
          <Box
            minW={{ base: '318px', sm: '398px', md: '312px', lg: '420px' }}
            minH="96px"
          >
            <FormControl isRequired isInvalid={userInput.firstName === ''}>
              <FormLabel>First Name</FormLabel>
              <Input
                variant="filled"
                value={userInput.firstName}
                onChange={changeHandler}
                name="firstName"
                placeholder="John"
              />
              <FormErrorMessage>First name is required.</FormErrorMessage>
            </FormControl>
          </Box>

          <Box
            minW={{ base: '318px', sm: '398px', md: '312px', lg: '420px' }}
            minH="96px"
          >
            <FormControl isRequired isInvalid={userInput.lastName === ''}>
              <FormLabel>Last Name</FormLabel>
              <Input
                variant="filled"
                value={userInput.lastName}
                onChange={changeHandler}
                name="lastName"
                placeholder="Doe"
              />
              <FormErrorMessage>Last name is required.</FormErrorMessage>
            </FormControl>
          </Box>
        </Flex>

        <Box my="8px" minH="136px">
          <FormControl isRequired isInvalid={userInput.description === ''}>
            <FormLabel>Description</FormLabel>
            <Textarea
              variant="filled"
              value={userInput.description}
              onChange={changeHandler}
              name="description"
              placeholder="My name is John Doe."
            />
            <FormErrorMessage>Please enter a description.</FormErrorMessage>
          </FormControl>
        </Box>

        <Box my="8px" minH="96px">
          <FormControl
            isRequired
            isInvalid={userInput.email === '' || !emailTest}
          >
            <FormLabel>Email</FormLabel>
            <Input
              variant="filled"
              value={userInput.email}
              onChange={changeHandler}
              name="email"
              placeholder="johndoe@abc.xyz"
            />
            {userInput.email !== '' && !emailTest ? (
              <FormErrorMessage>
                Please enter a valid email address.
              </FormErrorMessage>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </Box>

        <Flex direction="column">
          {files.length > 0 && <Text my="8px">Images</Text>}
          <Flex gap="16px" wrap="wrap">
            {listOfImages}
          </Flex>
        </Flex>

        <Flex justify="space-between" align="center" mt="32px">
          <Button
            leftIcon={<AddIcon />}
            size="md"
            variant="outline"
            colorScheme="blue"
            onClick={uploadHandler}
            minW="140px"
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
            colorScheme="blue"
            type="submit"
            isDisabled={isEmpty || !emailTest}
            minW="140px"
          >
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Form;
