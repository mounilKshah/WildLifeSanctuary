import React, { useContext } from "react";
import Input from "../components/formElements/Input";
import ImageUpload from "../components/formElements/ImageUpload";
import { VALIDATOR_REQUIRE } from "../shared/utils/validators";
import { useForm } from "../hooks/form-hook";
import { AuthContext } from "../context/authContext";

const NewBooking = () => {
  const auth = useContext(AuthContext);
  const [formState, InputHandler] = useForm({
    sanctuary_input: {
      value: "",
      isValid: false,
    },
    day_input: {
      value: null,
      isValid: false,
    },
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const response = await fetch("http://localhost:5000/api/bookings/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: formState.inputs.day_input.value,
          sanctuary: formState.inputs.sanctuary_input.value,
          creator: auth.userID,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        alert(responseData.message);
        throw new Error(responseData.message);
      }
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        id="sanctuary_input"
        element="input"
        type="text"
        label="Sanctuary"
        errorText={"please enter a valid Sanctuary"}
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
      />
      <Input
        id="day_input"
        element="input"
        type="date"
        label="day"
        errorText={"please enter a valid date"}
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
    </form>
  );
};
export default NewBooking;
