import { 
  AppBar, 
  Toolbar, 
  Typography, 
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';

const style = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// interface INavBarProps {
//   classes: string;
// }


const NavBar: React.SFC<{}> = (props) => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Memex
          </Typography>
        </Toolbar>
        <Toolbar>
          <Link className="navbar-brand" to="/">
            Q&App
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(style)(NavBar);