import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";

const theme = {
  colors: {
    backgroundPrimary: "#FFBFB7",
    primary: "#0070f3",
    background: {
      mainColor: "#FBBCB6",
      secondaryColor: "#ffffff"
    }
  },
  fonts: {
    fontPrimary: "#120548",
    fontFamilyPrimary: "sans-serif"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
