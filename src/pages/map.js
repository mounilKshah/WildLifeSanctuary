import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Navbar from "../components/landing/Navbar/Navbar";

const animals = [
  {
    name: "Lizard",
    animal_class: "Reptile",
    description:
      "In general, lizards have a small head, short neck, and long body and tail. Unlike snakes, most lizards have moveable eyelids. There are currently over 4,675 lizard species, including iguanas, chameleons, geckos, Gila monsters, monitors, and skinks.",
    latitude: 21.1243,
    longitude: 70.8242,
  },
  {
    name: "Lion",
    animal_class: "Mammal",
    description:
      "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species.",
    latitude: 21.2043,
    longitude: 70.7942,
  },
  {
    name: "Frog",
    animal_class: "Amphibian",
    description:
      "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura. The oldest fossil proto-frog appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.",
    latitude: 21.1943,
    longitude: 70.9142,
  },
  {
    name: "Raven",
    animal_class: "Bird",
    description:
      "The common raven, also known as the northern raven, is a large all-black passerine bird. Found across the Northern Hemisphere, it is the most widely distributed of all corvids.",
    latitude: 21.1943,
    longitude: 70.8542,
  },
  {
    name: "Salmon",
    animal_class: "Fish",
    description:
      "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic and Pacific Ocean.",
    latitude: 21.1743,
    longitude: 70.8842,
  },
];
function Map() {
  const [viewport, setViewport] = useState({
    latitude: 21.1243,
    longitude: 70.8242,
    zoom: 10,
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
          {console.log(animals)}
          {animals.map((animal) => {
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
