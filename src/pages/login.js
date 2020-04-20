import React, { useState, useContext } from "react";
import { useForm } from "../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/utils/validators";
import Input from "../components/formElements/Input";
import { AuthContext } from "../context/authContext";
import Navbar from "../components/landing/Navbar/Navbar";

const Login = () => {
  const auth = useContext(AuthContext);
  const [formState, InputHandler] = useForm({
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
    auth.login();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
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
          href="/auth"
        >
          Not Registered?{" "}
        </a>
      </form>
    </div>
  );
};
export default Login;
