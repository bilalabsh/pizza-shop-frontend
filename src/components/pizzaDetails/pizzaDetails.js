import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,    
  Stack,
} from '@chakra-ui/react';

const PizzaDetailsModal = ({ isOpen, onClose, pizza }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent height="80vh">
        <ModalHeader>{pizza.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4} textAlign="center">
            <Image src={pizza.imageSrc} alt={pizza.name} borderRadius="lg" height="400px" />
            <Text>{pizza.description}</Text>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" onClick={onClose}>
            CLOSE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PizzaDetailsModal;
