import React from "react";
import styled from "styled-components";

const HeroTextTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  margin-bottom: 0.4em;
  max-width: 6em;
  font-size: 2em;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimaryBold};
  line-height: 1.1em;
`;

const HeroTextSubtitle = styled.h3`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  max-width: 15.4em;
  font-size: 0.85em;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  line-height: 1.2em;
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
  top: 3em;
`;

const HeroText = () => {
  return (
    <HeroTextWrapper>
      <HeroTextTitle>Un Podcast. Sin Vueltas.</HeroTextTitle>
      <HeroTextSubtitle>
        Hablamos e iteramos sobre tech, diseño y desarrollo. Lo freelance, y lo
        corporativo.
      </HeroTextSubtitle>
    </HeroTextWrapper>
  );
};

export default HeroText;
