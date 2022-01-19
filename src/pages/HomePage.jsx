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
          <HeroButton>
            <a
              href="https://drive.google.com/file/d/13f2HksBr1p514ZVk00aI48zHvKigeG17/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              See My CV
            </a>
          </HeroButton>

          <HeroButton>
            <a
              href="https://github.com/sohaibnajjar/task_maneger_app-front"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front-End Repo
            </a>
          </HeroButton>

          <HeroButton>
            <a
              href="https://github.com/sohaibnajjar/task_maneger_app-back"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front-End Repo
            </a>
          </HeroButton>
        </ButtonContainer>
      </Hero>
      <Footer>
        In this Project I put some of my knowladge to Showcase my Work
      </Footer>
    </>
  );
};

export default HomePage;
