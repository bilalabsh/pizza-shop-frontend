import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import PizzaCard from '../card/pizza';
import axios from 'axios';

const Main = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pizzas')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => {
        console.error('Error fetching pizza data:', error);
      });
  }, []);

  return (
    <Box
      padding="2rem"
      margin="2rem"
      borderRadius="lg"
    >
      <Box display="flex" flexWrap="wrap" justifyContent="center" gap="40px" >
        {pizzas.map((pizza, index) => (
          <PizzaCard
            key={index}
            imageSrc={pizza.imageSrc}
            pizzaName={pizza.pizzaName}
            prices={pizza.prices}
            description={pizza.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Main;
