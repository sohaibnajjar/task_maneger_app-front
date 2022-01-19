import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 20px;
  color: #000;
  font-family: Sriracha;
  height: 9vh;
  min-height: 7vh;
`;
const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 15px;
`;
const NavElement = styled.li``;
const NavBar = ({ pages }) => {
  return (
    <NavBarContainer>
      <NavList>
        {pages.map((page) => (
          <NavElement key={page.pathName}>
            <NavLink to={page.path} activeclassname="active">
              {page.pathName}
            </NavLink>
          </NavElement>
        ))}
      </NavList>
      <div>email</div>
    </NavBarContainer>
  );
};

export default NavBar;
