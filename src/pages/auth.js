import React, { useState } from "react";
import { useForm } from "../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/utils/validators";
import Input from "../components/formElements/Input";

const Auth = () => {
  const [formState, InputHandler] = useForm({
    name_input: {
      value: "",
      isValid: false,
    },
    email_input: {
      value: "",
      isValid: false,
    },
    password_input: {
      value: "",
      isValid: false,
    },
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        id="name_input"
        element="input"
        type="text"
        label="Name"
        errorText={"please enter a valid name"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
      />
      <Input
        id="email_input"
        element="input"
        type="email"
        label="Email"
        errorText={"please enter a valid email"}
        validators={[VALIDATOR_EMAIL()]}
        onInput={InputHandler}
      />
      <Input
        id="password_input"
        element="input"
        type="password"
        label="Password"
        errorText={"please enter a valid password longer than 6 characters"}
        validators={[VALIDATOR_MINLENGTH(6)]}
        onInput={InputHandler}
      />
      <button type="submit" disabled={!formState.isValid}>
        SUBMIT
      </button>
      <a
        class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
        href="/login"
      >
        Actually i did register lol{" "}
      </a>
    </form>
  );
};
export default Auth;
