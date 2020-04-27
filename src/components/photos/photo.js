import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function MediaCard(props) {
  return (
    <div title={props.title}>
      <img class=" db ba b--black-10 center " alt="" src={props.image} />

      <dl class="mt2 f6 lh-copy ba">
        <dd class="ml0">{props.title}</dd>
        <dt class="clip ">Artist</dt>
        <dd class="ml0 gray">{`Photo by : ${props.creator}`}</dd>
        <Link
          to={`/${props.sanctuary.split(" ").join("")}`}
          exact
          class="ml0 gray"
        >{`Taken at : ${props.sanctuary}`}</Link>
      </dl>
    </div>
  );
}

export default MediaCard;
