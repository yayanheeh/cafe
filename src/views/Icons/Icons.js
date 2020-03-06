import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item xs={12} sm={3}>
    <Card className={classes.root}>

 <CardActionArea>

 <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Makan    </Typography>
        </CardContent>    </CardActionArea></Card>

</Grid>
        <Grid item xs={12} sm={3}>
      
<Card className={classes.root}>
 <CardActionArea>  

 <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p">
            Makan    </Typography>
        </CardContent>     </CardActionArea>   </Grid>
        </Card>
      </Grid>
    </div>
  );
}
