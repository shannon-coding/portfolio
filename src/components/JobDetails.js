import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textPad: {
    padding:theme.spacing(0),
  },
}));

function JobDetails (job) {
  const classes = useStyles();
  const accomplishments = job.accomplishments.map((element, i) => 
  <Typography key={i} className={classes.textPad} variant="body2" color="textSecondary" component="p">
    <li>
      {element}
    </li>
  </Typography>
  );

  return(
    <Grid>
      <Grid>
        <Typography variant="h5" component="h4">
          {job.jobTitle}
        </Typography>
        <Typography type="title" color="inherit" style={{
          borderRight: 'solid'
        }}>
        </Typography>
        <Typography component="p">
          {job.years}
        </Typography>
      </Grid>
        <Typography component="p">
          {job.company}
        </Typography>
        <Typography component="ul">
          {accomplishments}
        </Typography>
    </Grid>
  );
}

export default JobDetails;