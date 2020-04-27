import React, { useContext, useState } from "react";
import Input from "../components/formElements/Input";
import ImageUpload from "../components/formElements/ImageUpload";
import { VALIDATOR_REQUIRE } from "../shared/utils/validators";
import { useForm } from "../hooks/form-hook";
import { AuthContext } from "../context/authContext";
import Book from "../components/formElements/book";

const NewBooking = () => {
  const auth = useContext(AuthContext);
  const [formState, InputHandler] = useForm({
    day_input: {
      value: null,
      isValid: false,
    },
  });
  const [sanctuary_input, setSanctuaryInput] = useState("Gir");
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
          sanctuary: sanctuary_input,
          creator: auth.userID,
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        alert(responseData.message);
        throw new Error(responseData.message);
      }
      console.log(responseData);
      alert("Succesfully Booked");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Book></Book>
      <select
        id="sanctuary_input"
        name="Sanctuary"
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20"
        onChange={(e) => {
          setSanctuaryInput(e.target.value);
        }}
      >
        <option value="Gir">Gir</option>
        <option value="Karnala">Karnala</option>
        <option value="Jim Corbett">Jim Corbett</option>
      </select>
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
