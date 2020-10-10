import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import TitleComponent from "../components/TitleComponent";
import Button from "../components/Button";
import Hidden from "@material-ui/core/Hidden";

const StyledConsultationText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12em;
  text-transform: uppercase;
  color: #15253b;
  margin: 0;
  text-align: left;
  position: static;
  @media (max-width: 700px) {
    font-size: 4em;
  }
`;

const StyledDescriptionText = styled.h2`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 0 10px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #15253b;
  @media (max-width: 700px) {
    padding-bottom: 60px;
   }
`;
//////
////////////

const StyledContainer = styled.div`
padding: 50px 0 0 10px;
@media (min-width: 1300px) {
 padding: 50px 0 0 300px;
}
 `
const StyledHero3 = styled.div`
 position: relative;
 padding: 100px 0;
background: #15253B;
@media (max-width: 700px) {

 padding: 50px 0;
}
`

const StyledHero3ImageContainer = styled.div`
 border-radius: 50%;
 height: 200px;
 width: 200px;
 display: flex;
 justify-content:center;
 align-items: center;
 margin: -30px 0 0 0;
background: #FFFFFF;
@media (max-width: 700px) {
    margin: 0;
}
`

const StyledHero3Wave = styled.img`
width: 100%;
`


const StyledHero3Image = styled.img`
height: 120px;
`
const StyledHero3Title = styled.h2`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4em;
line-height: 1.2em;
margin: 20px 0;
color: #FFFFFF;
width:20%;
@media (max-width: 700px) {
    text-align: center;
    width:50%;
    margin: auto;
    font-size: 36px;
line-height: 50px;
margin-bottom:0.5em;
}
`

const StyledHero3Step = styled.h6`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 20px 0;
color: #FFFFFF;
`
const StyledHero3StepText = styled.h5`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
margin: 0px 30px 20px 0;
color: rgba(255, 255, 255, 0.5);
width:70%;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
margin: auto;
      }
`
const StyledHero3StepTitle = styled.h5`
 text-align: left;
 font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
line-height: 2.25em;
margin: 20px 30px 0px 0;
color: #FFFFFF;
text-transform: uppercase;
@media (max-width: 700px) {

margin: 20px 0px 0px 0;
    text-align: center;
font-size: 18px;
line-height: 27px;

  }
`

const StyledLine = styled.div`
  width: 22em;
  height: 0px;
  margin-top: 2.6em;
  margin-right: 2em;
  border: 1px solid #15253b;
  @media (max-width: 700px) {
    width: 5em;

  }
`;

const StyledRandomText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.75em;
  text-transform: uppercase;
  color: #15253b;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  @media (max-width: 700px) {

font-size: 36px;
line-height: 50px;
  }
`;


const StyledHero6 = styled.div`
 position: relative;
  padding: 0 100px 200px 0;
 background: #FFFFFF;
 margin-top:-10em;
 @media (max-width: 700px) {
    padding: 20px 10px 90px 10px;
    margin-top:0em;
  }
 `

const StyledHero6Container = styled.div`
 position: relative;
  padding: 200px 100px 100px 100px;
 background: #FFFFFF;
 @media (max-width: 700px) {
    padding: 20px 10px 10px 10px;
  }
 `
const StyledHero6Title = styled.h1`
  position: absolute;
  z-index: 20;
  left: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 4em;
    top: -35px;
  }
 `

const StyledHero6Description = styled.h5`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 350px;
@media (max-width: 700px) {
max-width: 700px;
width:65%;
font-size: 16px;
line-height: 30px;
margin: auto;
margin-top:35px;
margin-bottom:20px;
}
 `

const StyledHero6ProfileName = styled.h3`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 1.2em;
line-height: 2.5em;
margin: 0;
color: #15253B;
max-width: 350px;
 `

const StyledHero6ProfileText = styled.h4`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.2em;
margin: 0;
color: #15253B;
width:70%;
 `

const StyledHero5Wave = styled.img`
height: 5em;
@media (max-width: 700px) {
    height: 2em;
    margin-left:220px;
}
`

const StyledHeroWave2 = styled.img`
  height: 5em;
  @media (max-width: 700px) {
    height: 2em;
}
`;
export default class ContactUs extends Component {

    render() {
        return (
            <div>
                <StyledContainer>
                    <TitleComponent />
                </StyledContainer>

                {/* Choose Text */}
                < Grid container >
                    <StyledConsultationText>our story</StyledConsultationText>
                </Grid >

                <Hidden mdDown>
                    <Grid
                        style={{ paddingBottom: 70 }}
                        container
                        direction="row">
                        {/* Text Container  */}

                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={4}>
                            <StyledDescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec laoreet augue. Maecenas ornare et nulla eu viverra. Sed nibh sapien, lobortis vel bibendum ac, eleifend nec lacus. In in elit viverra, elementum ex vel, vehicula mauris. Nam vel porta metus. Ut at vulputate purus. Quisque non nulla arcu. Pellentesque ut dui mattis, feugiat nulla eget, pretium neque. Duis sit amet erat quis turpis pellentesque semper. Aliquam gravida semper viverra.</StyledDescriptionText>
                        </Grid>

                        {/* Image Item */}

                    </Grid>
                </Hidden>

                <Hidden lgUp>
                    <Grid
                        container
                        direction="row">
                        {/* Text Container  */}
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={10} >
                            <StyledDescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec laoreet augue. Maecenas ornare et nulla eu viverra. Sed nibh sapien, lobortis vel bibendum ac, eleifend nec lacus. In in elit viverra, elementum ex vel, vehicula mauris. Nam vel porta metus. Ut at vulputate purus. Quisque non nulla arcu. Pellentesque ut dui mattis, feugiat nulla eget, pretium neque. Duis sit amet erat quis turpis pellentesque semper. Aliquam gravida semper viverra.</StyledDescriptionText>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        {/* Image Item */}

                    </Grid>
                </Hidden>

                <Hidden mdDown>

                    <StyledHero3>
                        <Grid container>
                            <Grid item container xs={1} justify="center"
                                  alignItems="center">
                                <StyledHero3Wave src={'../static/assets/landing/wave-pink@3x.png'} />
                            </Grid>
                            <Grid xs={3}>
                                <StyledHero3Title>{'OUR VALUE'}</StyledHero3Title>
                                <Button title={'GET STARTED'} />
                            </Grid>
                            <Grid xs={8}>
                                <Grid style={{ borderTop: '1px solid #fff', paddingBottom: 75 }}
                                      container
                                      direction="row"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item xs={2}>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info1@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <StyledHero3StepTitle>Authentic Treatment</StyledHero3StepTitle>
                                        <StyledHero3StepText> {'Our formula is tried and tested in the scientific research for the past 35 years to effectively stop hair loss.'}</StyledHero3StepText>
                                    </Grid>
                                </Grid>
                                <Grid style={{ borderTop: '1px solid #fff', paddingBottom: 75 }}
                                      container
                                      direction="row"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item xs={2}>

                                    </Grid>
                                    <Grid item xs={6}>
                                        <StyledHero3StepTitle>Best value for buck</StyledHero3StepTitle>
                                        <StyledHero3StepText> {'All our products combined can be bought for almost 50% lesser than the individual market price.'}</StyledHero3StepText>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info2@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>
                                </Grid>
                                <Grid style={{ borderTop: '1px solid #fff', paddingBottom: 75 }}
                                      container
                                      direction="row"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item xs={2}>

                                    </Grid>
                                    <Grid item xs={4}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info3@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <StyledHero3StepTitle>Ease of use</StyledHero3StepTitle>
                                        <StyledHero3StepText> {'Our products can be ordered from the couch and not only that using them is literally as simple as eating a chocolate.'}</StyledHero3StepText>
                                    </Grid>

                                </Grid>
                                <Grid style={{ borderTop: '1px solid #fff', paddingBottom: 75 }} />
                            </Grid>
                        </Grid>
                    </StyledHero3>

                </Hidden>

                <Hidden lgUp>

                    <StyledHero3>
                        <Grid container>

                            <Grid item container justify='center' direction='column'>

                                <StyledHero3Title>{'OUR VALUE'}</StyledHero3Title>

                                <div style={{ textAlign: 'center', marginBottom: '1em' }}>
                                    <Button title={'GET STARTED'} />
                                </div>

                            </Grid>

                            <Grid item container justify='flex-start'
                                  alignItems="center">
                                <StyledHeroWave2 src={'../static/assets/landing/wave-pink@3x.png'} />
                            </Grid>

                            <Grid >
                                <Grid style={{ marginTop: '3em', paddingBottom: 75 }}
                                      container
                                      direction='column'
                                      justify="center"
                                      alignItems="center">
                                    <Grid item >

                                    </Grid>
                                    <Grid item >
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info1@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>
                                    <Grid item container justify='center' direction='column'>
                                        <StyledHero3StepTitle>Authentic Treatment</StyledHero3StepTitle>
                                        <StyledHero3StepText> Our formula is tried and tested in the scientific research for the past 35 years to effectively stop hair loss.</StyledHero3StepText>
                                    </Grid>
                                </Grid>

                                <Grid style={{ paddingBottom: 75 }}
                                      container
                                      direction="column"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item >

                                    </Grid>

                                    <Grid item >
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info2@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>

                                    <Grid item container justify='center' direction='column'>
                                        <StyledHero3StepTitle >Best value for buck</StyledHero3StepTitle>
                                        <StyledHero3StepText> {'All our products combined can be bought for almost 50% lesser than the individual market price.'}</StyledHero3StepText>
                                    </Grid>

                                </Grid>

                                <Grid style={{ paddingBottom: 0 }}
                                      container
                                      direction="column"
                                      justify="center"
                                      alignItems="center">
                                    <Grid item >

                                    </Grid>
                                    <Grid item >
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={'../static/assets/landing/info3@3x.png'} />
                                        </StyledHero3ImageContainer>
                                    </Grid>
                                    <Grid item container justify='center' direction='column'>
                                        <StyledHero3StepTitle >Ease of use</StyledHero3StepTitle>
                                        <StyledHero3StepText> {'Our products can be ordered from the couch and not only that using them is literally as simple as eating a chocolate.'}</StyledHero3StepText>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledHero3>

                </Hidden>

                <Hidden mdDown>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{ width: "100%", height: "100%", padding: '100px 0 300px 0', background: '#ECC2AC' }}
                    >
                        <StyledLine />
                        <StyledRandomText>
                            Lorem ipsum dolor sit amet consecteturmat tis facilisis.
                        </StyledRandomText>

                    </Grid>
                </Hidden>

                <Hidden lgUp>
                    <Grid
                        container
                        direction="row"
                        style={{ width: "100%", height: "100%", padding: '3em 0 5em 0', background: '#ECC2AC' }}
                    >
                        <Grid item xs={3} style={{ marginTop: '-1em' }}>
                            <StyledLine />
                        </Grid>

                        <Grid item xs={9}>
                            <StyledRandomText>
                                Lorem ipsum dolor sit amet.
                            </StyledRandomText>
                        </Grid>
                    </Grid>
                </Hidden>


                <Hidden mdDown>
                    <StyledHero6>
                        <StyledHero6Title>{'DOCTORS'}</StyledHero6Title>
                        <StyledHero6Container>
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center">
                                <Grid item xs={6} container
                                      direction="row"
                                      justify="flex-end"
                                      alignItems="center">
                                    <StyledHero6Description>{'Our expert council of doctors come from some of the most renowned hospitals across India'}</StyledHero6Description>
                                </Grid>
                                <Grid item xs={6} container
                                      direction="row"
                                      justify="flex-end"
                                      alignItems="center">
                                    <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />
                                </Grid>
                            </Grid>
                        </StyledHero6Container>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center">
                            <Grid item xs={8} container
                                  direction="row"
                                  justify="flex-end"
                                  alignItems="center">
                                <Grid xs={4}>
                                    <div style={{ background: '#15253B', height: '20em', width: '90%' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={4}>
                                    <div style={{ background: '#15253B', height: '20em', width: '90%' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={4}>
                                    <div style={{ background: '#15253B', height: '20em', width: '90%' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} />
                        </Grid>
                    </StyledHero6>
                </Hidden>

                <Hidden lgUp>
                    <StyledHero6>

                        <StyledHero6Title>{'DOCTORS'}</StyledHero6Title>

                        <StyledHero6Container>

                            <StyledHero6Description>{'Our expert council of doctors come from some of the most renowned hospitals across India'}</StyledHero6Description>

                            <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />

                        </StyledHero6Container>

                        <Grid container
                              direction='column'
                              justify="center"
                              alignItems="center">
                            <Grid item xs={12} container
                                  direction='column'
                                  justify="flex-end"
                                  alignItems="center">
                                <Grid xs={12}>
                                    <div style={{ background: '#15253B', height: '20em', width: '18em', marginTop: '2em' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={12}>
                                    <div style={{ background: '#15253B', height: '20em', width: '18em', marginTop: '2em' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={12}>
                                    <div style={{ background: '#15253B', height: '20em', width: '18em', marginTop: '2em' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                            </Grid>

                        </Grid>

                    </StyledHero6>
                </Hidden>


                <Footer />
                <FooterCompany />
            </div>
        )
    }
}
