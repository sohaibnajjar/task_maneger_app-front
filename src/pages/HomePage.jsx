import styled from "styled-components";
import { StyledContainer } from "../components/globalComponents/PageLayout";
import HomePageBG from "../photos/homePage.jpeg";

const Container = styled.div`
  text-align: center;
`;
const Para = styled.p`
  font-size: 35px;
  text-align: center;
`;
const Discription = styled(Para)`
  font-size: 50px;
`;

const HomePage = () => {
  return (
    <StyledContainer bg={HomePageBG}>
      <Container>Welcome Sohaib Najjar</Container>
      <Discription>You are in your home page </Discription>
      <Para>You can move between your pages using the NavBar </Para>
    </StyledContainer>
  );
};

export default HomePage;
