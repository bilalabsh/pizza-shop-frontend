import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { to, children } = props;

  return (
    <Box
      as={Link}
      to={to}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'blue.500',
      }}
    >
      {children}
    </Box>
  );
};

export default function Nav() {
  return (
    <>
      <Box
        className='navbar'
        width='100%'
        paddingLeft='10px'
        paddingRight='10px'
        backgroundColor='white'
        boxShadow='5px 10px 50px 2px rgba(0, 0, 0, 0.2)' 
      >
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'}>
          <Box display="flex" alignItems="center">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Text fontSize="xl" pl={1.5} color="black">Shey Pizza</Text>
              <img
                src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"
                alt="Pizza Emoji"
                style={{ marginLeft: '10px', height: '36px' }}
              />
            </Link>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Link to="/login">Login</Link>
              <Link to="/cart">Cart</Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
