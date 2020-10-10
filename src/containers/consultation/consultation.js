import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import StepperQ from '../../components/StepperQ'
import Button from "../../components/Button";
import { Link } from '../../server/routes';
import { CONSULTATION_QUESTIONNAIRE_HAIR_LOSS } from "../../constants/pathConstants";
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

const StyledTickImage = styled.img`

`


const StyledHeading = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-align: center;
text-transform: uppercase;
color: #15253B;
margin: 0 auto 1.7em;
width:25%;
@media (max-width: 700px) {
    font-size: 36px;
    line-height: 50px;
    width:100%;
    margin-top:0em;
  }
`


const StyledDescription = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
text-align: center;
color: #FF0000;
width:28%;
margin:4.8em auto 1.5em;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 30px;
    width:70%;
margin:2.8em auto 1.5em;

  }
`

const StyledCard = styled.div`
width: 29.6875em;
height: 32.5625em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:0 0 16.5em 0;
padding:2.5em 1.8em 2.9em 3.125em ;
@media (max-width: 700px) {
    width: 345px;
    height: 389px;
    padding:1em 1em 1em 1em ;

    margin:auto;
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
margin: 0;
line-height:1.2em;
@media (max-width: 700px) {
    font-size: 36px;
    line-height: 50px;
    text-align:center;
margin-bottom:0.5em;
  }
`

const StyledCardText = styled.h2`
display:block;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
color: #15253B;
margin-bottom:1.5em;
margin-top:1.3em;
@media (max-width: 700px) {
    font-size: 16px;
    line-height: 30px;
    text-align:center;
margin-bottom:2.2em;
  }
`

const StyledManPic = styled.img`
display:block;
width: 21.125em;
height: 32.6em;
margin-left:auto;
 `

const StyledYellowHighlight = styled.div`
width: 27.8125em;
height: 32.6em;
background: #ECC2AC;
padding:0 ;
 `

const StyledShippingCardDetails = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
padding: 10px 0;
`


const StyledStep = styled.div`
display: flex;
flex-direction: row;
margin-top:2em;
`;

const StyledLine = styled.div`
  width: 8.2em;
  height: 0px;
  margin-left: 0;
  margin-right: 0;
  margin-top:45px;
  margin-bottom:auto;
  border: 1px solid rgba(21, 37, 59, 0.3);
`;


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

export default class DoctorConsultation extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

                <Hidden mdDown>
                    <StepperQ stepNum={1} />
                </Hidden>

                <Hidden lgUp>
                    <StepperMobile stepName={'Start'} />
                </Hidden>


                <div>
                    <StyledDescription>Your order has been placed. Just one more step required to receive your hair kit.</StyledDescription>

                    <StyledHeading>REQUIRED!</StyledHeading>

                </div>

                <Hidden mdDown>
                    <Grid container direction='row' justify='center'>
                        <Grid item>
                            <StyledYellowHighlight >
                                <StyledManPic src={'../static/assets/consultation/doctor@3x.png'} />
                            </StyledYellowHighlight>
                        </Grid>
                        <Grid item>
                            <StyledCard>

                                <StyledCardTitle>CONSULT THE DOCTOR</StyledCardTitle>

                                <StyledCardText>Your order is confirmed. However as the hair kit contains medicines, our doctor has to review your information before we can ship the order.
                                </StyledCardText>

                                <Grid item>
                                    <Link route={CONSULTATION_QUESTIONNAIRE_HAIR_LOSS}>
                                        <Button primary title={"START CONSULTATION"} />
                                    </Link>
                                </Grid>
                            </StyledCard>
                        </Grid>
                    </Grid>
                </Hidden>

                <Hidden lgUp>

                    <StyledCard>

                        <StyledCardTitle>CONSULT THE DOCTOR</StyledCardTitle>

                        <StyledCardText>Your order is confirmed. However as the hair kit contains medicines, our doctor has to review your information before we can ship the order.
                        </StyledCardText>

                        <Grid item style={{ textAlign: 'center' }}>
                            <Link route={CONSULTATION_QUESTIONNAIRE_HAIR_LOSS}>
                                <Button primary title={"START CONSULTATION"} />
                            </Link>
                        </Grid>
                    </StyledCard>

                </Hidden>
            </div>
        )
    }
}
