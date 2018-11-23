import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

function NavBar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Photos
        </Typography>
      </Toolbar>
      <Toolbar>
        <Link className="navbar-brand" to="/">
          Q&App
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;