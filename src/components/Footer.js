import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Element } from "react-scroll";

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.spacing(8),
    backgroundColor: theme.palette.primary,
    '& a':{
      color: "inherit",
    },
    flexGrow: 1,
  },
}));

function Footer(props) {
  const classes = useStyles();
  return (
    <Element name={props.footerName} className="element">
      <Grid 
        className={classes.footer}
        container>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
            Contact
          </Typography>
          <Divider variant="middle" light />
        </Grid>
        <Grid 
          item
          xs={12}
          align="center"
        >
          <Grid justify="space-evenly" container>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jacobshannon/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a>
            <a rel="noopener noreferrer" href="mailto:jacobshnn@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} size="5x" /></a>
          </Grid>
        </Grid>
      </Grid>
    </Element>
  )
}

export default Footer;