import React from "react";
import styled from "styled-components";

const HeroImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 11.5em;

  img {
    height: auto;
    width: auto;
  }
`;

const HeroImage = ({ img, img2X, alt }) => {
  return (
    <HeroImageWrapper>
      <img src={img} srcSet={`${img} 1x, ${img2X} 2x`} alt={alt} />
    </HeroImageWrapper>
  );
};

export default HeroImage;
