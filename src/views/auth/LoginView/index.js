import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import useAuth from 'src/contextapi/hooks/useAuth';
import JWTLogin from './JWTLogin';
import MainLayout from 'src/layouts/MainLayout';

const methodIcons = {
  'JWT': '/static/images/jwt.svg'
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));

const LoginView = () => {
  const classes = useStyles();
  const { method } = useAuth();

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <MainLayout />
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h2"
                >
                  Sign in
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  Sign in on the internal platform
                </Typography>
              </div>
              <div className={classes.currentMethodIcon}>
                <img
                  alt="Auth method"
                  src={methodIcons[method]}
                />
              </div>
            </Box>
            <Box
              flexGrow={1}
              mt={3}
            >
              {method === 'JWT' && <JWTLogin /> }
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginView;
