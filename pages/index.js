import Head from "next/head";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => (
  <div className='container'>
    <main>
      <Title>coming-soon</Title>
    </main>
  </div>
);

export default Home;
