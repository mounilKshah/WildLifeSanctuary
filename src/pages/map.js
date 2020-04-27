import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Navbar from "../components/landing/Navbar/Navbar";

function Map() {
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
  const [viewport, setViewport] = useState({
    latitude: 22.9734,
    longitude: 78.6569,
    zoom: 4,
    width: "100vw",
    height: "80vh",
  });

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  return (
    <div>
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={
            "pk.eyJ1IjoiYWR2YWl0c2Fua2hlIiwiYSI6ImNrNXZneWIweTBkMDUza21kNXN2djl4N3oifQ.ksZQZj-5m7wIZOyG7IghMQ"
          }
          mapStyle="mapbox://styles/advaitsankhe/ck5vhc1qx3rpo1inyit15whdv"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {loadedAnimals &&
            loadedAnimals.map((animal) => {
              return (
                <Marker latitude={animal.latitude} longitude={animal.longitude}>
                  <button
                    onMouseOver={(e) => {
                      e.preventDefault();
                      setSelectedAnimal(animal);
                    }}
                    onMouseOut={() => {
                      setSelectedAnimal(null);
                    }}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <img
                      src={require(`../components/animals/Back/${animal.animal_class}.png`)}
                      style={{ width: "30px", height: "30px" }}
                    />
                    {/*animal.name*/}
                  </button>
                </Marker>
              );
            })}
          {selectedAnimal ? (
            <Popup
              latitude={selectedAnimal.latitude}
              longitude={selectedAnimal.longitude}
              onClose={() => {
                setSelectedAnimal(null);
              }}
            >
              <div>{selectedAnimal.name}</div>
            </Popup>
          ) : null}
        </ReactMapGL>
        <Navbar />
      </div>
    </div>
  );
}

export default Map;
