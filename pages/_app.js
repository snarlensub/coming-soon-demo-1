import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";

const theme = {
  colors: {
    backgroundPrimary: "#FFBFB7",
    primary: "#0070f3"
  },
  fonts: {
    fontPrimary: "#FFFFFF",
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
