import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/form-hook";
import { AuthContext } from "../context/authContext";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../shared/utils/validators";
import Input from "../components/formElements/Input";
import ImageUpload from "../components/formElements/ImageUpload";

const Auth = () => {
  const auth = useContext(AuthContext);
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
    gender_input: {
      value: "",
      isValid: false,
    },
    age_input: {
      value: "",
      isValid: false,
    },
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.inputs.name_input.value,
          email: formState.inputs.email_input.value,
          password: formState.inputs.password_input.value,
          gender: formState.inputs.gender_input.value,
          age: formState.inputs.age_input.value,
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
      <Input
        id="age_input"
        element="input"
        type="text"
        label="Age"
        errorText={"please enter a valid age"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
      />
      <Input
        id="gender_input"
        element="input"
        type="text"
        label="Gender"
        errorText={"please enter a valid gender"}
        validators={[VALIDATOR_REQUIRE()]}
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
        class="f6 f5-l link bg-animate black-80 hover-grow dib pa3 ph4-l"
        to="/login"
      >
        I have registered{" "}
      </Link>
    </form>
  );
};
export default Auth;
