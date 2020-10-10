import React, { Component } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import TitleComponent from "../components/TitleComponent";
import { Router } from '../server/routes';
import Hidden from "@material-ui/core/Hidden";
////////////
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
    font-size: 6em;
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
`;
//////
////////////

const StyledContainer = styled.div`
padding: 50px 0 0 10px;
@media (min-width: 1300px) {
 padding: 50px 0 0 300px;
}
 `


////////
///////////////////////////////////////////////////////
const StyledBlueCircle = styled.div`
  height: 16.5em;
  width: 16.5em;
  background-color: #15253B;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
`

const StyledBlueCircleText = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
text-align: center;
text-transform: uppercase;
text-align:center;
color: #15253B;
padding-bottom:5em
`

const StyledManImage = styled.img`

`
///////////////////////////////////////////////////////
// Styled Yellow Box Tags:

const StyledYellowBox = styled.div`
  height: 100%;
  width: 75%;
  border: none;
  border: 0;
  position: relative;
  margin:auto;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const StyledProductCard = styled.div`
padding: 50px 0px 0px 0px;
margin:auto;
@media (max-width: 700px) {
    padding: 50px 0 ;
  }
`;

const StyledProductColorBox = styled.div`
position: relative;
background: #ECC2AC;
padding: 3em 5.6em 4em 2.8em;
@media (max-width: 700px) {
    padding: 10px 10px 20px 10px ;
  }
`

const StyledProductCost = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3em;
text-transform: capitalize;
color: #ECC2AC;
`;

const StyledProductTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.75em;
  text-transform: uppercase;
  color: #15253b;
  margin:0;
  @media (max-width: 700px) {
    font-size: 2.5em;
  }
`;

const StyledProductDescription = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 2em;
  letter-spacing: 0.02em;
  color: #15253b;
  padding-bottom: 2em;
`;

const StyledProductBestForTitle = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 1em;


color: #15253B;
`;

const StyledProductBestForText = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;

font-size: 1em;


color: #15253B;
`;

const StyledProductWhatYouGetTitle = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 1em;

color: #15253B;
`;

const StyledProductWhatYouGetText = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1em;
color: #15253B;
`;

const StyledProductImage = styled.img`
position:relative;
 width: 100%;
`;

const StyledButtonContainer = styled.div`
position:absolute;
z-index: 10;
 bottom: -25px;
 right: -50px;
 @media (max-width: 700px) {
    bottom: -25px;
 right: -18px;
  }
`
//////////////////////////////////////////


export default class GetStarted extends Component {
    state = {
        productData: [
            {
                cost: 'Rs. 1500',
                title: "The Complete Hair Kit",
                image: "../static/assets/get-started/bottles.png",
                details: {
                    description: 'The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.',
                    bestFor: 'Advanced hair loss',
                    whatYouGet: 'Finasteride 1mg x 30, Minoxidil 60 ml, Vitamins 60 '
                }
            },
            {
                cost: 'Rs. 1500',
                title: "The Classic Hair Kit",
                image: "../static/assets/get-started/bottles.png",
                details: {
                    description: 'The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.',
                    bestFor: 'Advanced hair loss',
                    whatYouGet: 'Finasteride 1mg x 30, Minoxidil 60 ml, Vitamins 60 '
                }
            },
        ],
    };

    render() {

        const message = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi eu commodo sem. Praesent laoreet tortor non nulla rutrum mollis.`

        const { productData } = this.state;

        const productListTag = productData.map((product, index) => {
            return (
                <StyledProductCard key={index}>
                    <Hidden mdDown>
                        <Grid container direction="row">

                            {index % 2 === 0 && <Grid item xs={6} container justify="center" alignItems="center" style={{ padding: 20 }}>
                                <StyledProductImage src={product.image} />
                            </Grid>}

                            <Grid item xs={6} direction="column" style={{ padding: '50px 0px' }}>
                                {/* cost */}
                                <StyledProductCost>{product.cost}</StyledProductCost>

                                {/* title */}
                                <StyledProductTitle>{product.title}</StyledProductTitle>
                                {/* <div style={{ background: '#ECC2AC', padding: ' 3em 5.6em 4em 2.8em', width: '37em' }}> */}
                                <StyledProductColorBox>
                                    {/* desc */}
                                    <StyledProductDescription>
                                        {product.details.description}
                                    </StyledProductDescription>

                                    <StyledProductBestForTitle >
                                        Best For:
                                    </StyledProductBestForTitle>
                                    <StyledProductBestForText>
                                        {product.details.bestFor}
                                    </StyledProductBestForText>

                                    <StyledProductWhatYouGetTitle >
                                        What You Get:
                                    </StyledProductWhatYouGetTitle>
                                    <StyledProductWhatYouGetText>
                                        {product.details.whatYouGet}
                                    </StyledProductWhatYouGetText>
                                    <StyledButtonContainer>
                                        <Button secondary primary title={"GET STARTED"} onClick={() => Router.pushRoute(`/hair-kit${index + 1}`)} />
                                    </StyledButtonContainer>
                                </StyledProductColorBox>
                                {/* </div> */}
                            </Grid>

                            {index % 2 !== 0 && <Grid item xs={6} container justify="center" alignItems="center" style={{ padding: 20 }}>
                                <StyledProductImage src={product.image} />
                            </Grid>}

                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <Grid container direction="column">

                            <Grid item xs={12} container justify="center" alignItems="center" style={{}}>
                                <StyledProductImage src={product.image} />
                            </Grid>

                            <Grid item xs={12} direction="column" style={{}}>
                                {/* cost */}
                                <StyledProductCost>{product.cost}</StyledProductCost>

                                {/* title */}
                                <StyledProductTitle>{product.title}</StyledProductTitle>

                                <StyledProductColorBox>
                                    {/* desc */}
                                    <StyledProductDescription>
                                        {product.details.description}
                                    </StyledProductDescription>

                                    <StyledProductBestForTitle >
                                        Best For:
                                    </StyledProductBestForTitle>
                                    <StyledProductBestForText>
                                        {product.details.bestFor}
                                    </StyledProductBestForText>

                                    <StyledProductWhatYouGetTitle >
                                        What You Get:
                                    </StyledProductWhatYouGetTitle>
                                    <StyledProductWhatYouGetText>
                                        {product.details.whatYouGet}
                                    </StyledProductWhatYouGetText>
                                    <StyledButtonContainer>
                                        <Button secondary primary title={"GET STARTED"} onClick={() => Router.pushRoute(`/hair-kit${index + 1}`)} />
                                    </StyledButtonContainer>
                                </StyledProductColorBox>

                            </Grid>

                        </Grid>
                    </Hidden>
                </StyledProductCard >
            );
        });

        return (
            <div>
                <StyledContainer>
                    <TitleComponent />
                </StyledContainer>

                {/* Choose Text */}
                < Grid container >
                    <StyledConsultationText>choose</StyledConsultationText>
                </Grid >
                <Hidden mdDown>
                    <Grid
                        style={{ paddingBottom: 70 }}
                        container
                        direction="row">
                        {/* Text Container  */}

                        <Grid item md={2}>
                        </Grid>
                        <Grid item md={4}>
                            <StyledDescriptionText>{message}</StyledDescriptionText>
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
                            <StyledDescriptionText>{message}</StyledDescriptionText>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        {/* Image Item */}

                    </Grid>
                </Hidden>
                {/* Products List */}
                <StyledYellowBox>
                    <div>
                        {productListTag}
                    </div>
                </StyledYellowBox>

                {/* men pics */}
                <Grid container justify='space-around' style={{ paddingTop: '5em', width: '58%', margin: 'auto', maxWidth: '100em' }}>
                    <Grid item direction='column' justify='center'>
                        <StyledBlueCircle >
                            <StyledManImage style={{ paddingTop: '19%', paddingBottom: '19%', width: '50%' }} src='../static/assets/get-started/Group.png' />
                        </StyledBlueCircle>
                        <StyledBlueCircleText>
                            no medical fees
                        </StyledBlueCircleText>
                    </Grid>
                    <Grid item direction='column' justify='center'>
                        <StyledBlueCircle >
                            <StyledManImage style={{ paddingTop: '19%', paddingBottom: '19%', width: '50%' }} src='../static/assets/get-started/Group.png' />
                        </StyledBlueCircle>
                        <StyledBlueCircleText>
                            no shipping fees
                        </StyledBlueCircleText>
                    </Grid>
                    <Grid item direction='column' justify='center'>
                        <StyledBlueCircle >
                            <StyledManImage style={{ paddingTop: '19%', paddingBottom: '19%', width: '50%' }} src='../static/assets/get-started/Group.png' />
                        </StyledBlueCircle>
                        <StyledBlueCircleText>
                            no hidden taxes
                        </StyledBlueCircleText>
                    </Grid>
                </Grid>
                <Footer />
                <FooterCompany />
            </div >
        );
    }
}
