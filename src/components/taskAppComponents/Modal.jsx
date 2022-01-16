import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import Form from "../taskAppComponents/Form";

const BasicUsage = ({ setIsUpdated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme="pink">
        Add Task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Task Adding Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form setIsUpdated={setIsUpdated} onClose={onClose} />
          </ModalBody>

          <ModalFooter m={"auto"} p={6} fontSize={18} color={"#555"}>
            Thank you
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BasicUsage;
