import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import "./index.css";

const theme = {
  colors: {
    backgroundPrimary: "#FFBFB7",
    primary: "#0070f3",
    background: {
      mainColor: "#FBBCB6",
      secondaryColor: "#ffffff"
    },
    input: {
      primary: "#110548",
      primaryOnHover: "#230E7A"
    }
  },
  fonts: {
    fontPrimary: "#120548",
    fontFamilyPrimary: "Soleil-Regular, sans-serif",
    fontFamilyPrimaryBold: "Soleil-ExtraBold, sans-serif",
    fontFamilyPrimarySemiBold: "Soleil-SemiBold, sans-serif"
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
