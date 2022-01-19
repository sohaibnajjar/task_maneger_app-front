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
          this project is all about trying new things technologis and so on{" "}
        </Title>
        <Title c="#fff">
          in this project you will finde that i mintioned all the technologies
          that used in each page
        </Title>
      </Footer>
    </>
  );
};

export default AboutPage;
