import React, { Component } from "react";
import { Link } from '../../server/routes';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Stepper from "../../components/Stepper";
import YMInput from "../../components/YMInput";
import YMButton from "../../components/YMButton";
import { BOOKING_SIGN_UP } from "../../constants/pathConstants";
import Hidden from "@material-ui/core/Hidden";
import StepperMobile from "../../components/StepperMobile";
import FooterCompany from "../../components/FooterCompany";

const StyledHeroWave = styled.img`
margin-left:17%;
 height: 5em;
 @media (max-width: 700px) {
    height: 2em;
    margin-left:7%;
    margin-top:1.5em;
  }
 `

const StyledBlueCircle = styled.div`
display:block;
  height: 6.625em;
  width: 6.625em;
  background-color: #15253B;
  border-radius: 50%;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
`;

const StyledBlueCircleText = styled.div`
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
height: 10px;
width: 10px;
`

const StyledYellowCircle = styled.div`
display:block;
  height: 6.625em;
  width: 6.625em;
  background-color: #ECC2AC;
  border-radius: 50%;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
`

const StyledYellowCircleText = styled.div`
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

const StyledLine = styled.div`
  width: 8.2em;
  height: 0px;
  margin-left: 0;
  margin-right: 0;
  margin-top:auto;
  margin-bottom:auto;
  border: 1px solid rgba(21, 37, 59, 0.3);
`;

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
@media (max-width: 700px) {

    font-size: 16px;
    line-height: 30px;
    width:70%;
    margin:auto;
  }
`

//////////////////////////////////////////////////////////
const StyledClearCart = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
text-decoration-line: underline;
color: rgba(21, 37, 59, 0.5);
  `

////////////////////////////////////////////////////
const StyledHero10 = styled.div`
  position: relative;
  height:100%;
​
  max-width:44.5em;
  margin:auto;
  width:37%;
  @media (max-width: 700px) {
    max-width:700px;
    width:100%;
  }
  `

const StyledHero1Image = styled.img`
width:100%;

@media (min-width: 700px) {
    width: 44em;
    height: 39em;
  }
 `

const StyledYellowHighlight = styled.div`
height:10em;
width:26.6em;
background: #ECC2AC;
margin-top:-8em;
@media (min-width: 1300px) {
    margin-top:-14em;
    width: 45.6em;
    height: 10.6em;
    background: #ECC2AC;
    margin-left:-0.7em;
   }
 `

const StyledProductList = styled.h2`
 font-family: Poppins;
 font-style: normal;
 font-weight: 500;
 font-size: 1.5em;
 color: #15253B;
 margin:0;
 width: 100%;
 @media (max-width: 700px) {
 width: 100%;
 font-size: 18px;
 line-height: 27px;
  }
  `;

const StyledProductDescription = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: rgba(21, 37, 59, 0.5);
margin:0;
@media (max-width: 700px) {
   padding-top:1em;
   padding-bottom:1em;
    font-size: 16px;
    line-height: 24px;
    width:90%;
     }
 `

const StyledProductDescription2 = styled.h2`
 font-family: Poppins;
 font-style: normal;
 font-weight: 500;
 font-size: 1.125em;
 color: rgba(21, 37, 59, 0.5);
 margin:0;
 @media (max-width: 700px) {
    padding-top:1em;
    padding-bottom:1em;
font-size: 12px;
line-height: 18px;

      }
  `
const StyledShippingCard = styled.div`
width: 57.5em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
border-bottom: 0;
box-sizing: border-box;
margin-left:auto;
margin-right:auto;
margin-top:6.25em;
margin-bottom:2.2em;
@media (max-width: 700px) {
margin-top:2.25em;
     width:90%;
      }
`

const StyledLineCardHorizontal = styled.div`
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
width:100%;
`
const StyledShippingCardText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: #15253B;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
@media (max-width: 700px) {
    font-size: 1em;

    }
`

const StyledShippingCardTextLeft = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: #15253B;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
border-left: 1px solid rgba(0, 0, 0, 0.2);
@media (max-width: 700px) {
    font-size: 1em;
    border-left: 0px solid rgba(0, 0, 0, 0.2);
    }
`
const StyledShippingCardText2 = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 0.8125em;
color: rgba(21, 37, 59, 0.5);
border:0;
width:58%;
max-width:21em;
padding-top:1.5em;
@media (max-width: 700px) {

    padding-top:0.5em;
     width:90%;
      }
`

const StyledBlueCircleBullet = styled.div`
  height: 1.5625em;
  width: 1.5625em;
  background-color: #15253B;
  border-radius: 50%;
  text-align: center;
  margin: 0 15px 0 0;
`

const StyledBlueCircleBulletText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: #15253B;
@media (max-width: 700px) {
    font-size: 1em;

    }
`

const StyledAddCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 10em;
height: 50px;
`

const StyledShippingCardDetails = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
padding: 10px 0;
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
  background: #ECC2AC;
  `

const StyledHero10News = styled.img`
  height: 3em;
  background: #ECC2AC;
   @media (min-width: 1300px) {
   height: 6em;
   }
  `
export default class Order extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

                <Hidden mdDown>
                    <Stepper stepNum={1} />
                </Hidden>

                <Hidden lgUp>
                    <StepperMobile stepName={'Order'} />
                </Hidden>

                <div>
                    <StyledHeading>your treatment
                    </StyledHeading>

                    <StyledDescription>You are minutes away from a healthy & handsome life.
                    </StyledDescription>
                </div>

                <Hidden mdDown>
                    <Grid>

                        <StyledHero10>
                            <Grid container direction='column' justify='center'>
                                <Grid item style={{ margin: 'auto' }}>
                                    <StyledHero1Image src={'../static/assets/hair-kit1/hair-kit-img.png'} />
                                    <StyledYellowHighlight />
                                </Grid>

                                <Grid container direction='row' justify='center'
                                      style={{ marginTop: '3.5em', marginBottom: '2.5em', width: '46.5em' }}>
                                    <Grid item xs={8}>
                                        <StyledProductList>
                                            1. Minoxidil. (60 ml bottle)
                                        </StyledProductList>
                                        <StyledProductList>
                                            2. Vitamins. (60 Biotin Gummies)
                                        </StyledProductList>
                                        <StyledProductList>
                                            3. Shampoo. (DHT 150 ml)
                                        </StyledProductList>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <StyledProductDescription>
                                            All the products combined gives you the best defense against hair loss.
                                        </StyledProductDescription>
                                    </Grid>

                                </Grid>
                                <Grid container direction='row' justify='flex-start'>
                                    <Grid item>
                                        <YMInput widthStr={'21.875em'} title={'Apply Coupon'} />
                                    </Grid>

                                    <Grid item>
                                        <YMButton title={'APPLY'} />
                                    </Grid>

                                    <Grid item>
                                        <StyledAddCard>
                                            <StyledClearCart>Clear Cart
                                            </StyledClearCart>
                                        </StyledAddCard>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledHero10>
                    </Grid>
                </Hidden>

                <Hidden lgUp>
                    <Grid>

                        <StyledHero10>
                            <Grid container direction='column' justify='center'>
                                <Grid item style={{ margin: 'auto' }}>
                                    <StyledHero1Image src={'../static/assets/hair-kit1/hair-kit-img.png'} />
                                    <StyledYellowHighlight />
                                </Grid>

                                <Grid container direction='column' justify='center' style={{ marginTop: '2.5em', marginBottom: '0em', paddingLeft: '25px' }}>
                                    <Grid item   >
                                        <StyledProductList>
                                            1. Minoxidil. (60 ml bottle)
                                        </StyledProductList>
                                        <StyledProductList>
                                            2. Vitamins. (60 Biotin Gummies)
                                        </StyledProductList>
                                        <StyledProductList>
                                            3. Shampoo. (DHT 150 ml)
                                        </StyledProductList>

                                        <StyledProductDescription>
                                            All the products combined gives you the best defense against hair loss.
                                        </StyledProductDescription>
                                    </Grid>

                                </Grid>

                                <Grid container direction='row' justify='flex-start' style={{ paddingLeft: '25px' }}>
                                    <Grid item>
                                        <YMInput widthStr={'12.875em'} title={'Apply Coupon'} />
                                    </Grid>

                                    <Grid item>
                                        <YMButton title={'APPLY'} />
                                    </Grid>

                                    <Grid item container justify='center' style={{ marginLeft: '-25px' }}>
                                        <StyledAddCard>
                                            <StyledClearCart>Clear Cart
                                            </StyledClearCart>
                                        </StyledAddCard>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledHero10>
                    </Grid>
                </Hidden>

                <StyledShippingCard>
                    <Grid container direction='row'>

                        <Grid item xs={4} container direction='column'>
                            <StyledShippingCardText style={{
                                paddingTop: '1.25em',
                                paddingBottom: '1.25em',
                                paddingLeft: '1.5em'
                            }}>SUBTOTAL
                            </StyledShippingCardText>

                            <StyledShippingCardText style={{
                                paddingTop: '2.125em',
                                paddingLeft: '1.5em',
                                height: '15em'
                            }}>SHIPPING
                            </StyledShippingCardText>

                            <StyledShippingCardText style={{
                                paddingTop: '1.25em',
                                paddingBottom: '1.25em',
                                paddingLeft: '1.5em'
                            }}>TOTAL
                            </StyledShippingCardText>
                        </Grid>

                        <Grid item xs={8} container direction='column'>
                            <StyledShippingCardTextLeft
                                style={{ paddingTop: '1.25em', paddingBottom: '1.25em', paddingLeft: '1.5em' }}>Rs.
                                1500</StyledShippingCardTextLeft>
                            <StyledShippingCardTextLeft
                                style={{
                                    paddingTop: '2.125em',
                                    paddingLeft: '1.5em', height: '15em'
                                }}>
                                <StyledShippingCardDetails>
                                    <StyledBlueCircleBullet>
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircleBullet>

                                    <StyledBlueCircleBulletText>
                                        Flat rate: $20.00
                                    </StyledBlueCircleBulletText>

                                </StyledShippingCardDetails>

                                <StyledShippingCardDetails>

                                    <StyledBlueCircleBullet>
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }}
                                                         src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircleBullet>

                                    <StyledBlueCircleBulletText>
                                        Free shipping
                                    </StyledBlueCircleBulletText>

                                </StyledShippingCardDetails>
                                <StyledShippingCardDetails>

                                    <StyledBlueCircleBullet>
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }}
                                                         src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircleBullet>

                                    <StyledBlueCircleBulletText>
                                        Local pickup
                                    </StyledBlueCircleBulletText>

                                </StyledShippingCardDetails>

                                <StyledShippingCardText2>Shipping options will be updated during checkout. Calculate
                                    shipping
                                </StyledShippingCardText2>
                            </StyledShippingCardTextLeft>

                            <StyledShippingCardTextLeft
                                style={{ paddingTop: '1.25em', paddingBottom: '1.25em', paddingLeft: '1.5em' }}>Rs.
                                1500</StyledShippingCardTextLeft>
                        </Grid>

                    </Grid>
                </StyledShippingCard>

                <Grid container direction="row" justify='space-between' alignItems="center" style={{ paddingLeft: '20px', marginBottom: '40px' }}>
                    <Grid item xs={6}>
                        <StyledProductDescription2 >
                            * Delivery of Finasteride tablets is subject to doctor approval.
                        </StyledProductDescription2>
                    </Grid>
                    <Grid item xs={6} style={{ padding: '0 0 0 35px' }}>
                        <Link route={BOOKING_SIGN_UP}>
                            <YMButton title={'CONTINUE'} />
                        </Link>
                    </Grid>
                </Grid>

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
