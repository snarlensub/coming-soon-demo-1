import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import FBLogo from "./FBLogo";
import InstagramLogo from "./InstagramLogo";
import TwitterLogo from "./TwitterLogo";

const FooterWrapper = styled.div`
  display: none;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.input.primary};

  @media (max-width: 600px) {
    display: flex;
    height: 4.8em;
  }

  @media (max-width: 800px) and (orientation: landscape) {
    display: flex;
    height: 4.8em;
  }
`;

const FooterList = styled.ul`
  width: 100%;

  display: flex;
  justify-content: center;
  list-style: outside none none;
  align-items: baseline;
`;

const FooterItem = styled.li`
  padding: 0px 1rem;
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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>
          <a href="https://www.instagram.com/">
            <InstagramLogo />
          </a>
        </FooterItem>
        <FooterItem>
          <a href="https://www.facebook.com/">
            <FBLogo />
          </a>
        </FooterItem>
        <FooterItem>
          <a href="https://www.twitter.com/">
            <TwitterLogo />
          </a>
        </FooterItem>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
