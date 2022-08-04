import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
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

  return (
    <Flex
      direction="column"
      border="solid 1px"
      borderRadius="8px"
      p="20px"
      maxW={{
        base: '360px',
        sm: '440px',
        md: '720px',
        lg: '960px',
      }}
    >
      <form onSubmit={submitHandler}>
        <FormControl>
          <Flex direction="row" wrap="wrap" justify="space-evenly" gap="8px">
            <VStack
              minW={{
                base: '318px',
                sm: '398px',
                md: '300px',
              }}
            >
              <Text>First Name</Text>
              <Input
                value={userInput.firstName}
                onChange={changeHandler}
                name="firstName"
              />
            </VStack>
            <VStack
              minW={{
                base: '318px',
                sm: '398px',
                md: '300px',
              }}
            >
              <Text>Last Name</Text>
              <Input
                value={userInput.lastName}
                onChange={changeHandler}
                name="lastName"
              />
            </VStack>
          </Flex>

          <VStack mt="8px">
            <Text>Description</Text>
            <Textarea
              value={userInput.description}
              onChange={changeHandler}
              name="description"
            />
          </VStack>

          <VStack mt="8px">
            <Text>Email</Text>
            <Input
              value={userInput.email}
              onChange={changeHandler}
              name="email"
            />
          </VStack>

          <Button type="submit" m="16px">
            Save
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Form;
