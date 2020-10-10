import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Stepper from '../../components/Stepper'
import Input from '../../components/YMInput';
import YMButton from "../../components/YMButton";
import { BOOKING_DETAILS } from "../../constants/pathConstants";
import { Link } from '../../server/routes';
import Hidden from "@material-ui/core/Hidden";
import StepperMobile from "../../components/StepperMobile";

const StyledHeroWave = styled.img`
margin-left:17%;
 height: 5em;
 @media (max-width: 700px) {
    height: 2em;
    margin-left:7%;
    margin-top:1.5em;
  }
 `


const StyledHeading = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-align: center;
text-transform: uppercase;
color: #15253B;
margin:auto;
margin-top:2em;
width:25%;
@media (max-width: 700px) {
    font-size: 36px;
    line-height: 50px;
    width:100%;

    margin-top:1.7em;
  }
`


const StyledDescription = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
color: #15253B;
text-align: center;
width:28%;
margin:auto;
padding-bottom:3.8em;
@media (max-width: 700px) {

    font-size: 16px;
    line-height: 30px;
    width:70%;

  }
`

const StyledCard = styled.div`
width: 29.6875em;
height: 32.5625em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:0 0 16.5em 0;
padding:1.4em 3.125em 2.9em 3.125em ;
@media (max-width: 700px) {
    width: 345px;
    height: 404px;
    padding:1em 1em 1em 1em ;
    margin:0 0 6.5em 0;
  }
  `


const StyledCardTitle = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-transform: uppercase;
color: #15253B;
margin:0;
@media (max-width: 700px) {
    font-size: 36px;
    line-height: 50px;
    text-align:center;
margin-bottom:1em;
  }
`

const StyledCardText = styled.h2`
display:inline;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 0.8125em;
color: rgba(21, 37, 59, 0.5);
margin:0;
margin-left:10px;
@media (max-width: 700px) {
    font-size: 12px;
    line-height: 18px;
    margin-left:0px;
  }
`

const StyledCardText2 = styled.h2`
display:inline;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 0.8125em;
color: rgba(21, 37, 59, 0.5);
margin:0;
margin-left:10px;
@media (max-width: 700px) {
    font-size: 12px;
    line-height: 18px;
    margin-left:10px;
  }
`

const StyledCardSignIn = styled.h2`
display:inline;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
text-align: center;
letter-spacing: 0.02em;
color: #15253B;
margin:0;
margin-left:auto;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 30px;
  }
`

const StyledSmallBlueCircle = styled.div`

  height: 1.5625em;
  width: 1.5625em;
  background-color: #15253B;
  border-radius: 50%;
  text-align: center;
`


const StyledManPic = styled.img`
width: 26.75em;
height: 25.6875em;
 `

const StyledYellowHighlight = styled.div`
width: 27.8125em;
height: 25.7em;
background: #ECC2AC;
padding:6.875em 1em 0 0 ;
 `

const StyledShippingCardDetails = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
padding: 10px 0;
`


const StyledBlueCircle = styled.div`
cursor: pointer;
display:block;
  height: 6.625em;
  width: 6.625em;

  background-color:#15253B ;

  border-radius: 50%;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
  @media (max-width: 700px) {
    height: 80px;
  width: 80px;
  }

`

const StyledCircleText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 1.5em;
line-height: 1.8em;
text-align: center;
letter-spacing: 0.02em;
color: #15253B;
width:6.625em;
`

const StyledTickImage = styled.img`
`

const StyledLine = styled.div`
  width: 8.2em;
  height: 0px;
  margin-left: 0;
  margin-right: 0;
  margin-top:45px;
  margin-bottom:auto;
  border: 1px solid rgba(21, 37, 59, 0.3);
`;

const StyledStep = styled.div`
display: flex;
flex-direction: row;
margin-top:2em;
`;



export default class SignUp extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

                <Hidden mdDown>
                    <Stepper stepNum={2} />
                </Hidden>

                <Hidden lgUp>
                    <StepperMobile stepName={'Signup'} />
                </Hidden>

                <div>
                    <StyledHeading>WELCOME</StyledHeading>

                    <StyledDescription>Join India's most authentic wellness company. Rated by 30000+ Indians
                    </StyledDescription>
                </div>

                <Grid container direction='row' justify='center'>

                    <Hidden mdDown>
                        <Grid item>
                            <StyledYellowHighlight >
                                <StyledManPic src={'../static/assets/booking/signUp/guy@3x.png'} />
                            </StyledYellowHighlight>
                        </Grid>


                        <Grid item>
                            <StyledCard>
                                <div style={{ textAlign: 'right', marginBottom: '3em' }}>
                                    <StyledCardText style={{ marginRight: '0.8em' }}>Already a Member?</StyledCardText>
                                    <StyledCardSignIn>SIGN IN</StyledCardSignIn>
                                </div>

                                <StyledCardTitle>sign up</StyledCardTitle>

                                <Grid container direction='column' justify='flex-start' style={{}}>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"23.125em"} title={"First Name"} />
                                    </Grid>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"23.125em"} title={"Last Name"} />
                                    </Grid>

                                </Grid>
                                <StyledShippingCardDetails>
                                    <StyledSmallBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledSmallBlueCircle>

                                    <StyledCardText>I agree to Terms & Conditions, Privacy Policy</StyledCardText>
                                </StyledShippingCardDetails>
                                <Grid item style={{ marginTop: '2em' }}>
                                    <Link route={BOOKING_DETAILS}>
                                        <YMButton title={"SIGN UP"} />
                                    </Link>
                                </Grid>
                            </StyledCard>
                        </Grid>
                    </Hidden>


                    <Hidden lgUp>
                        <Grid item>
                            <StyledCard>
                                <Grid container justify='space-between' style={{ marginBottom: '0.5em' }}>
                                    <StyledCardText >Already a Member?</StyledCardText>
                                    <StyledCardSignIn>SIGN IN</StyledCardSignIn>
                                </Grid>

                                <StyledCardTitle>sign up</StyledCardTitle>

                                <Grid container direction='column' justify='flex-start' style={{}}>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"22em"} title={"First Name"} />
                                    </Grid>

                                    <Grid item style={{ paddingBottom: '1em' }}>
                                        <Input widthStr={"22em"} title={"Last Name"} />
                                    </Grid>

                                </Grid>
                                <StyledShippingCardDetails>
                                    <StyledSmallBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledSmallBlueCircle>

                                    <StyledCardText2>I agree to Terms & Conditions, Privacy Policy</StyledCardText2>
                                </StyledShippingCardDetails>
                                <Grid item style={{ marginTop: '1em', textAlign: 'center' }}>
                                    <Link route={BOOKING_DETAILS}>
                                        <YMButton title={"SIGN UP"} />
                                    </Link>
                                </Grid>
                            </StyledCard>
                        </Grid>
                    </Hidden>

                </Grid>
            </div >
        )
    }
}
