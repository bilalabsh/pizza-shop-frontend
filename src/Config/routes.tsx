import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <Box
      as={RouterLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: 'blue.500',
      }}
      to={to}
    >
      {children}
    </Box>
  );
};

export default NavLink;
