import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: absolute;
  align-items: center;
  justify-content: space-around;
  margin-top: 25px;
`;

const NavbarList = styled.ul`
  width: 70%;

  display: flex;
  justify-content: flex-end;
  list-style: outside none none;
`;

const NavbarItem = styled.li`
  padding: 0px 0.7rem;
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  font-size: 0.8em;
`;

const LogoWrapper = styled.span`
  height: auto;
  width: auto;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <NavbarList>
        <NavbarItem>about</NavbarItem>
        <NavbarItem>contact</NavbarItem>
        <NavbarItem>mail</NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
