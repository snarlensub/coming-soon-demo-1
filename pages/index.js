import Head from "next/head";
import React from "react";
import styled from "styled-components";
import FontReset from "../components/FontReset";
import { Reset } from "styled-reset";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";

const heroImage = {
  img: "../static/SPKIT_Hero.png",
  img2X: "../static/SPKIT_Hero@2x.png",
  alt: "Hero Image - A male person holding a paper"
};

const Title = styled.h1`
  font-size: 3.5em;
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  margin: 0;
  height: auto;
`;

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: ${({ theme }) => theme.colors.backgroundPrimary}; */
  // background: linear-gradient(20deg, #f79b9b,#ffbebe);

  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  
`;

const Hero = styled.section`
  display: flex;
  width: 100%;
  max-width: 30em;
  text-align: center;
  height: auto;
  justify-content: center;
`;

const HalfPrimary = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background.mainColor};
  height: auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HalfSecondary = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background.secondaryColor};
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 9.9em;
  padding-bottom: 1em;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    height: 70vh;
  }
`;

const Home = props => (
  <>
    <Reset />
    <FontReset />
    <HomeWrapper>
      <HalfPrimary>
        <HeroImage
          img={heroImage.img}
          img2X={heroImage.img2X}
          alt={heroImage.alt}
        />
      </HalfPrimary>
      <HalfSecondary>
        <HeroText />
      </HalfSecondary>
    </HomeWrapper>
  </>
);

export default Home;
