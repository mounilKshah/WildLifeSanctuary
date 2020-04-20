import React, { useReducer, useCallback } from "react";
import Input from "../components/formElements/Input";
import { VALIDATOR_REQUIRE } from "../shared/utils/validators";
import { useForm } from "../hooks/form-hook";

const NewPhoto = () => {
  const [formState, InputHandler] = useForm({
    title_input: {
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
        id="title_input"
        element="input"
        type="text"
        label="Title"
        errorText={"please enter a valid title"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
      />
      <button type="submit" disabled={!formState.isValid}>
        SUBMIT
      </button>
    </form>
  );
};
export default NewPhoto;
