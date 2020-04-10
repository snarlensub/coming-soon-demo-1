import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 17.4em;
  display: flex;
  padding-bottom: 7.5em;
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

const HeroInput = ({ placeholderValue }) => {
  return (
    <FormWrapper action="#">
      <InputElement placeholder={placeholderValue} type="text" />
      <ButtonElement>ENTERATE PRIMERO</ButtonElement>
    </FormWrapper>
  );
};

export default HeroInput;
