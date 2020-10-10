import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Stepper from '../../components/Stepper'
import YMInput from '../../components/YMInput';
import YMButton from "../../components/YMButton";
import { Link } from '../../server/routes';
import { BOOKING_SHIP } from "../../constants/pathConstants";
import Hidden from "@material-ui/core/Hidden";
import StepperMobile from "../../components/StepperMobile";


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
width: 57.5em;
height: 25.125em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:auto;
margin-bottom:16.5em;
padding:1.4em 3.125em 2.9em 3.125em ;
@media (max-width: 700px) {
    width: 345px;
    height: 434px;
    padding:1em 1em 1em 1em ;
    margin-bottom:6.5em;
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
margin-bottom:0.5em;
  }
`


export default class Details extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

                <Hidden mdDown>
                    <Stepper stepNum={3} />
                </Hidden>

                <Hidden lgUp>
                    <StepperMobile stepName={'Details'} />
                </Hidden>


                <div>
                    <StyledHeading>WELCOME</StyledHeading>

                    <StyledDescription>Just a couple of more steps for a healthy & handsome you.
                    </StyledDescription>
                </div>

                <Hidden mdDown>
                    <StyledCard>
                        <StyledCardTitle>details</StyledCardTitle>

                        <Grid container direction='column' justify='flex-start'  >

                            <Grid item container direction='row' justify='flex-start'  >

                                <Grid item style={{ paddingBottom: '1em', marginRight: '3.125em' }}>
                                    <YMInput widthStr={"23.125em"} title={"First Name"} />
                                </Grid>

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <YMInput widthStr={"23.125em"} title={"Last Name"} />
                                </Grid>

                            </Grid>

                            <Grid item container direction='row' justify='flex-start'  >

                                <Grid item style={{ marginRight: '3.125em' }}>
                                    <YMInput widthStr={"23.125em"} title={"Date of Birth"} />
                                </Grid>

                                <Grid item >
                                    <YMInput widthStr={"23.125em"} title={"Mobile Number"} />
                                </Grid>

                            </Grid>
                            <Grid item style={{ marginTop: '2em' }}>
                                <Link route={BOOKING_SHIP}>
                                    <YMButton title="CONTINUE" />
                                </Link>
                            </Grid>

                        </Grid>
                    </StyledCard>
                </Hidden>


                <Hidden lgUp>

                    <StyledCard>
                        <StyledCardTitle>details</StyledCardTitle>

                        <Grid container direction='column' justify='flex-start'  >

                            <Grid item container direction='row' justify='flex-start'  >

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <YMInput widthStr={"22em"} title={"First Name"} />
                                </Grid>

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <YMInput widthStr={"22em"} title={"Last Name"} />
                                </Grid>

                            </Grid>

                            <Grid item container direction='column' justify='flex-start'  >

                                <Grid item style={{ paddingBottom: '1em' }}>
                                    <YMInput widthStr={"22em"} title={"Date of Birth"} />
                                </Grid>

                                <Grid item >
                                    <YMInput widthStr={"22em"} title={"Mobile Number"} />
                                </Grid>

                            </Grid>
                            <Grid item style={{ marginTop: '2em', textAlign: 'center' }}>
                                <Link route={BOOKING_SHIP}>
                                    <YMButton title="CONTINUE" />
                                </Link>
                            </Grid>

                        </Grid>
                    </StyledCard>

                </Hidden>


            </div>
        )
    }
}
