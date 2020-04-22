import React from "react";
import styled from "styled-components";

const HeroImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6.1em;

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 720px) {
    height: 100%;
    width: 100%;
    position: relative;
    top: -10%;

    img {
      height: auto;
      width: 25em;
    }
  }

  @media (min-width: 400px) and (orientation: landscape) {
    top: 0;
    display: flex;
    justify-content: flex-end;
    right: 2%;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {

    left: 12%;
   
    img {
        100%;
    }

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
