import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 750,
    marginTop: theme.spacing(1),
  },
  edContent: {
    textAlign:"left",
  },
  textPad: {
    padding:theme.spacing(2),
  },
}));

function EdCard (education) {
  const classes = useStyles();
  const accomplishments = education.accomplishments.map((element, i) => 
  <Typography key={i} className={classes.textPad} variant="body2" color="textSecondary" component="p">
    {element}
  </Typography>
  );

  return(
    <Card className={classes.card}>
      <CardContent className={classes.edContent}>
        <Typography align="center" gutterBottom variant="h5" component="h2">
          {education.degree}
        </Typography>
        <Typography align="center" gutterBottom variant="h6" component="h2">
          {education.years}
        </Typography>
        <Typography align="center" gutterBottom variant="h6" component="h2">
          {education.institution}
        </Typography>
        <Divider variant="middle" />
        <div>
          {accomplishments}
        </div>
      </CardContent>
    </Card>
  );
}

export default EdCard;