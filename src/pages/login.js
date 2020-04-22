import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.inputs.email_input.value,
          password: formState.inputs.password_input.value,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        alert(responseData.message);
        throw new Error(responseData.message);
      }
      console.log(responseData);
      auth.login(responseData.user.id);
    } catch (err) {
      console.log(err);
    }
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
        <button
          className={`b ph3 pv2 input-reset ba b--black   pointer f6 dib ${
            !formState.isValid ? "bg-black" : "grow "
          }`}
          type="submit"
          disabled={!formState.isValid}
        >
          SUBMIT
        </button>
        <Link
          class="f f5-l link bg-animate black-80 hover-grow dib pa3 ph4-l"
          to="/auth"
        >
          Not Registered?{" "}
        </Link>
      </form>
    </div>
  );
};
export default Login;
