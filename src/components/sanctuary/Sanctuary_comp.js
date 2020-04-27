import React from "react";
import "./Sanctuary_comp.css";

const Sanctuary = (props) => {
  let image_link;
  if (props.sanctuaryName === "Gir")
    image_link =
      "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700034776.jpg";
  if (props.sanctuaryName === "Karnala")
    image_link = "https://wallpaperaccess.com/full/860706.jpg";
  if (props.sanctuaryName === "Jim Corbett")
    image_link =
      "https://i.pinimg.com/originals/82/0c/51/820c51be7e5321440d33ffce478efdf9.jpg";
  return (
    <article data-name="article-full-bleed-background">
      <div
        className="cf"
        style={{
          backgroundImage: "url(" + image_link + ")",
          backgroundRepeat: "no-repeat",
          backgroundCenter: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
          <header className="bb b--black-70 pv4">
            <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
              {props.sanctuaryName}
            </h3>
            <h4 className="f3 fw4 i lh-title mt0">{props.location}</h4>
          </header>
          <section className="pt5 pb4">
            <p className="times lh-copy measure f4 mt0">{props.description}</p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Sanctuary;
