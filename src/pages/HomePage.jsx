import {
  ButtonContainer,
  Discription,
  Footer,
  Hero,
  HeroButton,
  HeroTitle,
} from "../components/globalComponents/PageLayout";
import HomePageBG from "../photos/HomePage.png";

const HomePage = () => {
  return (
    <>
      <Hero bg={HomePageBG}>
        <HeroTitle>Welcome</HeroTitle>
        <Discription>you are in my home page </Discription>
        <ButtonContainer>
          <HeroButton>See My CV</HeroButton>
          <HeroButton>Contact Me...</HeroButton>
        </ButtonContainer>
      </Hero>
      <Footer>
        In this Project I put some of my knowladge to Showcase my Work
      </Footer>
    </>
  );
};

export default HomePage;
