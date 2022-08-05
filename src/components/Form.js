import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

const Form = () => {
  const defaultFields = {
    firstName: '',
    lastName: '',
    description: '',
    email: '',
  };

  const [userInput, setUserInput] = useState(defaultFields);
  const [submit, setSubmit] = useState({});

  const changeHandler = event => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    setSubmit(userInput);
  };

  const isEmpty =
    userInput.firstName === '' ||
    userInput.lastName === '' ||
    userInput.description === '' ||
    userInput.email === '';

  const emailRegEx = /^\S+@\S+\.\S+$/;
  const emailTest = emailRegEx.test(userInput.email);

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
          <Box minW={{ base: '318px', sm: '398px', md: '300px' }}>
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

          <Box minW={{ base: '318px', sm: '398px', md: '300px' }}>
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

        <Box my="8px">
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

        <Box my="8px">
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

        <Flex justify="flex-end" mt="32px">
          <Button
            size="lg"
            variant="outline"
            type="submit"
            isDisabled={isEmpty || !emailTest}
          >
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Form;
