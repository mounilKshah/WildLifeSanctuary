import React, { useState, useContext } from "react";
import Input from "./Input";
import { useForm } from "../../hooks/form-hook";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SeatPicker from "react-seat-picker";
import "./Book.css";
import Center from "react-center";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Book = () => {
  // const [formState, InputHandler] = useForm({
  //   sanctuary_input: {
  //     value: "",
  //     isValid: true,
  //   },
  // });
  const options = [
    {
      value: "gir",
      label: "Gir",
    },
    {
      value: "sgnp",
      label: "SGNP",
    },
    {
      value: "corbett",
      label: "Jim Corbett",
    },
  ];

  const [selectedValue, changeSelectedValue] = useState(null);
  const setDropdownValue = (selectedOption) => {
    console.log(selectedOption);
    changeSelectedValue(selectedOption);
  };

  const [startDate, changeDate] = useState(null);
  const updateDate = (date) => {
    changeDate(date);
  };

  const [insurance, setInsurance] = useState("yes");

  const changeInsurance = (event) => {
    setInsurance(event.target.value);
  };

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  const setMinutes = (date, mins) => {
    let result = new Date(date);
    result.setMinutes(mins);
    return result;
  };
  const setHours = (date, hours) => {
    let result = new Date(date);
    result.setHours(hours);
    return result;
  };

  const rows = [
    [
      { id: 1, number: 1, isReserved: true, tooltip: "Reserved by Sachin" },
      { id: 2, number: 2, isReserved: true, tooltip: "Driver" },
    ],
    [
      { id: 3, number: 1, tooltip: "Rs. 69", orientation: "east" },
      {
        id: 4,
        number: 2,
        orientation: "west",
        tooltip: "Rs. 420",
      },
    ],
    [
      {
        id: 5,
        number: 1,
        tooltip: "Reserved by himes",
        orientation: "east",
        isReserved: true,
      },
      { id: 6, number: 2, tooltip: "Rs. 69", orientation: "west" },
    ],
    [
      { id: 7, number: 1, tooltip: "Rs. 81", orientation: "east" },
      {
        id: 8,
        number: 2,
        tooltip: "reserved by moanil",
        orientation: "west",
        isReserved: true,
      },
    ],
  ];

  return (
    <form className="place-form">
      <br />
      <Select
        className="mt4"
        value={selectedValue}
        onChange={setDropdownValue}
        options={options}
        placeholder="Select Sanctuary"
      />
      <br />
      <DatePicker
        className="pa2"
        placeholderText="Select Date and Time"
        selected={startDate}
        showTimeSelect
        onChange={updateDate}
        minDate={new Date()}
        maxDate={addDays(new Date(), 14)}
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Safari time"
        dateFormat="MMMM d, h:mm aa"
        minTime={setHours(setMinutes(new Date(), 0), 9)}
        maxTime={setHours(setMinutes(new Date(), 30), 16)}
      />
      <Center className="pa4">
        <SeatPicker
          className="pa4 ba"
          id="seatpicker"
          rows={rows}
          maxReservableSeats={3}
          alpha
          visible
        />
      </Center>
      <FormControl className="pa4" component="fieldset">
        <FormLabel component="legend">Opt for insurance?</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={insurance}
          onChange={changeInsurance}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yep" />
          <FormControlLabel value="no" control={<Radio />} label="Nope" />
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default Book;
