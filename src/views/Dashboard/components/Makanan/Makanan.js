import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';    
  
import Link from '@material-ui/core/Link';

 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  media: {
    height: 140,
    maxWidth: 200,
  },
}));


export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
        <Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
     
      
<Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

          
      <table width="1000%" border="0 "><tr>
<td width="25%" bgcolor="" align="left">
     <Card className={classes.root}>
<CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />

<CardContent>
          
          <Button size="small" color="primary">
          Es Teh
        </Button>
        <Typography variant="body2" color="textSecondary" component="p">
            Rp 20.000 </Typography>
        </CardContent></Card>
  </td>&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<img src="https://img.icons8.com/cute-clipart/128/000000/home.png"/>
     <GridListTileBar
              title={Es teh}
              subtitle={<span>by: Kres</span>}
              actionIcon={
                <IconButton aria-label={haaa} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>

 </CardContent> </Card></td>&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<img src="https://img.icons8.com/cute-clipart/128/000000/home.png"/>
      </CardContent> </Card></td>&ensp; 
<td width="25%" bgcolor="" align="left"><Card className={classes.root}>
      <CardContent>
<img src="https://img.icons8.com/cute-clipart/128/000000/home.png"/>
      </CardContent> </Card></td>
</tr></table>             


        

</Tabs>

<Tabs 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >

<CardActions>
        <Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>
        <Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>
<Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>
        <Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>
<Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>
        <Button size="small" color="primary">
          <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
          
        />
        </Button>

      </CardActions>

</Tabs>

    </div>
  );
}
