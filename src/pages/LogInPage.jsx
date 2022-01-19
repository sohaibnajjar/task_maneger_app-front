import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Form,
  Input,
  Other,
  Seperator,
  Title,
} from "../components/globalComponents/PageLayout";
import bg from "../photos/logIn.jpg";

const LogInPage = () => {
  const [formInfo, setFormInfo] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInfo);
    setFormInfo({
      userName: "",
      password: "",
    });
  };
  const handleOnChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };
  return (
    <Container bg={bg}>
      <Box>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            // required
            // type="email"
            placeholder="username or email"
            name="userName"
            value={formInfo.userName}
            onChange={handleOnChange}
          />
          <Input
            // required
            // type="password"
            placeholder="password"
            name="password"
            value={formInfo.password}
            onChange={handleOnChange}
          />
          <Button>SIGN IN</Button>

          <Seperator />
        </Form>
        <Other href="#">SIGN UP</Other>
      </Box>
    </Container>
  );
};

export default LogInPage;
