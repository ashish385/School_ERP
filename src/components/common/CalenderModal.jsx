import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react'

const CalenderModal = ({ isOpen, onOpen, onClose, deleteEvent }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className=' text-center'>{deleteEvent.title}</ModalHeader>
          <ModalCloseButton Button />
          <ModalBody className="text-center py-5">
            Are you want to Delete this event
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CalenderModal