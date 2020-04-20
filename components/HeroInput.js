import React, { useState } from "react";
import styled from "styled-components";
import CustomForm from "../components/MailChimpForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url =
  "//speakingit.us4.list-manage.com/subscribe/post?u=d4b8ccc6c67bbf38b1ed6fe75&amp;id=12ac7e5da4";

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
      {/* <FormWrapper method="post" onSubmit={handleSubmit}>
        <InputElement placeholder={placeholderValue} type="text" />
        <ButtonElement type="submit">{subscriptionValue}</ButtonElement>
        <CustomForm />
      </FormWrapper>
      {inputClicked ? (
        <InputParagraph>
          <BoldParagraph>¡Genial!</BoldParagraph> Te vas a enterar primero
          cuando el Podcast esté online.
        </InputParagraph>
      ) : (
        ""
      )} */}
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => (
          <CustomForm
            status={status}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default HeroInput;
