import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textPad: {
    padding:theme.spacing(0),
  },
}));

function Accomplishments (accomplishments) {
  const classes = useStyles();
  const acc = accomplishments.accomplishments.map((element, i) => 
  <Typography key={i} className={classes.textPad} variant="body2" color="textSecondary" component="p">
    <li>
      {element}
    </li>
  </Typography>
  );

  return(
    <Grid>
      <Typography component="ul">
        {acc}
      </Typography>
    </Grid>
  );
}

export default Accomplishments;