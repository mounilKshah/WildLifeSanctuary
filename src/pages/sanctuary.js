import React, { useState, useEffect } from "react";
import Sanctuary_comp from "../components/sanctuary/Sanctuary_comp";

const Sanctuary = (props) => {
  console.log("HEY");
  console.log(props.sanctuary_name);
  let responseData;
  let response;
  const [loadedAnimals, setLoadedAnimals] = useState();
  const [description, setDescription] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        response = await fetch(
          `http://localhost:5000/api/sanctuaries/${props.sanctuary_name}`
        );
        responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedAnimals(responseData.sanctuary.animals_found);
        setDescription(responseData.sanctuary.description);
        setName(responseData.sanctuary.name);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  console.log(loadedAnimals);
  console.log(name);
  console.log(description);

  return (
    <Sanctuary_comp
      sanctuaryName={name}
      description={description}
    ></Sanctuary_comp>
  );
};
export default Sanctuary;
