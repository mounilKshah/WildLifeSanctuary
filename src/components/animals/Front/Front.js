import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 345,
    height: 380,
    background: "#ffce00",
    margin: 15,
  },
  media: {
    height: 300,
  },
});

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={`grow ${classes.card}`} onClick={props.toFlip}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`./${props.name}.jpg`)}
          style={{ height: 300, width: "auto" }}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography className="" gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.species}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/*
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick ={props.toFlip} >
          Learn More
        </Button>
      </CardActions>
  */}
    </Card>
  );
}

export default MediaCard;
