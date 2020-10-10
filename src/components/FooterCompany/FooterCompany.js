import React from "react";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { Link } from '../../server/routes';
import Hidden from "@material-ui/core/Hidden";

const StyledFooter = styled.div`
  padding: 20px;
   @media (min-width: 800px) {
     padding: 100px 100px;
  }
    @media (min-width: 1300px) {
     padding: 100px 150px;
  }
  @media (max-width: 700px) {
    padding: 50px 40px;
    }
  `

const StyledSocialImage = styled.img`
cursor: pointer;
  height: 32px;
  width: 32px;
  margin-right: 10px;`;

const StyledFooterLogo = styled.img`
margin-top: 20px;
width: 83px;
height: 136px;
  @media (min-width: 1300px) {
  margin-top: -20px;
  }
  @media (max-width: 700px) {
    width: 58px;
    height: 95.04px;
    }
`

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
cursor: pointer;
text-align: left;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
margin: 0;
letter-spacing: 0.02em;

color: rgba(21, 37, 59, 0.5);
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 30px;
    }
`

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
letter-spacing: 0.02em;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 30px;
    }
`


const date = new Date();


class FooterCompany extends React.Component {

    state = {
        socialIcons: [{
            name: 'facebook',
            icon: require('../../public/assets/socialIcons/facebook@2x.png')
        }, {
            name: 'instagram',
            icon: require('../../public/assets/socialIcons/instagram@2x.png')
        }, {
            name: 'twitter',
            icon: require('../../public/assets/socialIcons/twitter@2x.png')
        }, {
            name: 'linkedin',
            icon: require('../../public/assets/socialIcons/linkedin@2x.png')
        }, {
            name: 'youTube',
            icon: require('../../public/assets/socialIcons/youtube@2x.png')
        }],
        footerLinks: [{
            title: 'OUR STORY',
            href: '/about'
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
        const { socialIcons, footerLinks } = this.state;
        const listSocialIcons = socialIcons.map(social => {
            return (
                <StyledSocialImage src={social.icon} />
            )
        })

        const listFooterLeft = footerLinks.slice(0, 4).map(link => {
            return (
                <Link route={link.href} key={link.href}><StyledHelpLink>{link.title}</StyledHelpLink></Link>
            )
        })

        const listFooterRight = footerLinks.slice(4, 8).map(link => {
            return (
                <Link route={link.href} key={link.href}><StyledHelpLink>{link.title}</StyledHelpLink></Link>
            )
        })
        return (
            <StyledFooter>
                <Hidden mdDown>
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={4}>
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
                        <Grid item xs={6} md={2}>
                            <Grid
                                container
                                direction="column">
                                {listFooterLeft}
                            </Grid>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Grid
                                container
                                direction="column">
                                {listFooterRight}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="flex-start">
                                <Grid xs={12} md={7}>
                                    <StyledHelpText>{'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}</StyledHelpText>
                                </Grid>

                                <Grid xs={6} md={5} container
                                      justify="center"
                                      alignItems="flex-start">
                                    <StyledFooterLogo src={"../static/assets/logo/logo-footer1@3x.png"} />
                                    <source media="(min-width: 650px)"
                                            srcSet={"/assets/logo/logo-header1.png"} />
                                    <source media="(min-width: 465px)"
                                            srcSet={"/assets/logo/logo-header1@2x.png"} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden lgUp>
                    <Grid container spacing={8}>
                        <Grid xs={12} md={7}>
                            <StyledHelpText>{'Suspendisse potenti. Nulla accumsan ornare rhoncus. Nulla ligula libero, dictum ac pulvinar.'}</StyledHelpText>
                        </Grid>
                        <Grid item xs={12} md={4}>


                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Grid
                                container
                                direction="column">
                                {listFooterLeft}
                            </Grid>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Grid
                                container
                                direction="column">
                                {listFooterRight}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="flex-start">



                                <Grid xs={2} md={5} container
                                      justify="center"
                                      alignItems="flex-start">
                                    <StyledFooterLogo src={"../static/assets/logo/logo-footer1@3x.png"} />
                                    <source media="(min-width: 650px)"
                                            srcSet={"/assets/logo/logo-header1.png"} />
                                    <source media="(min-width: 465px)"
                                            srcSet={"/assets/logo/logo-header1@2x.png"} />
                                </Grid>

                                <Grid xs={10}
                                      container
                                      direction="row"
                                      justify="flex-end"
                                      alignItems="center"
                                      style={{ marginTop: 'auto' }}
                                >
                                    {listSocialIcons}
                                    <Grid xs={3}>
                                    </Grid>
                                    <Grid xs={9}
                                          container
                                          direction="row"
                                          justify="flex-start"
                                          alignItems="center">
                                        <StyledDateYear>@{date.getFullYear()}</StyledDateYear>
                                    </Grid>


                                </Grid>

                                {/* <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center">
                                    <StyledDateYear>@{date.getFullYear()}</StyledDateYear>
                                </Grid> */}

                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            </StyledFooter>
        )
    }
}
export default FooterCompany;
