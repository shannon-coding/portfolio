import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formStyles:{
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  }
}));

function ContactForm(props) {
  const classes = useStyles();
  return (
      <form action="https://formspree.io/jacobshnn@gmail.com" method="POST">
        <Grid
          direction="column"
          container
          className={classes.formStyles}>
          <FormControl>
            <TextField
                id="outlined-name-input"
                label="Name:"
                type="text"
                name="name"
                margin="normal"
                variant="outlined"
                required
              />
          </FormControl>
          <FormControl>
            <TextField
                id="outlined-email-input"
                label="Email:"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                required
              />
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-subject-input"
              label="Subject:"
              type="text"
              name="subject"
              margin="normal"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              id="message-area"
              label="Message:"
              placeholder="Enter message here."
              type="text"
              name="message"
              multiline
              rows={3}
              variant="outlined"
              margin="normal"
              required
            />
          </FormControl>
          <Grid
          direction="column"
          container
          alignItems="flex-start">
            <FormControl>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
  )
}

export default ContactForm;