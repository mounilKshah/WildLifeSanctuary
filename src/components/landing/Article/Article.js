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
      <article className="athelas">
        <div>
          <div className="dtc v-mid">
            <h1 className="f1 f-headline-l fw1 i white-60">Wildlife</h1>
            <blockquote class="ph0 mh0 measure f4 lh-copy center">
              <p className="fw1 white-70">Your guide to Nature</p>
              {/*<cite class="f6 ttu tracked fs-normal">Massimo Vignelli</cite>*/}
            </blockquote>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Article;
