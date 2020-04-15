import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    height : 380,
    cursor:'pointer'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;



  return (
    <Card className={classes.card} variant="outlined" onClick = {props.toFlip}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <strong> Class : </strong>
          {props.animal_class}
          <img src = {require(`./${props.animal_class}.png`)} style= {{height:75,width:75,float:'center'}}/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <br/>
          <strong>Description : </strong>
          <br/>
          {props.description}
        </Typography>
      </CardContent>

     { /*<CardActions>
             <Button size="small" onClick = {props.toFlip}>Back</Button>
           </CardActions>*/}
    </Card>
  );
}