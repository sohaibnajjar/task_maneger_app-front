import styled from "styled-components";
import { useState } from "react";
import { taskPost } from "../taskAppServesis/DataManipulation";
import { Button, Input } from "@chakra-ui/react";

const Container = styled.form`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
      <Input
        placeholder="Enter Task Here"
        required
        name="task"
        value={formVal.task}
        onChange={(e) => onChange(e)}
        marginBottom={2}
        borderWidth={3}
      />

      <Button
        w={"25%"}
        colorScheme="blue"
        background={"#b3e9ff"}
        m={"auto"}
        border="2px"
        onClick={onClose}
        type="submit"
        variant="outline"
      >
        Save
      </Button>
    </Container>
  );
};

export default Form;
