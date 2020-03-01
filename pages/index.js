import Head from "next/head";
import React from "react";
import styled from "styled-components";
import FontReset from "../components/FontReset";
import { Reset } from "styled-reset";

const Title = styled.h1`
  font-size: 3.5em;
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  margin: 0;
  height: auto;
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.backgroundPrimary}; */
  background: linear-gradient(20deg, #f79b9b,#ffbebe);
  min-height: 100vh;
  
  
`;

const Hero = styled.section`
  display: flex;
  width: 100%;
  max-width: 30em;
  text-align: center;
  height: auto;
  justify-content: center;
`;

const Home = (props) => (
  <>
    <Reset />
    <FontReset />
    <HomeWrapper>
      <Hero>
        <Title>HEY THERE! COMING SOON</Title>
      </Hero>
    </HomeWrapper>
  </>
);

export default Home;
