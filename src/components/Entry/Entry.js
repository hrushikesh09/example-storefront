import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "routes";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GuestForm from "@reactioncommerce/components/GuestForm/v1";
// import Button from "@reactioncommerce/components/Button/v1";
import Button from '../Button'
import {inject} from "mobx-react";

// flex wrapper jss mixin
const flexWrapper = () => ({
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
});

const styles = (theme) => ({
  loginWrapper: {
    ...flexWrapper(),
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up("md")]: {
      minHeight: "400px",
      paddingBottom: 0,
      paddingRight: theme.spacing.unit * 8
    }
  },
  buttonTop: {
    marginTop: theme.spacing.unit * 2,
  },
  loginButton: {
    marginTop: theme.spacing.unit * 3
  },
  guestWrapper: {
    ...flexWrapper(),
    borderTop: `solid 1px ${theme.palette.reaction.black10}`,
    paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up("md")]: {
      borderLeft: `solid 1px ${theme.palette.reaction.black10}`,
      borderTop: "none",
      paddingLeft: theme.spacing.unit * 8,
      paddingTop: 0
    }
  }
});

@withStyles(styles, { withTheme: true, name: "SkEntry" })
@inject("authStore")
export default class Entry extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onLoginButtonClick: PropTypes.func,
    onRegisterButtonClick: PropTypes.func,
    setEmailOnAnonymousCart: PropTypes.func,
    theme: PropTypes.object
  };

  static defaultProps = {
    onLoginButtonClick() {
      Router.pushRoute("/signin");
    },
    onRegisterButtonClick() {
      Router.pushRoute("/signup");
    },
    setEmailOnAnonymousCart() {}
  };

  render() {
    const { classes, onLoginButtonClick, onRegisterButtonClick, setEmailOnAnonymousCart, authStore } = this.props;
    const {account} = authStore;
    return (
      <Grid container>
        <Grid item xs={12} md={7}>
          {authStore.isAuthenticated && <div className={classes.loginWrapper}>
            <Typography variant="h6" gutterBottom>
              {`Hello, ${account.primaryEmailAddress}`}
            </Typography>
          </div>}
          {!authStore.isAuthenticated && <div className={classes.loginWrapper}>
            <Typography variant="h6" gutterBottom>
              Returning Customer
            </Typography>
            <Button title={'Login'} onClick={onLoginButtonClick} actionType="important" isFullWidth className={classes.loginButton}>
              Login
            </Button>
            <span className={classes.buttonTop}>
            <Button title={'Create a new account'} onClick={onRegisterButtonClick} actionType="secondary" isFullWidth className={classes.loginButton}>
              Create a new account
            </Button>
              </span>
          </div>}
        </Grid>
        <Grid item xs={12} md={5}>
          <div className={classes.guestWrapper}>
            <Typography variant="h6" gutterBottom>
              Guest Checkout
            </Typography>
            <GuestForm onSubmit={setEmailOnAnonymousCart} />
          </div>
        </Grid>
      </Grid>
    );
  }
}
