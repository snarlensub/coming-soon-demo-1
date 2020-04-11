import React from "react";
import styled from "styled-components";
import HeroInput from "../components/HeroInput";
import MusicService from "../components/MusicService";

const HeroTextTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  margin-bottom: 0.4em;
  max-width: 6em;
  font-size: 2em;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimaryBold};
  line-height: 1.1em;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.8em;
  }
`;

const HeroTextSubtitle = styled.h3`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  max-width: 15.4em;
  font-size: 0.85em;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  line-height: 1.3em;
  margin-bottom: 2.3em;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  word-break: break-word;
  max-width: 14em;
  padding: 0px 10% 0px 12%;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 3%;
  }
`;

const HeroText = () => {
  return (
    <HeroTextWrapper>
      <HeroTextTitle>Un Podcast. Sin Vueltas.</HeroTextTitle>
      <HeroTextSubtitle>
        Hablamos e iteramos sobre tech, diseño y desarrollo. Lo freelance, y lo
        corporativo.
      </HeroTextSubtitle>
      <HeroInput placeholderValue={"Tipea tu email"} />
      <MusicService />
    </HeroTextWrapper>
  );
};

export default HeroText;
