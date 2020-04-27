import React, { useContext } from "react";
import Input from "../components/formElements/Input";
import ImageUpload from "../components/formElements/ImageUpload";
import { VALIDATOR_REQUIRE } from "../shared/utils/validators";
import { useForm } from "../hooks/form-hook";
import { AuthContext } from "../context/authContext";

const NewPhoto = () => {
  const auth = useContext(AuthContext);
  const [formState, InputHandler] = useForm({
    title_input: {
      value: "",
      isValid: false,
    },
    sanctuary_input: {
      value: "",
      isValid: false,
    },
    image_input: {
      value: null,
      isValid: false,
    },
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    //console.log(auth);
    //console.log(auth.userID);
    //console.log(formState);
    const formData = new FormData();
    formData.append("title", formState.inputs.title_input.value);
    formData.append("sanctuary", formState.inputs.sanctuary_input.value);
    formData.append("creator", auth.userID);
    formData.append("image", formState.inputs.image_input.value);
    console.log(auth.userID);
    try {
      const response = await fetch("http://localhost:5000/api/photos", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();
      if (!response.ok) {
        alert(responseData.message);
        throw new Error(responseData.message);
      }
      console.log(responseData);
      alert("Succesfully Submitted");
    } catch (err) {
      console.log(err);
    }
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

      <select
        id="sanctuary_input"
        name="Sanctuary"
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20"
      >
        <option value="Gir">Gir</option>
        <option value="Karnala">Karnala</option>
        <option value="Jim Corbett">Jim Corbett</option>
      </select>
      <ImageUpload
        id="image_input"
        onInput={InputHandler}
        errorText="Please add the image"
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
export default NewPhoto;
