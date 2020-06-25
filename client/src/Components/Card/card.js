import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function SimpleCard(props) {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Event
        </Typography>
        <Typography variant="h5" component="h2">
       {props.eventname}  
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.eventtype} 
        </Typography>
        <Typography variant="body2" component="p">
               {props.eventorganizer} 
          <br />
          {props.eventdate} 
        </Typography>
      </CardContent>
    </Card>
  );
}