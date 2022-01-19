import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #132d38;
`;

export const Container = styled.div`
  background: linear-gradient(
      90deg,
      rgba(86, 245, 255, 0.5) 0%,
      rgba(255, 142, 250, 0.5) 100%
    ),
    linear-gradient(0deg, rgba(158, 152, 255, 0.2), rgba(158, 152, 255, 0.2)),
    url(${(props) => (props.bg ? props.bg : "")});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 350px;
  height: 550px;
  background: #fcfcfa;
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;
export const Title = styled.h1`
  font-family: "Sriracha", cursive;
  font-size: 25px;
  color: ${(props) => (props.c ? props.c : "#000")};
  width: 80%;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  align-items: center;
`;
export const Input = styled.input`
  background-color: #fff;
  height: 50px;
  width: 80%;
  border-radius: 18px;
  box-shadow: 0px 6px 10px 10px rgba(0, 0, 0, 0.05);
  font-family: "Passion One", cursive;
  padding-left: 30px;
  font-size: 18px;

  ::placeholder {
    color: #be54d1;
  }
  :focus {
    background-color: #fff;
  }
`;
export const Button = styled.button`
  background-color: #d560ff;
  color: #fff;
  font-weight: bold;
  height: 40px;
  width: 40%;
  border-radius: 20px;
`;
export const Seperator = styled.div`
  height: 4px;
  width: 90%;
  background-color: #e6e6e6;
`;
export const Other = styled.a`
  font-family: "Sriracha", cursive;
`;
export const Hero = styled.div`
  background-image: url(${(props) => (props.bg ? props.bg : "")});
  min-height: 70vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  background-position: center;
  padding: 10px;
`;

export const HeroTitle = styled.div`
  text-align: center;
  color: #fff;
  font-size: 45px;
  font-family: Amita;
`;

export const Discription = styled.p`
  font-size: 40px;
  font-family: Coiny;
  color: #fff;
  width: 70%;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 30px;
  justify-content: center;
`;
export const HeroButton = styled.button`
  min-width: 15%;
  padding: 17px;
  border-radius: 8px;
  font-family: Sriracha;
  font-size: 20px;
  color: #fff;
  background-color: #3aacc6;
`;

export const Footer = styled.div`
  font-family: Sriracha;
  color: #fff;
  font-size: 28px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 20px;
  min-height: 21vh;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;
