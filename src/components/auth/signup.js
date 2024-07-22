import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Nav from '../navbar/navbar.tsx';

const LoginPage = () => {
  return (
    <>
    <Nav />
    <Container maxW="ms" centerContent padding="8vh">
      <Box
        mt={10}
        p={6}
        boxShadow="lg"
        borderRadius="md"
        w="400px"
        bg={useColorModeValue('white', 'gray.700')}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Register
        </Heading>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Enter Name</FormLabel>
            <Input type="name" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Enter Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Enter Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="red" size="lg">
            Register
          </Button>
        </Stack>
        <Text mt={4} textAlign="center">
        <ChakraLink as={Link} to="/login" color="black" _hover={{ textDecoration: 'underline' }}>
              Click Here To Login
            </ChakraLink>
        </Text>
      </Box>
    </Container>
    </>
    );
};

export default LoginPage;
