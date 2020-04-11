import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 17.4em;
  display: flex;
`;
const InputElement = styled.input`
  height: 3em;
  width: 75%;
  font-size: 0.6em;
  padding-left: 1.2em;
  border: none;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 2px 10px 0 rgba(18, 5, 72, 0.1);
  color: ${({ theme }) => theme.fonts.fontPrimary};

  ::placeholder {
    opacity: 0.5;
    color: ${({ theme }) => theme.fonts.fontPrimary};
    letter-spacing: 0.5px;
  }
`;

const ButtonElement = styled.button`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.input.primary};
  color: ${({ theme }) => theme.colors.background.secondaryColor};
  font-size: 0.52em;
  font-weight: 600;
  position: relative;
  left: -1px;
  border: none;
  border-radius: 0 4px 4px 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.input.primaryOnHover};
  }
`;

const InputParagraph = styled.p`
  color: ${({ theme }) => theme.fonts.fontPrimary};
  font-size: 0.55em;
  font-family: ${({ theme }) => theme.fonts.fontFamilyPrimary};
  line-height: 1.3em;
  position: absolute;
  margin-top: 5.2em;
`;

const BoldParagraph = styled.span`
  font-weight: 800;
`;

const HeroInput = ({ placeholderValue }) => {
  const [inputClicked, setInputClicked] = useState(false);
  const [subscriptionValue, setSubscriptionValue] = useState(
    "ENTERATE PRIMERO"
  );

  const handleSubmit = event => {
    if (!inputClicked) {
      setInputClicked(true);
      setSubscriptionValue("SUSCRITO");
    }
    event.preventDefault();
  };
  return (
    <>
      <FormWrapper method="post" onSubmit={handleSubmit}>
        <InputElement placeholder={placeholderValue} type="text" />
        <ButtonElement type="submit">{subscriptionValue}</ButtonElement>
      </FormWrapper>
      {inputClicked ? (
        <InputParagraph>
          <BoldParagraph>¡Genial!</BoldParagraph> Te vas a enterar primero
          cuando el Podcast esté online.
        </InputParagraph>
      ) : (
        ""
      )}
    </>
  );
};

export default HeroInput;
