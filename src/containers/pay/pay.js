import React, { Component } from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Stepper from '../../components/Stepper';
import { Link } from '../../server/routes';
import { CONSULTATION_DOCTOR } from "../../constants/pathConstants";
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

padding-bottom:2em;
  }
`

const StyledCard = styled.div`
width: 57.5em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:auto;
margin-bottom: 10em;
padding:2.5em 6.25em;
@media (max-width: 700px) {
    width: 345px;
    height: 100%;
    padding:1em 1em 1em 1em ;
    margin-bottom:6.5em;
  }
  `

const StyledCardImg = styled.img`
width: 14.5em;
height: 12.8em;
`

const StyledCardTitle = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
text-transform: uppercase;
color: #15253B;
margin:0;
`

const StyledLine2 = styled.div`
width: 16.3125;
border: 1px solid rgba(21, 37, 59, 0.3);
`;

const StyledTotal = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: #15253B;
`

const StyledCardText = styled.h5`
display:inline;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 0.8125em;
color: rgba(21, 37, 59, 0.5);
margin:0;
`


export default class Pay extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

                <Hidden mdDown>
                    <Stepper stepNum={5} />
                </Hidden>

                <Hidden lgUp>
                    <StepperMobile stepName={'Pay'} />
                </Hidden>



                <div>
                    <StyledHeading>HOORAY!</StyledHeading>

                    <StyledDescription>Just a couple of more steps for a healthy & handsome you.
                    </StyledDescription>
                </div>

                <Hidden mdDown>
                    <StyledCard>
                        <Grid container direction='row'>
                            <Grid item container xs={6} direction='column' justify='flex-end'>

                                <StyledCardImg styled={{ padding: 'auto' }} src={'../static/assets/hair-kit1/hair-kit-img.png'} />

                            </Grid>

                            <Grid item container xs={6} direction='column' justify='flex-start'>
                                <Grid item style={{ paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                    <StyledCardTitle>the classic hair kit
                                    </StyledCardTitle>
                                </Grid>

                                <Grid item container justify="space-between" direction="row" style={{ paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                    <StyledTotal>TOTAL</StyledTotal>
                                    <StyledTotal>Rs. 1500</StyledTotal>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' style={{ padding: '50px 0 10px 0' }}>
                            <Grid item xs={6} style={{ width: '21.875em', height: '3.75em', paddingRight: 10 }}>
                                <Link route={CONSULTATION_DOCTOR}>
                                    <Button isFullWidth primary title={"PAY ONLINE"} />
                                </Link>
                            </Grid>
                            <Grid item xs={6} style={{ paddingLeft: 10 }}>
                                <Link route={CONSULTATION_DOCTOR}>
                                    <Button isFullWidth secondary title={"CONFIRM COD"} />
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container direction='row'>
                            <StyledCardText>100% secured with Razorpay</StyledCardText>
                        </Grid>
                    </StyledCard>
                </Hidden>


                <Hidden lgUp>
                    <StyledCard>

                        <Grid container direction='column'>

                            <Grid item container direction='column' justify='center' style={{ textAlign: 'center' }}>
                                <Grid item>
                                    <StyledCardImg style={{ padding: 'auto' }} src={'../static/assets/hair-kit1/hair-kit-img.png'} />
                                </Grid>
                            </Grid>

                            <Grid item container direction='column' justify='center' style={{ textAlign: 'center' }}>

                                <Grid item style={{ width: '80%', margin: 'auto', paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.2)', textAlign: 'center' }}>
                                    <StyledCardTitle>the classic hair kit
                                    </StyledCardTitle>
                                </Grid>

                                <Grid item container justify="space-between" direction="row" style={{ width: '80%', margin: 'auto', textAlign: 'center', paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
                                    <StyledTotal>TOTAL</StyledTotal>
                                    <StyledTotal>Rs. 1500</StyledTotal>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container direction='column' style={{ padding: '40px 0 10px 0' }}>

                            <Grid item style={{ width: '21.875em', height: '3.75em', padding: 0, marginBottom: '11px' }}>
                                <Link route={CONSULTATION_DOCTOR}>
                                    <Button isFullWidth primary title={"PAY ONLINE"} />
                                </Link>
                            </Grid>

                            <Grid item style={{ padding: 0, width: '21.875em', height: '3.75em' }}>
                                <Link route={CONSULTATION_DOCTOR}>
                                    <Button isFullWidth secondary title={"CONFIRM COD"} />
                                </Link>
                            </Grid>

                        </Grid>

                        <Grid container direction='column' style={{ textAlign: 'center' }}>
                            <StyledCardText>100% secured with Razorpay</StyledCardText>
                        </Grid>

                    </StyledCard>
                </Hidden>



            </div >
        )
    }
}
