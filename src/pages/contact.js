import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Input from '../components/YMInput';
import YMButton from "../components/YMButton";
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import Hidden from "@material-ui/core/Hidden";

const StyledHeroWave = styled.img`

 `

const StyledHeading = styled.h2`
display:block;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-align: left;
text-transform: uppercase;
color: #15253B;
margin-top:0;
@media (max-width: 700px) {
    font-size: 2.25em;
}
`

const StyledDescription = styled.h2`

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
color: #15253B;
text-align: left;

`

const StyledCard = styled.div`
width: 29.6875em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:0 0 16.5em 0;
padding:3.4em 3.125em 2.9em 3.125em ;
@media (max-width: 700px) {
    width: 24em;
    margin-left:auto;
    margin-right:auto;
margin-bottom:3em;
    padding:1.4em 1.125em 1.1em 1.125em ;
}
  `

const StyledContactText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125em;
  letter-spacing: 0.02em;
  color: #15253B;
margin-bottom:0;
`
const StyledContactText2 = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125em;
  letter-spacing: 0.02em;
  color: #15253B;
margin-top:0;
`
const StyledHero10Topbar = styled.div`
  position: relative;
  padding: 10px;
    @media (min-width: 800px) {
      padding: 100px 10px;
  }
    @media (min-width: 1300px) {
     padding: 125px 150px;
  }
  background: #ECC2AC;`

const StyledHero10News = styled.img`
  height: 3em;
  background: #ECC2AC;
   @media (min-width: 1300px) {
   height: 6em;
   }
  `
export default class ContactUs extends Component {

    render() {
        return (
            <div>

                <Hidden mdDown>
                    <Grid container direction='row'>
                        <StyledHeroWave style={{ marginLeft: '17%', height: '5em' }} src={'../static/assets/landing/wave-blue@3x.png'} />

                        <Grid direction='column' style={{ paddingTop: '11em', width: '20%' }}>
                            <StyledHeading>We are here to help!</StyledHeading>

                            <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec laoreet augue. Maecenas ornare et nulla eu viverra. Sed nibh sapien, lobortis vel bibendum ac, eleifend nec lacus.</StyledDescription>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justify='center' style={{ marginTop: '7.4em', width: '53%', marginLeft: 'auto', marginRight: 'auto' }}>

                        <Grid item xs={6}>

                        </Grid>

                        <Grid item xs={6}>
                            <StyledHeroWave style={{ height: '2.5em' }} src={'../static/assets/landing/wave-blue@3x.png'} />
                            <StyledHeading>write us</StyledHeading>
                        </Grid>

                        <Grid item xs={6}>
                            <StyledContactText>
                                HELP
                            </StyledContactText>

                            <StyledContactText2>
                                contact@yoman.com
                            </StyledContactText2>

                            <StyledContactText>
                                BUSINESS INQUIRY
                            </StyledContactText>

                            <StyledContactText2>
                                business@yoman.com
                            </StyledContactText2>

                            <StyledContactText2 style={{ width: '50%', lineHeight: '30px' }}>
                                Our customer support hours are Monday - Friday. 10 AM - 7 PM.
                            </StyledContactText2>

                        </Grid>

                        <Grid item xs={6}>
                            <StyledCard>

                                <Grid container direction='column' justify='flex-start' style={{}}>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"23.125em"} title={"Your Name"} />
                                    </Grid>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"23.125em"} title={"Email Address"} />
                                    </Grid>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"23.125em"} title={"Your Message"} />
                                    </Grid>

                                    <Grid item >
                                        <YMButton title={"SUBMIT"} />
                                    </Grid>
                                </Grid>

                            </StyledCard>
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden lgUp>

                    <div style={{ paddingTop: '2em' }}>
                        <StyledHeroWave style={{ marginLeft: '4%', height: '2em' }} src={'../static/assets/landing/wave-blue@3x.png'} />

                        <Grid direction='column' style={{ paddingTop: '1em', width: '70%', paddingLeft: '4em' }}>
                            <StyledHeading>We are here to help!</StyledHeading>

                            <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec laoreet augue. Maecenas ornare et nulla eu viverra. Sed nibh sapien, lobortis vel bibendum ac, eleifend nec lacus.</StyledDescription>
                        </Grid>
                    </div>

                    <Grid container direction='row' justify='center' style={{ marginTop: '1.4em', width: '53%', marginLeft: 'auto', marginRight: 'auto' }}>

                        <Grid item xs={12}>
                            <StyledContactText>
                                HELP
                            </StyledContactText>

                            <StyledContactText2>
                                contact@yoman.com
                            </StyledContactText2>

                            <StyledContactText>
                                BUSINESS INQUIRY
                            </StyledContactText>

                            <StyledContactText2>
                                business@yoman.com
                            </StyledContactText2>

                            {/* <StyledContactText2 style={{ width: '80%', lineHeight: '30px' }}>
                                Our customer support hours are Monday - Friday. 10 AM - 7 PM.
                        </StyledContactText2> */}

                            <StyledContactText style={{ width: '80%', lineHeight: '30px' }}>
                                Our customer support hours are
                            </StyledContactText>

                            <StyledContactText2 style={{ width: '80%', lineHeight: '30px' }}>
                                Monday - Friday. 10 AM - 7 PM.
                            </StyledContactText2>

                        </Grid>
                    </Grid>

                    <div style={{ paddingTop: '4em' }}>
                        <StyledHeroWave style={{ marginLeft: '4%', height: '2em' }} src={'../static/assets/landing/wave-blue@3x.png'} />

                        <StyledHeading style={{ paddingTop: '0.4em', width: '70%', paddingLeft: '1.8em' }}>write us</StyledHeading>

                    </div>

                    <Grid item xs={12}>
                        <StyledCard>

                            <Grid container direction='column' justify='flex-start' style={{}}>

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <Input widthStr={"21.125em"} title={"Your Name"} />
                                </Grid>

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <Input widthStr={"21.125em"} title={"Email Address"} />
                                </Grid>

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <Input widthStr={"21.125em"} title={"Your Message"} />
                                </Grid>

                                <Grid item >
                                    <YMButton title={"SUBMIT"} />
                                </Grid>
                            </Grid>

                        </StyledCard>
                    </Grid>

                </Hidden>


                <StyledHero10Topbar>
                    <Grid container
                          spacing={0}
                          direction="row"
                          justify="space-evenly"
                          alignItems="center">
                        <Grid item xs={12} md={6}>
                            <StyledHero10News src={'../static/assets/landing/news@3x.png'} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <StyledHero10News src={'../static/assets/landing/news@3x.png'} />
                        </Grid>
                    </Grid>
                </StyledHero10Topbar>
                <FooterCompany />
            </div>
        )
    }
}
