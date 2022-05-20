import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Toolbar,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 64
  },
  logo: {
    marginRight: theme.spacing(2)
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const TopBar = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <AppBar
            className={clsx(classes.root, className)}
            color="default"
            {...rest}
        >
            <Toolbar className={classes.toolbar}>
                <RouterLink to="/">
                    <Logo className={classes.logo} />
                </RouterLink>
                <Box flexGrow={1} />
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/"
                    underline="none"
                    variant="body2"
                >
                    Home
                </Link>
                <Link
                    className={classes.link}
                    color="textSecondary"
                    component={RouterLink}
                    to="/login"
                    underline="none"
                    variant="body2"
                >
                    Login
                </Link>
            </Toolbar>
        </AppBar>
    );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
