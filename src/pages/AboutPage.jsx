import styled from "styled-components";
import { StyledContainer } from "../components/globalComponents/PageLayout";
import AboutPageBG from "../photos/aboutPage.jpeg";

const Container = styled.div`
  text-align: center;
`;

const AboutPage = () => {
  return (
    <StyledContainer bg={AboutPageBG}>
      <Container>About Page</Container>
      <Container>There is nothing here yet</Container>
    </StyledContainer>
  );
};

export default AboutPage;
