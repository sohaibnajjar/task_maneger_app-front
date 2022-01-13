import styled from "styled-components";
import { useState } from "react";
import { taskPost } from "../servesis/DataManipulation";
import { Button, ButtonGroup, FormLabel, Input } from "@chakra-ui/react";

const Container = styled.form`
  text-transform: capitalize;
`;

const Form = ({ setIsUpdated, onClose }) => {
  const [formVal, setFormVal] = useState({
    task: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    taskPost(formVal);
    setIsUpdated(true);
    setFormVal({ task: "", title: "" });
    onClose();
  };

  const onChange = (e) => {
    setFormVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Container onSubmit={(e) => onSubmit(e)}>
      <FormLabel fontSize={25}>Task</FormLabel>
      <Input
        required
        name="task"
        placeholder="Enter Task Here"
        value={formVal.task}
        onChange={(e) => onChange(e)}
        marginBottom={5}
      />
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue" border="2px" onClick={onClose} type="submit">
          Save
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default Form;
