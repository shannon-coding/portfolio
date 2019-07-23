import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import { Element } from 'react-scroll';

const useStyles = makeStyles(theme => ({
  projectSection: {
    minHeight: '100vh',
    paddingTop: theme.spacing(2),
  },
  testBorder:{
    border:'solid',
  }
}));

function Projects(props) {
  const classes = useStyles();

  return (
    <Element name={props.projectsName} className="element">
      <Grid className={classes.projectSection} container>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center" color="secondary" gutterBottom>
            PROJECTS
          </Typography>
          <Divider variant="middle" light />
        </Grid>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Coming soon!
          </Typography>
        </Grid>
      </Grid>
    </Element>
  )
}

export default Projects;