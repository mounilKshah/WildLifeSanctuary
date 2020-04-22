import React, { useReducer, useEffect } from "react";
import { validate } from "../../shared/utils/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  useEffect(() => {
    props.onInput(props.id, inputState.value, inputState.isValid);
  }, [props.id, props.onInput, inputState.value, inputState.isValid]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onBlur={touchHandler}
        onChange={changeHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-20"
        id={props.id}
        rows={props.rows || 3}
        onBlur={touchHandler}
        onChange={changeHandler}
        value={inputState.value}
      ></textarea>
    );
  return (
    <div>
      <label
        className={`db fw6 lh-copy f6${
          !inputState.isValid && inputState.isTouched && "is-invalid"
        }`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};
export default Input;
