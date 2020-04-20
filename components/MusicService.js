import React from "react";
import styled from "styled-components";
import AppleLogo from "./AppleLogo";
import SpotifyLogo from "./SpotifyLogo";

const MusicServiceWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 93%;
  padding-top: 7.5em;

  @media (max-width: 768px) {
    padding-top: 3.5em;
    padding-bottom: 1em;
    max-width: 100%;
    flex-direction: column;
  }
`;

const MusicServiceParagraph = styled.p`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  max-width: 15.4em;
  font-size: 0.65em;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  line-height: 1.3em;

  @media (max-width: 768px) {
    padding-bottom: 1.5em;
  }
`;

const MusicServiceIcons = styled.div`
  a:first-child {
    margin-right: 20px;
  }
`;

const MusicService = () => {
  return (
    <MusicServiceWrapper>
      <MusicServiceParagraph>Escuchanos próximamente en</MusicServiceParagraph>
      <MusicServiceIcons>
        <a href="https://www.google.com">
          <SpotifyLogo />
        </a>
        <a>
          <AppleLogo />
        </a>
      </MusicServiceIcons>
    </MusicServiceWrapper>
  );
};

export default MusicService;
