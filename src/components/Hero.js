import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Element, Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  heroContent: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    direction: 'column',
    backgroundColor: theme.palette.primary.main,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    '&:hover':{
      '& svg':{
        transform: 'rotate(90deg)',
        transitionDuration:"0.5s",
      },
      backgroundColor: theme.palette.primary,
      fontColor: theme.palette.primary.contrastText,
      transitionDuration: '0.5s',
    },
    '& svg':{
      transitionDuration:'0.5s',
    },
    backgroundColor: theme.palette.primary,
  },
}));

function Hero(props) {
  const classes = useStyles();

  return (
    <Element name={props.heroName} className="element">
      <Grid container className={classes.heroContent}>
        <Grid color="primary" item xs={12}>
          <Typography component="h1" variant="h5" align="center" color="textPrimary">
            Hello, I'm
          </Typography>
          <Typography component="h1" align="center" variant="h5" color="error">
            Jacob Shannon.
          </Typography>
          <Typography component="h1" align="center" variant="h5" color="textPrimary" gutterBottom>
            I'm an electrical engineer.
          </Typography>
          <div align="center">
            <Link
                to={props.resumeName}
                smooth={true}
                duration={1500}
              >
              <Button className={classes.heroButtons} variant="outlined" color="secondary">
                  View my work 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg> 
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Element>
  )
}

export default Hero;