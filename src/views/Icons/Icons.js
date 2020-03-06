import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

        
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     <Grid
               lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
<CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Spageti </Typography>
        </CardContent>
      </CardActionArea>
</Grid>

<Grid
               lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
<CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Spageti </Typography>
        </CardContent>
      </CardActionArea>
</Grid>

 


      
    </Card>
  );
}
