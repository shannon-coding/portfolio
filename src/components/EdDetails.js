import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textPad: {
    padding:theme.spacing(0),
  },
}));

function EdCard (education) {
  const classes = useStyles();
  const accomplishments = education.accomplishments.map((element, i) => 
  <Typography key={i} className={classes.textPad} variant="body2" color="textSecondary" component="p">
    <li>
      {element}
    </li>
  </Typography>
  );

  return(
    <Grid>
      <Grid>
        <Typography variant="h5" component="h5">
          {education.degree}
        </Typography>
        <Typography type="title" color="inherit" style={{
          borderRight: 'solid'
        }}>
        </Typography>
        <Typography component="p">
          {education.years}
        </Typography>
      </Grid>
        <Typography component="p">
          {education.institution}
        </Typography>
        <Typography component="ul">
          {accomplishments}
        </Typography>
    </Grid>
  );
}

export default EdCard;