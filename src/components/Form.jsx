import styled from "styled-components";
import { useState } from "react";

const Container = styled.form`
  text-transform: capitalize;
  background-color: #0453a3;
  padding: 10px;
  min-width: 100vw;
`;
const Input = styled.input`
  text-transform: capitalize;
  margin: 0px 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid #333;
  min-width: 200px;
  color: #000;
`;
const Button = styled.button`
  background-color: skyblue;
  padding: 10px 20px;
  border-radius: 5px;
  border: 2px solid #333;
`;

const Form = ({ statusPost, setIsUpdated }) => {
  const [formVal, setFormVal] = useState({
    task: "",
    title: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    statusPost(formVal);
    setIsUpdated(true);
    setFormVal({ task: "", title: "" });
  };

  const onChange = (e) => {
    setFormVal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Container onSubmit={(e) => onSubmit(e)}>
      <Input
        required
        name="task"
        placeholder="Enter Task Here"
        value={formVal.task}
        onChange={(e) => onChange(e)}
      />
      <Input
        required
        name="title"
        placeholder="Enter table name Here"
        value={formVal.title}
        onChange={(e) => onChange(e)}
      />

      <Button type="submit">click me</Button>
    </Container>
  );
};

export default Form;
