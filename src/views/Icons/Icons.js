import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xs={6} sm={3}>
          1</Grid>
        <Grid item xs={6} sm={3}>
          2    </Grid>
        <Grid item xs={6} sm={3}>
          3    </Grid>
      </Grid>
    </div>
  );
}
