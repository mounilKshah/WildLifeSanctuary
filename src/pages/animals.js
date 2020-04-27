import React, { useState, useEffect } from "react";
import CardList from "../components/animals/CardList/CardList";

const Animals = () => {
  const [loadedAnimals, setLoadedAnimals] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/animals/all");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setLoadedAnimals(responseData.animals);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  console.log(loadedAnimals);
  return (
    <div className="bg-black">
      {loadedAnimals && <CardList animals={loadedAnimals} />}
    </div>
  );
};
export default Animals;
