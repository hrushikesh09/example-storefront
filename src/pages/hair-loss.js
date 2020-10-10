import React, { Component } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import TitleComponent from "../components/TitleComponent";
import Hidden from "@material-ui/core/Hidden";
// Styled Blue Box Tags:

const StyledBlueBox = styled.div`
  background: #15253b;
  width: 100%;
  border: none;
  border: 0;
`;

const StyledBlueBoxTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.75em;
  color: #ffffff;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 700px) {
  padding: 0 2em 1em 2em ;
  font-size: 2.25em;
  }
`;

const StyledBlueBoxText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  @media (max-width: 700px) {
    font-size: 1em;
    }
`;

const StyledHero3ImageContainer = styled.div`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  @media (max-width: 700px) {
    height: 140px;
    width: 140px;
    }
`;

const StyledHero3Image = styled.img`
  height: 120px;
  @media (max-width: 700px) {
    height: 84px;
    }
`;

const StyledHero10Wave = styled.img`
  height: 5em;
  position: absolute;
  top: 20em;
  left 0;
`;

const StyledHero10Wave2 = styled.img`
  height: 2em;
  top: 20em;
  left 0;
`;
//////////////////////////////////////////

// Styled Yellow Waves Tags:
const StyledHero2WaveLower = styled.img`
  width: 100%;
`;
//////////////////////////////////////////

// Consultation Container
const StyledConsultationText = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3em;
  text-transform: uppercase;
  color: #15253b;
  margin: 0;
  text-align: center;
  position: static;
  @media (min-width: 700px) {
    font-size: 12em;
     margin: 0;
       text-align: left;
  }
`;

const StyledConsultationImage = styled.img`
  display: block;
   max-width: 20em;
  border: none;
  border: 0;
`;

const StyledDescriptionText = styled.h2`
  display: block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  padding: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #15253b;
`;
//////////////////////////////////////////

// Styled Yellow Box Tags:

const StyledYellowBox = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  border: none;
  border: 0;
  padding: 0;
  position: relative;
`;

const StyledYellowBoxHeading = styled.h2`
display:block
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
font-size: 3em;
  text-align: right;
  color: #15253B;
  text-transform: uppercase;
 margin: -0.8em 0 0 0;
 position: absolute;
 ${props => props.odd ? `left: 0` : `right: 0`};
@media (min-width: 700px) {
    font-size: 12em;
    margin: 0;
    text-align: right;
    top: -85px;
    ${props => props.odd ? `left: 0` : `right: 0`}
  }
`;

const StyledProductCard = styled.div`
position: relative;
padding: 10px;
    @media (min-width: 800px) {
   padding: 200px 150px 150px 150px;
  }
`;

const StyledProductCardBody = styled.div`
padding: 10px;
    @media (min-width: 800px) {
padding: 0 100px;
  }
`;

const StyledProductTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 70px;
  text-transform: uppercase;
  color: #15253b;
`;

const StyledProductDescription = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #15253b;
  padding-bottom: 2em;
`;

const StyledProductImage = styled.img`
position:relative;
  max-width: 15em;
 filter: opacity(70%);
 @media (max-width: 700px) {
    padding: 50px 0 0 0;
      }
`;
//////////////////////////////////////////

//random text
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
font-size: 2.25em;
text-transform: uppercase;
color: #15253b;
margin-top: 0;
margin-bottom: 0;
  @media (min-width: 700px) {
  width: 40%;
   font-size: 3.75em;
}
`;

const StyledContainer = styled.div`
 padding: 50px 0 0 10px;
   @media (min-width: 1300px) {
    padding: 50px 0 0 300px;
  }
 `

export default class OurOffering extends Component {
    state = {
        productData: [
            {
                header: 'THE CAUSE',
                title: "FINASTERIDE,1 MG ",
                image: "../static/assets/hairloss/dna@3x.png",
                description:
                    "Finasteride is a prescription pill that’s taken daily. It works by blocking the production of DHT, a hormone that causes male pattern baldness. This FDA-approved treatment has been proven to prevent the spread of receding hairlines and boost hair regrowth.",
            },
            {
                header: 'THE TREATMENT',
                title: "FINASTERIDE,1 MG ",
                image: "../static/assets/hairloss/hair1@3x.png",
                description:
                    "Finasteride is a prescription pill that’s taken daily. It works by blocking the production of DHT, a hormone that causes male pattern baldness. This FDA-approved treatment has been proven to prevent the spread of receding hairlines and boost hair regrowth.",
            },
        ],
    };

    render() {
        const message = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
        eu commodo sem. Praesent laoreet tortor non nulla rutrum mollis.
        Fusce venenatis erat in ultrices iaculis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Morbi eu commodo sem.
        Praesent laoreet tortor non nulla rutrum mollis. Fusce venenatis
        erat in ultrices iaculis. Nulla facilisi. Nullam nec libero non
        leo luctus iaculis a eu sapien.`;

        const { productData } = this.state;

        const productListTag = productData.map((product, index) => {
            return (
                <StyledProductCard key={index}>
                    <Hidden mdDown>
                        <div>
                            <StyledYellowBoxHeading odd={index % 2 !== 0}>{product.header}</StyledYellowBoxHeading>
                        </div>
                        <Grid container direction="row">
                            {index % 2 === 0 && <Grid item md={5} container justify="center" alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>}


                            <Grid item md={7} direction="column" style={{ padding: '0 100px' }}>

                                <StyledProductDescription>
                                    {product.description}
                                </StyledProductDescription>

                            </Grid>

                            {index % 2 !== 0 && <Grid item md={5} container justify="center" alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>}
                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <div>
                            <StyledYellowBoxHeading odd={index % 2 !== 0}>{product.header}</StyledYellowBoxHeading>
                        </div>
                        <Grid container direction="row">
                            <Grid item xs={12} container justify="center" alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>
                            <StyledProductCardBody>

                                <Grid item xs={12} direction="column" >

                                    <StyledProductDescription>
                                        {product.description}
                                    </StyledProductDescription>

                                </Grid>

                            </StyledProductCardBody>

                        </Grid>
                    </Hidden>

                </StyledProductCard>
            );
        });

        return (
            <div>
                <StyledContainer>
                    <TitleComponent />
                </StyledContainer>

                {/* Grand Container */}
                <Grid container>
                    <StyledConsultationText>THE PROBLEM</StyledConsultationText>
                </Grid>
                <Grid
                    style={{ paddingBottom: 70 }}
                    container
                    direction="row">
                    {/* Text Container  */}
                    <Grid item xs={0} md={1}>
                    </Grid>

                    <Hidden lgUp>

                        <Grid item xs={12} container justify='center'>
                            <StyledConsultationImage src={'../static/assets/hairloss/hair1@3x.png'} />
                        </Grid>

                    </Hidden>

                    <Grid item xs={12} md={4}>
                        <StyledDescriptionText>{message}</StyledDescriptionText>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>

                    <Hidden mdDown>
                        <Grid item xs={12} md={5} container justify="flex-start" alignItems="center">
                            <StyledConsultationImage src={'../static/assets/hairloss/hair1@3x.png'} />
                        </Grid>

                    </Hidden>

                </Grid>

                {/* Yellow Waves */}
                <StyledHero2WaveLower src={"../static/assets/landing/longWaves@3x.png"} />

                {/* StyledBlueBox */}

                {/* StyledRandomText */}
                <Hidden lgUp>
                    <Grid
                        container
                        direction="row"
                        style={{ width: "100%", height: "100%", padding: '3em 0 5em 0', background: '#ECC2AC' }}
                    >
                        <Grid item xs={3} style={{marginTop:'-1em'}}>
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
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{ width: "100%", height: "100%", padding: '9.375em 0', background: '#ECC2AC' }}
                    >
                        <StyledLine />
                        <StyledRandomText>
                            Lorem ipsum dolor sit amet consecteturmat tis facilisis.
                        </StyledRandomText>
                    </Grid>
                </Hidden>

                {/* StyledYellowBox */}
                <StyledYellowBox>
                    <div>
                        {productListTag}
                    </div>

                </StyledYellowBox>
                <StyledBlueBox>
                    <div style={{ position: 'relative', padding: '50px 0' }}>

                        <Hidden mdDown>
                            <StyledHero10Wave src={"../static/assets/landing/wave-pink@3x.png"} />
                        </Hidden>
                        <div>
                            <StyledBlueBoxTitle>
                                Things that do not cause hair loss
                            </StyledBlueBoxTitle>
                        </div>

                        <Hidden lgUp>
                            <StyledHero10Wave2 src={"../static/assets/landing/wave-pink@3x.png"} />
                        </Hidden>

                        <Hidden mdDown>
                            <Grid container item direction="column">
                                <Grid
                                    item
                                    container
                                    justify="space-evenly"
                                    style={{ padding: "7em 5em 0 5em" }}
                                >
                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    justify="space-evenly"
                                    style={{ padding: "7em 5em 7em 5em" }}
                                >
                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Hidden>

                        <Hidden lgUp>
                            <Grid container item direction="column">
                                <Grid
                                    item
                                    container
                                    justify="space-evenly"
                                    direction='row'
                                    style={{ padding: "3em 0em 0 0em" }}
                                >
                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    justify="space-evenly"
                                    direction='row'
                                    style={{ padding: "3em 0em 0 0em" }}
                                >
                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    justify="space-evenly"
                                    style={{ padding: "3em 0em 0 0em" }}
                                >
                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </div>
                </StyledBlueBox>
                <Footer />
                <FooterCompany />
            </div>
        );
    }
}

