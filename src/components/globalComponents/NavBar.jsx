import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  background-color: #ae8781;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px 30px;
  color: #fff;
`;
const NavList = styled.ul`
  display: flex;
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
