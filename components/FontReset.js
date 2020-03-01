import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  html { font-size: calc(1em + 1vw) }
`;

const GlobalStyle = () => {
  return <GlobalStyleWrapper />;
};

export default GlobalStyle;
