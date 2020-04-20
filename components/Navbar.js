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
  margin-top: 2em;

  @media (max-width: 600px) {
    margin-left: 1em;
    justify-content: flex-start;
    width: auto;
  }
`;

const NavbarList = styled.ul`
  width: 70%;

  display: flex;
  justify-content: flex-end;
  list-style: outside none none;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavbarItem = styled.li`
  padding: 0px 0.7rem;
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  font-size: 0.6em;
  font-weight: 800;

  a {
      text-decoration: inherit;
      color: inherit;
      cursor: auto;

      &:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
      }
  }

  }
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
        <NavbarItem>
          <a href="https://www.instagram.com/">Instagram</a>
        </NavbarItem>
        <NavbarItem>
          <a href="https://www.facebook.com/">Facebook</a>
        </NavbarItem>
        <NavbarItem>
          <a href="https://www.twitter.com/">Twitter</a>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
