import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import {Link} from '../../routes';
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 100px 150px;`

const StyledSocialImage = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 10px;`;

const StyledFooterLogo = styled.img`
margin-top: -20px;
width: 83px;
height: 136px;`

const StyledDateYear = styled.h6`
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.8em;
margin: 12px 0;
/* or 187% */
letter-spacing: 0.02em;
color: rgba(21, 37, 59, 0.3);`

const StyledHelpLink = styled.h4`
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 0;
letter-spacing: 0.02em;

color: rgba(21, 37, 59, 0.5);`

const StyledHelpText = styled.h3`
letter-spacing: 0.02em;

color: rgba(21, 37, 59, 0.5);
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 0;
letter-spacing: 0.02em;`


const date = new Date();

const styles = (theme) => ({
  footer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
});


class Footer extends React.Component {

  state = {
    socialIcons: [{
      name: 'facebook',
      icon: require('../../static/assets/socialIcons/facebook@2x.png')
    }, {
      name: 'instagram',
      icon: require('../../static/assets/socialIcons/instagram@2x.png')
    }, {
      name: 'twitter',
      icon: require('../../static/assets/socialIcons/twitter@2x.png')
    }, {
      name: 'linkedin',
      icon: require('../../static/assets/socialIcons/linkedin@2x.png')
    }, {
      name: 'youTube',
      icon: require('../../static/assets/socialIcons/youtube@2x.png')
    }],
    footerLinks: [{
      title: 'OUR STORY',
      href: '/story'
    }, {
      title: 'FAQs',
      href: '/faq'
    }, {
      title: 'CONTACT',
      href: '/contact'
    }, {
      title: 'CAREERS',
      href: '/careers'
    }, {
      title: 'CONTACT',
      href: '/contact'
    }, {
      title: 'CAREERS',
      href: '/careers'
    }, {
      title: 'PRIVACY POLICY',
      href: '/privacy'
    }, {
      title: 'TERMS & CONDITIONS',
      href: '/terms'
    }]
  }

  render() {
    const {socialIcons, footerLinks} = this.state;
    const listSocialIcons = socialIcons.map(social => {
      return (
        <StyledSocialImage src={social.icon}/>
      )
    })

    const listFooterLeft = footerLinks.slice(0, 4).map(link => {
      return (
        <Link route={link.href}><StyledHelpLink>{link.title}</StyledHelpLink></Link>
      )
    })

    const listFooterRight = footerLinks.slice(4, 8).map(link => {
      return (
        <Link route={link.href}><StyledHelpLink>{link.title}</StyledHelpLink></Link>
      )
    })
    return (
      <StyledFooter className={this.props.classes.footer}>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {listSocialIcons}
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <StyledDateYear>@{date.getFullYear()}</StyledDateYear>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              direction="column">
              {listFooterLeft}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid
              container
              direction="column">
              {listFooterRight}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="flex-start">
              <Grid xs={7}>
                <StyledHelpText>{'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}</StyledHelpText>
              </Grid>
              <Grid xs={5} container
                    justify="center"
                    alignItems="flex-start">
                <StyledFooterLogo src={require("../../static/assets/logo/logo-footer1@2x.png")}/>
                <source media="(min-width: 650px)"
                        srcSet={require("../../static/assets/logo/logo-header1.png")}/>
                <source media="(min-width: 465px)"
                        srcSet={require("../../static/assets/logo/logo-header1@2x.png")}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*<Typography variant="caption">*/}
        {/*  &copy; {date.getFullYear()} Medical Commerce*/}
        {/*</Typography>*/}
      </StyledFooter>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles, {name: "SkFooter"})(Footer);
