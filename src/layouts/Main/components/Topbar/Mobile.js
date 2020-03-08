import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';








import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    
  },
    
  divider: {
    height: 28,
    margin: 4,
  },
}));


const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (


    <AppBar title="My AppBar" style={{ backgroundColor: '#163F23' }} 
   {...rest}
      className={clsx(classes.root, className)}
    >

<Paper

component="form" className={classes.root}>


<IconButton
            
             
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
      <InputBase 
        className={classes.input}
        placeholder="Pencarian..."
        inputProps={{ 'aria-label': 'docs-search form-input' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="docs-search form-input">
        <SearchIcon />
      </IconButton>
      |    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>

    </Paper>
      
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
