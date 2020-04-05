import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  width: 17.4em;
  display: flex;
`;
const InputElement = styled.input`
  height: 5em;
  width: 75%;
`;

const ButtonElement = styled.button`
  width: 50%;
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
