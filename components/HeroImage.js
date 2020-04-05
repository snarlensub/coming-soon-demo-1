import React from "react";
import styled from "styled-components";

const heroImageWrapper = styled.img``;

const HeroImage = ({ img, img2X, alt }) => {
  return <img src={img} srcSet={`${img} 1x, ${img2X} 2x`} alt={alt} />;
};

export default HeroImage;
