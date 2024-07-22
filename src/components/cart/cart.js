// src/components/CartPage.js
import React from 'react';
import {
  Text,
  Image,
  Stack,
  Heading,
  Button,
  Flex,
  Container,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useCart } from './context';

const CartPage = () => {
  const { cartItems, removeFromCart, calculateTotalAmount } = useCart();

  return (
    <Container maxW="container.xl" py={6}>
      <Heading mb={6}>My Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>No items in the cart</Text>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Flex key={index} mb={4} alignItems="center" justifyContent="space-between">
              <Image src={item.imageSrc} alt={item.name} boxSize="70px" />
              <Stack>
                <Heading size="sm">{item.name} [{item.size}]</Heading>
                <Text>Price: {item.quantity} * {item.price} = {item.total}</Text>
                <Text>Quantity: {item.quantity}</Text>
              </Stack>
              <Button colorScheme="red" onClick={() => removeFromCart(item.name)}>Remove</Button>
            </Flex>
          ))}
          <Flex justifyContent="space-between" alignItems="center" mt={6}>
            <Heading size="lg">Total Amount: {calculateTotalAmount()} Rs/-</Heading>
            <Button colorScheme="green" size="lg">PAY NOW</Button>
          </Flex>
        </>
      )}
      <Button mt={6} colorScheme="blue" as={Link} to="/">Add More Items +</Button>
    </Container>
  );
};

export default CartPage;
