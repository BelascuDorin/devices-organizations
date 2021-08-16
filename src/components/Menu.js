import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(15) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(15) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
  },
  menuLink: {
    textDecoration: 'none',
    color: 'black'
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleToggleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleToggleDrawerOpen}>
          {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>

          <ListItemText>
            <Link className={classes.menuLink} to='/devices'>
              Devices
            </Link>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>

          <ListItemText>
            <Link className={classes.menuLink} to='/organizations'>
              Organizations
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
