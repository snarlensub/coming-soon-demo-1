import React from "react";
import styled from "styled-components";

const HeroTextTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  margin-bottom: 15%;
  max-width: 6em;
`;

const HeroTextSubtitle = styled.h3`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  max-width: 14em;
`;

const HeroTextWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  word-break: break-word;
  max-width: 14em;
  padding: 0px 10% 0px 10%;
`;

const HeroText = () => {
  return (
    <HeroTextWrapper>
      <HeroTextTitle>Un Podcast. Sin vueltas.</HeroTextTitle>
      <HeroTextSubtitle>
        Hablamos e iteramos sobre tech, diseño y desarrollo. Lo freelance y lo
        corporativo.
      </HeroTextSubtitle>
    </HeroTextWrapper>
  );
};

export default HeroText;
