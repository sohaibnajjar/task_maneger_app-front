import styled from "styled-components";
import {
  Discription,
  Footer,
  Hero,
  Title,
} from "../components/globalComponents/PageLayout";
import AboutPageBG from "../photos/aboutPage.png";

const AboutPage = () => {
  return (
    <>
      <Hero bg={AboutPageBG}>
        <Discription>About Page ... </Discription>
        <Title c="#fff">there is not that much to talk about 😁 </Title>
      </Hero>
      <Footer>
        <Title c="#fff">
          This project is all about trying new things technologies and so on .
        </Title>
        <Title c="#fff">
          in this project, you can find the repository of all the technologies
          that have been used by clicking on see repo on the home page .
        </Title>
      </Footer>
    </>
  );
};

export default AboutPage;
