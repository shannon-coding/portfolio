import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textPad: {
    paddingLeft:theme.spacing(5),
  },
}));

function Certifications (certs) {
  const classes = useStyles();
  const ccc = certs.certs.map((element, i) => 
  <div key={element.title}>
    <Typography className={classes.textPad} variant="body2" component="p">
      {element.title}
    </Typography>
    <Typography className={classes.textPad} variant="body2" color="textSecondary" component="p">
      {element.institution} | {element.year}
    </Typography>
  </div>
  );

  return(
    <Grid>
      {ccc}
    </Grid>
  );
}

export default Certifications;