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

  @media (max-width: 720px) {
    margin-left: 1em;
    justify-content: flex-start;
    width: auto;
  }

  @media (max-width: 850px) and (orientation: landscape) {
    justify-content: flex-start;

    span {
      margin-left: 3%;
    }
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

  @media (max-width: 720px) {
    display: none;
  }

  @media (max-width: 850px) and (orientation: landscape) {
    display: none;
  }
`;

const NavbarItem = styled.li`
  padding: 0px 0.7rem;
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  font-size: 0.6em;
  font-weight: 800;
  opacity: 1;
  transition: all ease-in-out 0.15s;

  a {
      text-decoration: inherit;
      color: inherit;
      cursor: pointer;
    }

      &:visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
      }

      &:hover {
        opacity: 0.6;
        color: ${({ theme }) => theme.fonts.fontPrimary};
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
          <a target="_blank" href="https://www.instagram.com/speakingit.co/">
            Instagram
          </a>
        </NavbarItem>
        <NavbarItem>
          <a target="_blank" href="https://www.facebook.com/speakingitco">
            Facebook
          </a>
        </NavbarItem>
        <NavbarItem>
          <a target="_blank" href="https://www.twitter.com/speakingitco">
            Twitter
          </a>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
