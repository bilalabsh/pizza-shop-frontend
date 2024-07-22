// src/components/card/PizzaCard.js
import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  Button,
  Select,
  Box,
  Center,
  Flex,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useCart } from '../cart/context';
import PizzaDetailsModal from '../pizzaDetails/pizzaDetails';

const PizzaCard = ({ imageSrc, pizzaName, prices, description }) => {
  const [selectedSize, setSelectedSize] = useState('small'); 
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customQuantity, setCustomQuantity] = useState(4); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const toast = useToast();
  const { addToCart } = useCart();

  const calculateTotalPrice = () => {
    const quantity = selectedQuantity === 'custom' ? customQuantity : selectedQuantity;
    const price = prices[selectedSize];
    return price * quantity;
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setSelectedQuantity(value === 'custom' ? 'custom' : parseInt(value));
  };

  const handleCustomQuantityChange = (event) => {
    setCustomQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    const quantity = selectedQuantity === 'custom' ? customQuantity : selectedQuantity;
    const totalPrice = calculateTotalPrice();
    const newItem = {
      name: pizzaName,
      size: selectedSize,
      quantity,
      price: prices[selectedSize],
      total: totalPrice,
      imageSrc,
    };

    addToCart(newItem);

    toast({
      title: "Item Added to Cart",
      description: `${pizzaName} (${selectedSize}, Quantity: ${quantity}) has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const totalPrice = calculateTotalPrice();

  return (
    <Card width="350px" height="auto" mb="4" border="1px" borderColor="gray.200" boxShadow="5px 10px 30px 5px rgba(0, 0, 0, 0.2)">
      <CardBody>
        <Center>
          <Image
            src={imageSrc}
            alt={pizzaName}
            borderRadius="lg"
            height="200px"
            cursor="pointer"
            onClick={() => setIsModalOpen(true)} 
          />
        </Center>
        <Stack mt="4" spacing="3">
          <Heading size="md" textAlign="center">
            {pizzaName}
          </Heading>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack>
              <Text>Variants:</Text>
              <Select value={selectedSize} onChange={handleSizeChange} size="sm">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Select>
            </Stack>
            <Stack>
              <Text>Quantity:</Text>
              <Select value={selectedQuantity} onChange={handleQuantityChange} size="sm">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value="custom">Custom</option>
              </Select>
              {selectedQuantity === 'custom' && (
                <Input
                  type="number"
                  min={4}
                  value={customQuantity}
                  onChange={handleCustomQuantityChange}
                  size="sm"
                  mt={2}
                />
              )}
            </Stack>
          </Stack>
          {selectedSize && (
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="xl">Price: {totalPrice} Rs/-</Text>
              <Button colorScheme="red" fontSize="lg" padding="1rem" onClick={handleAddToCart}>
                ADD TO CART
              </Button>
            </Flex>
          )}
        </Stack>
      </CardBody>
      <PizzaDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pizza={{ name: pizzaName, imageSrc, description }}
      />
    </Card>
  );
};

export default PizzaCard;
