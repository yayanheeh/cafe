import React from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Book from '@material-ui/icons/Book';
import Forum from '@material-ui/icons/Forum';
import Hidden from '@material-ui/core/Hidden';


import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (  <Hidden smUp> 
<BottomNavigation title="My Bottom" style={{ backgroundColor: '#163F23' }} 
className={classes.stickToBottom}
>
<br/><br/>
    <BottomNavigation title="My Bottom" style={{ backgroundColor: '#163F23' }} 

      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      
 <BottomNavigationAction
        component={Link}
        to="/dashboard"
        label="Home"
        value="Home"
        icon={<Home style={{ color:white [500] }} />}
        className={classes.content}
    />

<BottomNavigationAction
        component={Link}
        to="/tentangkami"
        label="Tentang"
        value="Tentang"
        icon={<FavoriteIcon color="action"/>}
        className={classes.content}
    />
<BottomNavigationAction
        component={Link}
        to="/paduan"
        label="Paduan"
        value="Paduan"
        icon={<Book color="action" />}
        className={classes.content}
    />

<BottomNavigationAction
        component={Link}
        to="/paduan"
        label="Chat"
        value="Chat"
        icon={<Forum color="action"/>}
        className={classes.content}
    />
      
</BottomNavigation>
</BottomNavigation></Hidden>
  );
}
