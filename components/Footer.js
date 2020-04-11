import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const FooterWrapper = styled.div`
  display: none;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: flex;
    border: 3px solid red;
    height: 3em;
  }
`;

const FooterList = styled.ul`
  width: 100%;

  display: flex;
  justify-content: center;
  list-style: outside none none;
`;

const FooterItem = styled.li`
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

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterItem>
          <a href="https://www.instagram.com/">Instagram</a>
        </FooterItem>
        <FooterItem>
          <a href="https://www.facebook.com/">Facebook</a>
        </FooterItem>
        <FooterItem>
          <a href="https://www.twitter.com/">Twitter</a>
        </FooterItem>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
