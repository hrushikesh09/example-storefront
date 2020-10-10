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
  height: 100%;
  width: 100%;
  border: none;
  border: 0;
   @media (min-width: 700px) {
    height: 59em;
  }
`;

const StyledWhiteBox = styled.div`
height: 100%;
padding: 100px 20px;
   @media (min-width: 700px) {
    padding: 150px 0;
  }
`;

const StyledBlueBoxTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.75em;
  color: #ffffff;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2.25em;
    width:80%;
    margin:auto;
    padding-top:2em;
    padding-bottom:1em;
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
    font-size: 1.125em;
    padding-bottom:2em;
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
  text-align: center;
  margin:auto
`;

const StyledHero3Image = styled.img`
  height: 120px;
  margin: 0;
`;

const StyledHero10Wave = styled.img`
  height: 5em;
  @media (max-width: 700px) {
    height: 2em;
}
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
   margin: 0 0 50px 0;
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
  background: #ecc2ac;
  width: 100%;
  height: 30em;
  border: none;
  border: 0;
  margin-left: auto;
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
//////////////////////////////////////////

// Styled Yellow Box Tags:

const StyledYellowBox = styled.div`
  background: #ecc2ac;
  height: 100%;
  width: 100%;
  border: none;
  border: 0;
  padding-top: 150px;
  position: relative;
  @media (max-width: 700px) {
    padding-top: 10px;
  }
`;

const StyledYellowBoxHeading = styled.h2`
  display:block
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12em;
  text-align: right;
  color: #15253B;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
   right: 0;
 top: -90px;
  @media (max-width: 700px) {
    font-size: 4em;
       top:-30px;
  }
`;

const StyledProductCard = styled.div`
padding: 10px;
    @media (min-width: 800px) {
   padding: 50px 150px 0px 150px;
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
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  color: #15253b;
    @media (min-width: 800px) {
  font-size: 60px;
  line-height: 70px;
  }
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
  @media (max-width: 700px) {
    padding-bottom: 0em;
 }
`;

const StyledProductImage = styled.img`
position:relative;
  max-width: 20em;
 filter: opacity(30%);
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
  font-size: 2em;
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
                title: "FINASTERIDE,1 MG ",
                image: "../static/assets/offering/finax@3x.png",
                description:
                    "Finasteride is a prescription pill that’s taken daily. It works by blocking the production of DHT, a hormone that causes male pattern baldness. This FDA-approved treatment has been proven to prevent the spread of receding hairlines and boost hair regrowth.",
            },
            {
                title: "FINASTERIDE,1 MG ",
                image: "../static/assets/offering/finax@3x.png",
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
                    <Grid container direction="row">

                        <Hidden mdDown>
                            {index % 2 !== 0 && <Grid item xs={12} md={5} container justify="center" alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>}
                        </Hidden>

                        <Hidden lgUp>
                            <Grid item xs={12} md={5} container justify='flex-start' alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>
                        </Hidden>

                        <StyledProductCardBody>
                            <Grid item xs={12} md={7} direction="column">
                                {/* title */}
                                <StyledProductTitle>{product.title}</StyledProductTitle>
                                {/* desc */}
                                <StyledProductDescription>
                                    {product.description}
                                </StyledProductDescription>
                                <Button secondary primary title={"BUY NOW"} />
                            </Grid>
                        </StyledProductCardBody>

                        <Hidden mdDown>
                            {index % 2 === 0 && <Grid item xs={12} md={5} container justify="center" alignItems="center">
                                <StyledProductImage src={product.image} />
                            </Grid>}
                        </Hidden>

                    </Grid>
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
                    <StyledConsultationText>consultation</StyledConsultationText>
                </Grid>
                <Grid
                    style={{ paddingBottom: 70 }}
                    container
                    direction="row">
                    {/* Text Container  */}

                    <Grid item xs={0} md={2}>
                    </Grid>
                    <Hidden lgUp>
                        <Grid item xs={12} md={6}>

                            <StyledConsultationImage />

                        </Grid>
                    </Hidden>
                    <Grid item xs={12} md={4}>
                        <StyledDescriptionText>{message}</StyledDescriptionText>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} md={6}>

                            <StyledConsultationImage />

                        </Grid>
                    </Hidden>

                    {/* Image Item */}

                </Grid>

                {/* Yellow Waves */}
                <StyledHero2WaveLower src={"../static/assets/landing/longWaves@3x.png"} />

                {/* StyledBlueBox */}
                <StyledBlueBox>
                    <div>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Hidden mdDown>
                                <Grid item xs={12} md={2}>
                                    {/* wavy lines */}
                                    <StyledHero10Wave src={"../static/assets/landing/wave-pink@3x.png"} />
                                </Grid>
                            </Hidden>

                            <Grid
                                item
                                container
                                direction="row"
                                xs={12}
                                md={10}
                                justify="center"
                            >
                                <Grid item>
                                    <StyledBlueBoxTitle>
                                        We hold ourselves to high standards. That's why all our
                                        products are
                                    </StyledBlueBoxTitle>
                                </Grid>

                                <Hidden lgUp>
                                    <Grid item xs={12} md={2}>
                                        <StyledHero10Wave src={"../static/assets/landing/wave-pink@3x.png"} />
                                    </Grid>
                                </Hidden>

                                <Grid
                                    item
                                    container
                                    justify='center'
                                    alignItems='center'
                                    style={{ paddingTop: "3em" }}>
                                    <Grid item direction="column" md={4} xs={12}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item direction="column" md={4} xs={12}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item direction="column" md={4} xs={12}>
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>shampooing</StyledBlueBoxText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </StyledBlueBox>

                {/* StyledRandomText */}
                <Hidden mdDown>
                    <StyledWhiteBox>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                        >
                            <StyledLine />
                            <StyledRandomText>
                                Lorem ipsum dolor sit amet consecteturmat tis facilisis.
                            </StyledRandomText>
                        </Grid>
                    </StyledWhiteBox>
                </Hidden>

                <Hidden lgUp>
                    <Grid
                        container
                        direction="row"
                        style={{ width: "100%", height: "100%", padding: '3em 0 5em 0' }}
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

                {/* StyledYellowBox */}
                <StyledYellowBox>
                    <div>
                        <StyledYellowBoxHeading>products</StyledYellowBoxHeading>
                    </div>
                    <div>
                        {productListTag}
                    </div>

                </StyledYellowBox>
                <Footer />
                <FooterCompany />
            </div>
        );
    }
}
