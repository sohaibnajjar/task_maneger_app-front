import styled from "styled-components";

export const StyledContainer = styled.div`
  background-image: url(${(props) => (props.bg ? props.bg : "")});
  background-size: cover;
  background-position-y: center;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 60px;
  font-family: Aldhabi;
  min-height: 90vh;
`;
