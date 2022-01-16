import { useState } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const AlertDialogExample = ({ delTask, task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const deleteTask = (id) => {
    delTask(id);
    onClose();
  };

  return (
    <>
      <DeleteIcon
        marginLeft={"auto"}
        w={5}
        h={5}
        color={"#ff3737"}
        cursor={"pointer"}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Task
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose} marginRight={3}>
                Cancel
              </Button>

              <Button colorScheme="red" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDialogExample;
