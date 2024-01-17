import {
  useDisclosure,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  FormLabel,
  ModalBody,
  FormControl,
  Input,
} from '@chakra-ui/react';
import React from 'react';

export const InfoModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  handleInfoSubmit: (i: string) => void;
  label: string;
}> = ({ isOpen, handleInfoSubmit, onClose, label }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [value, setValue] = React.useState('');
  const handleChange = (event: any): void => setValue(event.target.value);

  const handleNext = () => {
    handleInfoSubmit(value);
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={'2xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter {label}</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{label}</FormLabel>
              <Input ref={initialRef} placeholder={label} value={value} onChange={handleChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleNext}>
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
