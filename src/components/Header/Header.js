import React, {Component} from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "../Button";
import {Link, Router} from '../../routes';
import {withRouter} from 'next/router';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {inject} from "mobx-react";

const StyledTitle = styled.h1`
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
text-align: center;
margin: 0;
letter-spacing: 0.02em;

color: #15253B;
&:hover {
   color: ${props => props.isLanding ? '#ffffff' : '#ECC2AC'}
  }
`


const StyledHeader = styled.div`
padding: 1em 2em;
background: ${props => (props.isLanding || props.isHairKit) ? '#ECC2AC' : '#ffffff'};

`

const StyledLogo = styled.img`
height: 100%;
width: 4.5em;
cursor: pointer;
`


const StyledLogo2 = styled.img`
height: 100%;
width: 3.5em;
float: right;
cursor: pointer;
`

@inject("authStore")
class Header extends Component {

  state = {
    isDrawerOpen: false,
    headerLinks: [
      {
        title: 'OUR OFFERING',
        href: '/our-offering'
      }, {
        title: 'HAIR LOSS 101',
        href: '/hair-loss'
      }, {
        title: 'LEARN',
        href: '/learn'
      }, {
        title: 'REVIEW',
        href: '/review'
      }, {
        title: 'SIGN IN',
        href: '/login'
      }
    ]
  }

  componentDidMount() {
    const {authStore} = this.props;
    const {headerLinks} = this.state;

    if (authStore.isAuthenticated) {
      headerLinks[4] = {
        title: 'LOGOUT',
        href: '/logout'
      }
      this.setState({
        headerLinks
      })
    }
  }

  toggleDrawer = () => {
    const {isDrawerOpen} = this.state;
    this.setState({
      isDrawerOpen: !isDrawerOpen
    })
  }

  handleRoute = (route) => {

    this.toggleDrawer();
    Router.pushRoute(route);
  }

  render() {
    const {headerLinks, isDrawerOpen} = this.state;
    const {router, authStore} = this.props;

    const isLanding = (router.pathname === '/landing');
    const isHairKit = (router.pathname === '/hair-kit1');
    console.log(authStore);
    return (
      <StyledHeader isLanding={isLanding} isHairKit={isHairKit}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={5}>
            <Link route={'/landing'}>
              <StyledLogo
                src={isLanding || isHairKit ? '../static/assets/logo/logo-header1@3x.png' : '../static/assets/logo/logo-footer1@3x.png'}/>
            </Link>
          </Grid>
          <Grid item xs={7} direction="row">
            <Hidden mdDown>
              <Grid container justify="space-between" direction="row" alignItems="center">
                {headerLinks.map(link => {
                  return (
                    <Grid item>
                      <Link route={link.href}>
                        <StyledTitle isLanding={isLanding}>{link.title}</StyledTitle>
                      </Link>
                    </Grid>
                  )
                })}
                <Button title="GET STARTED" primary secondary={isLanding}
                        onClick={() => Router.pushRoute('/get-started')}/>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <StyledLogo2 src={'../static/assets/landing/hamburger-menu-512.png'} onClick={this.toggleDrawer}/>
            </Hidden>
          </Grid>
        </Grid>
        <Drawer anchor={'right'} open={isDrawerOpen} onClose={this.toggleDrawer}>
          <List style={{paddingTop: 50}}>
            {headerLinks.map((link, index) => (
              <ListItem button key={link.title} onClick={() => this.handleRoute(link.href)}>
                <ListItemText primary={link.title}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
        </Drawer>
      </StyledHeader>
    )
  }
}

export default withRouter(Header)
