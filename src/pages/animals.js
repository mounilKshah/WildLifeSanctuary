import React from "react";
import CardList from "../components/animals/CardList/CardList";
const DUMMY_ANIMALS = [
  {
    name: "Lizard",
    animal_class: "Reptile",
    description:
      "In general, lizards have a small head, short neck, and long body and tail. Unlike snakes, most lizards have moveable eyelids. There are currently over 4,675 lizard species, including iguanas, chameleons, geckos, Gila monsters, monitors, and skinks.",
  },
  {
    name: "Lion",
    animal_class: "Mammal",
    description:
      "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species.",
  },
  {
    name: "Frog",
    animal_class: "Amphibian",
    description:
      "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura. The oldest fossil proto-frog appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.",
  },
  {
    name: "Raven",
    animal_class: "Bird",
    description:
      "The common raven, also known as the northern raven, is a large all-black passerine bird. Found across the Northern Hemisphere, it is the most widely distributed of all corvids.",
  },
  {
    name: "Salmon",
    animal_class: "Fish",
    description:
      "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic and Pacific Ocean.",
  },
  {
    name: "Lion",
    animal_class: "Mammal",
    description:
      "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species.",
  },
  {
    name: "Lizard",
    animal_class: "Reptile",
    description:
      "In general, lizards have a small head, short neck, and long body and tail. Unlike snakes, most lizards have moveable eyelids. There are currently over 4,675 lizard species, including iguanas, chameleons, geckos, Gila monsters, monitors, and skinks.",
  },
  {
    name: "Lion",
    animal_class: "Mammal",
    description:
      "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane, which is the most recognisable feature of the species.",
  },
  {
    name: "Frog",
    animal_class: "Amphibian",
    description:
      "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura. The oldest fossil proto-frog appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.",
  },
  {
    name: "Raven",
    animal_class: "Bird",
    description:
      "The common raven, also known as the northern raven, is a large all-black passerine bird. Found across the Northern Hemisphere, it is the most widely distributed of all corvids.",
  },
  {
    name: "Salmon",
    animal_class: "Fish",
    description:
      "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic and Pacific Ocean.",
  },
  {
    name: "Frog",
    animal_class: "Amphibian",
    description:
      "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura. The oldest fossil proto-frog appeared in the early Triassic of Madagascar, but molecular clock dating suggests their origins may extend further back to the Permian, 265 million years ago.",
  },
];
const Animals = () => {
  return (
    <div className="bg-black">
      <CardList animals={DUMMY_ANIMALS} />
    </div>
  );
};
export default Animals;
