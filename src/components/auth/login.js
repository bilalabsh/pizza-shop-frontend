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

const RegisterPage = () => {
  return (
    <>  
      <Nav />
      <Container maxW="mb-5" centerContent padding="10vh">
        <Box
          mt={10}
          p={6}
          boxShadow="lg"
          borderRadius="md"
          w="400px"
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Login
          </Heading>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Enter Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Enter Password</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <Button colorScheme="red" size="lg">
              <Link to="/register" style={{ color: 'blue.500' }}>
                LOGIN
              </Link>
            </Button>
          </Stack>
          <Text mt={4} textAlign="center">
          <ChakraLink as={Link} to="/register" color="black" _hover={{ textDecoration: 'underline' }}>
              Click Here To Register
            </ChakraLink>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
