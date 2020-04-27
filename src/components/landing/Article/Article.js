import React from "react";
import Navbar from "../Navbar/Navbar";

const Article = (props) => {
  return (
    <div
      className="vh-100 dt w-100 tc  white cover"
      style={{
        backgroundImage:
          "url(" +
          "https://i.pinimg.com/originals/03/0c/f6/030cf68d0d2eea8152a5d061ce9c7d4b.jpg" +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <article className="athelas bg-black"></article>
    </div>
  );
};

export default Article;
