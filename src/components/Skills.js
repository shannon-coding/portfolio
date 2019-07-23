import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textPad: {
    paddingTop:theme.spacing(1),
    paddingLeft:theme.spacing(5),
  },
}));

function Skills (skills) {
  const classes = useStyles();

  return(
    <Grid>
      <Typography component="p" className={classes.textPad}>
        Design Software: {skills.designSoftware}
      </Typography>
      <Typography component="p" className={classes.textPad}>
        Programming Languages: {skills.programmingLanguages}
      </Typography>
    </Grid>
  );
}

export default Skills;