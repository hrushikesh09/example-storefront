import React, { Component } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import Rating from "../components/Rating";
import FooterSuggestions from "../components/FooterSuggestions";
import { BOOKING_ORDER } from "../constants/pathConstants";
import { Link } from '../server/routes';
import Hidden from "@material-ui/core/Hidden";

////////////////////////////////////////////////////
const StyledHero1 = styled.div`
  position: relative;
  padding: 25px 10px 40px 10px;
  background: #ECC2AC;
  height:38em
  `

const StyledHero1WaveLower = styled.img`
position: absolute;
bottom: 5em;
right: 40px;
 height: 5em;
 `

const StyledHero10WaveLower = styled.img`
position: absolute;
bottom: 20em;
right: 40px;
 height: 5em;
 `

const StyledHero1WaveUpper = styled.img`
position: absolute;
top: 5em;
left: 17em;
 height: 5em;
 `

const StyledHero1WaveUpper2 = styled.img`
position: absolute;
top: 12em;
left: 5em;
 height: 2em;
 `
////////////////////////////////////////////////////
const StyledHero5 = styled.div`
 position: relative;
  padding: 0 0 100px 100px;
 background: #ECC2AC;
 margin-top: 3em;
 @media (max-width: 700px) {
    margin-top: 1em;
  padding: 0 0 30px 30px;
}
 `

const StyledHero5Title = styled.h1`
  position: absolute;
  z-index: 20;
  right: 0;
  top: -80px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;

@media (max-width: 700px) {
    font-size: 3.5em;
    text-align: right;
    top: -32px;
}
 `

const StyledHero5Container = styled.div`
 position: relative;
  padding: 200px 100px 200px 0;
   @media (min-width: 1300px) {
      padding: 200px 100px;
  }
 background: #ECC2AC;
 @media (max-width: 700px) {
    padding: 100px 10px 20px 0;
}
 `

const StyledHero5bar = styled.div`
 position: relative;
  padding: 150px 100px;
  @media (min-width: 1300px) {
      padding: 150px 200px;
  }
 background: rgba(236,194,172, 0.5);
 `

const StyledHero5Text = styled.h3`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 5em;
line-height: 1.1em;
margin: 20px 0;
color: #15253B;
max-width: 700px;
text-transform: uppercase;

@media (max-width: 700px) {
    font-size: 2.25em;
}
 `

const StyledHero5Description = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 2em;
margin: 0;
color: #15253B;
max-width: 600px;

@media (max-width: 700px) {
width:75%;
line-height: 30px;
}
 `

const StyledHero5barTitle = styled.h2`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 4.5em;
line-height: 1.2em;
margin: 0;
color: #15253B;
max-width: 600px;
text-transform: uppercase;
 `

const StyledHero5barDescription = styled.h5`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 2em;
margin: 0 0 20px 0;
color: #15253B;
max-width: 600px;
 `

const StyledHero5Wave = styled.img`
height: 5em;

@media (max-width: 700px) {
    height: 2em;
    padding-top:20px;
    padding-left:200px;
}
`
////////////////////////////////////////////////////
const StyledHero10 = styled.div`
margin-top: -22em;
max-width: 700px;
justify-content: center;
align-items: center;
flex-direction: column;
display: flex;
  position: relative;
  height:100%;
  padding: 0;
  @media (max-width: 700px) {
    margin-top: -13em;
}
  `
const StyledHero10Container = styled.div`
position: relative;
justify-content: center;
padding-bottom: 150px;
align-items: flex-start;
display: flex;
 background: #15253B;
 @media (max-width: 700px) {
padding-bottom: 50px;
}
  `

const StyledHero1Title = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 70px;
color: #FFFFFF;
padding-bottom:10px;
@media (max-width: 700px) {
    font-size: 2.25em;
    width:80%;
    line-height: 50px;
    text-align:center;
}
  `

const StyledHero1Description = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
line-height: 1.875em;
text-align: center;
color: #FFFFFF;
padding-bottom:20px;
@media (max-width: 700px) {
    font-size: 1em;
    width:80%;
    line-height: 30px;
    text-align:center;
}
  `

const StyledHero1Image = styled.img`
width: 44em;
height: 39em;
@media (max-width: 700px) {
    width:95%;
    height:95%;
}
 `

const StyledHero1BestFor = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
line-height: 1.875em;
text-align: center;
color: #FFFFFF;
@media (max-width: 700px) {
    font-size: 1em;
    width:80%;
    line-height: 30px;
}
  `

////////////////////////////////////////////////////
// Inside the Box Container
const StyledInBoxText = styled.h2`
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
    font-size: 3.5em;
    line-height:1.3em;
    padding-left:0.4em;
    padding-top:0.5em;
}
`;

const StyledInBoxImage2 = styled.img`
  display: block;
width: 100%;
  border: none;
  border: 0;
`;

const StyledInBoxImage1 = styled.img`
  display: block;
  height: 53em;
  border: none;
  border: 0;
  padding-left:8em;
  margin: auto;
`;

const StyledProductText = styled.h2`
  display: inline-block;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding: 0 15px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #15253b;
  width: 92%;
@media (min-width: 1300px) {
    padding: 0 10px;
    width: 100%;
    max-width:37em;
    margin: 0;
    line-height: 30px;
    font-size: 18px;
}
`;

const StyledProductColorBox = styled.div`
background: #ECC2AC;
padding: 1.75em 0 1.75em 0;
width: 100%;
margin-top:2em;
@media (min-width: 1300px) {
    padding: 1.75em 2.1em 1.75em 2em;
    width: 100%;
    max-width:37em;
    margin-top:2em;
}
`

const StyledProductList = styled.h2`
display:inline-block;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18px;
color: #15253B;
margin:0;
padding-left:1.5em;
@media (min-width: 1300px) {
    max-width:37em;
    margin:0;
    font-size: 24px;
width: 100%;
}
`;

///////////////////////////////////
//////////////////////////////////////////////////////
const StyledBlueCircle = styled.div`
display:block;
  height: 6.625em;
  width: 6.625em;
  background-color: #15253B;
  border-radius: 50%;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
  @media (max-width: 700px) {
    height: 5.93em;
  width: 5.93em;
}
`

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
@media (max-width: 700px) {
font-size: 1.125em;
  width: 5.93em;
}
`

const StyledTickImage = styled.img`

`
///////////////////////////////////////////////////////
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
padding: 0px 0px 0px 0px;
margin:auto;
max-width:1500px;
@media (max-width: 700px) {
    padding: 30px 0 ;
  }
`;

const StyledProductColorBox2 = styled.div`
position: relative;
background: #ECC2AC;
padding: 3em 5.6em 4em 2.8em;
max-width: 400px;
@media (max-width: 700px) {
    padding: 10px 15px 20px 15px ;
  }
`

const StyledProductButtonContainer = styled.div`
position: absolute;
bottom: -25px;
right: -50px;
@media (max-width: 700px) {
right: -18px;
}
`
const StyledProductButtonContainer2 = styled.div`
padding:28px 0 60px 0;
width:100%;

`

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
font-size: 1.125em;
color: #15253B;
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
@media (max-width: 700px) {
   width:80%;
}
`;
//////////////////////////////////////////
// Styled Blue Box Tags:

const StyledBlueBox = styled.div`
  background: #15253b;
  height: 100%;
  width: 100%;
  border: none;
  border: 0;

  @media (max-width: 700px) {
    margin-top:60px;
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
    font-size:2.25em;
    margin-top:1.5em;
    width:60%;
    margin-left:auto;
    margin-right:auto;
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
  max-width:200px;
  @media (max-width: 700px) {
    font-size:1.125em;
    margin:auto;
    padding-bottom:1em;
    padding-top:1em;
    width:40%;
    line-height: 27px;
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
  margin:auto;
`;

const StyledHero3Image = styled.img`
  height: 120px;
`;

const StyledHero10Wave = styled.img`
  height: 5em;
  @media (max-width: 700px) {
    height: 2em;
}
`;
//////////////////////////////////////////


const StyledHero6 = styled.div`
 position: relative;
  padding: 0 100px 200px 0;
 background: #FFFFFF;
 margin-top:10em;
 @media (max-width: 700px) {
    padding: 0 0px 60px 0;
}
 `

const StyledHero6Container = styled.div`
 position: relative;
  padding: 200px 100px 100px 100px;
 background: #FFFFFF;
 @media (max-width: 700px) {
    padding: 0px 10px 10px 10px;
};
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
    font-size: 3.5em;
    top: -120px;
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
    line-height: 30px;
    width:55%;
    text-align:left;
    margin:auto;
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
@media (max-width: 700px) {
    line-height: 30px;

font-size: 1em;
}
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
max-width: 350px;
@media (max-width: 700px) {
    line-height: 30px;

font-size: 1em;
}
 `

////////////////////////////////////////////
const StyledTreatmentText = styled.h2`
position: relative;
z-index: 10;
display:block;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 12em;
  text-transform: uppercase;
  color: #15253b;
margin-top: -140px;
margin-bottom: 40px;
  text-align: right;
  @media (max-width: 700px) {
    font-size: 4em;
    margin-top: -30px;
    margin-bottom: 20px;
}
`;

const StyledTreatmentDescriptionText = styled.h2`
display:block;
position: static;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #15253b;
 max-width:445px;
 text-align: right;
 @media (max-width: 700px) {
   width:90%;
   font-size: 16px;
   text-align: left;
}
`;
////////////////////////////////////////////////

const CardContainer = styled.div`
padding:30px 30px 0px 30px;
 @media (min-width: 1300px) {
    padding: 50px 0 100px 300px;
  }
`

const StyledCard = styled.div`
 @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 3em;
     margin-bottom: 3em;
     border-bottom: 1px solid rgba(21, 37, 59, 0.2) ;
  }
`

const StyledCardImage = styled.img`
width: 100%;
`

const StyledCardName = styled.h4`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 1.1em;
line-height: 2em;
letter-spacing: 0.02em;
color: #15253B;
@media (max-width: 700px) {
    padding-top:30px;
    margin:0;
  }
`

const StyledCardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 1.7em;
line-height: 3em;
text-transform: uppercase;
color: #15253B;
padding: 0;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 1.5em;
line-height:70px;
  }
`

const StyledCardDate = styled.h4`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 2em;
padding: 0 2em;
letter-spacing: 0.02em;
color: rgba(21, 37, 59, 0.5);
@media (max-width: 700px) {
    margin:0;
    padding-top:30px;
    padding-bottom:30px;
  }
`

const StyledCardReview = styled.h5`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 2em;
padding: 0;
margin: 0;
letter-spacing: 0.02em;
color: #15253B;
@media (max-width: 700px) {
font-size: 1em;
line-height: 30px;
}
`

const StyleCardRatingScore = styled.h5`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 1.6em;
line-height: 1em;
margin: 0;

text-transform: uppercase;

color: #15253B;

opacity: 0.5;
`

const StyledCardGraph = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 10px;
height: 100%;
width: 100%;
background: #F8F8F8;
`

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
////////////////////////////////////////////////

export default class Landing extends Component {
    state = {
        productData: [
            {
                title: "The minoxidil spray",
                image: "../static/assets/hair-kit1/item-image2.png",
                details: {
                    description1: '1. Apply 1 ml of Minoxidil twice a day (morning & evening)',
                    description2: '2. Take 1ml in a dropper or press the spray pump 4-5 times to release 1 ml of solution',
                    description3: '3. Apply Minoxidil directly on the scalp or skin and gently massage for 2 minutes ',
                    description4: '4. Make sure to apply minoxidil on dry scalp only ',
                    description5: '5. Do not use any oil, gel or spray for at least 1 hour after applying Minoxidil',

                }
            },
            {
                title: "The minoxidil spray",
                image: "../static/assets/hair-kit1/item-image2.png",
                details: {
                    description1: '1. Apply 1 ml of Minoxidil twice a day (morning & evening)',
                    description2: '2. Take 1ml in a dropper or press the spray pump 4-5 times to release 1 ml of solution',
                    description3: '3. Apply Minoxidil directly on the scalp or skin and gently massage for 2 minutes ',
                    description4: '4. Make sure to apply minoxidil on dry scalp only ',
                    description5: '5. Do not use any oil, gel or spray for at least 1 hour after applying Minoxidil',

                }
            },
            {
                title: "The herbal shampoo",
                image: "../static/assets/hair-kit1/item-image2.png",
                details: {
                    description1: '1. Apply 1 ml of Minoxidil twice a day (morning & evening)',
                    description2: '2. Take 1ml in a dropper or press the spray pump 4-5 times to release 1 ml of solution',
                    description3: '3. Apply Minoxidil directly on the scalp or skin and gently massage for 2 minutes ',
                    description4: '4. Make sure to apply minoxidil on dry scalp only ',
                    description5: '5. Do not use any oil, gel or spray for at least 1 hour after applying Minoxidil',

                }
            }
        ],
        cardData: [{
            title: 'works great',
            name: 'Vivek Nair',
            date: '06/05/20',
            rating: 4,
            image: '../static/assets/review/product@3x.png',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus pulvinar luctus. Vestibulum finibus, tortor vel semper semper, magna neque laoreet nunc, ac dictum ipsum sapien eu risus. Morbi cursus porttitor erat vel maximus. Mauris pulvinar tortor id ipsum tempus.'
        },
            {
                title: 'works great',
                name: 'Vivek Nair',
                date: '06/05/20',
                rating: 1,
                image: '../static/assets/review/product@3x.png',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus pulvinar luctus. Vestibulum finibus, tortor vel semper semper, magna neque laoreet nunc, ac dictum ipsum sapien eu risus. Morbi cursus porttitor erat vel maximus. Mauris pulvinar tortor id ipsum tempus.'
            }]
    };

    render() {
        const { productData, cardData } = this.state;

        const productListTag = productData.map((product, index) => {
            return (
                <StyledProductCard key={index}>
                    <Hidden mdDown>
                        <Grid container direction="row">

                            {index % 2 === 0 && <Grid item xs={5} container style={{ paddingTop: '14em' }}>
                                <StyledProductImage src={product.image} />
                            </Grid>}

                            <Grid item xs={7} direction="column" style={{ padding: '150px 0px 150px 0px ' }}>


                                {/* title */}
                                <StyledProductTitle>{product.title}</StyledProductTitle>
                                {/* <div style={{ background: '#ECC2AC', padding: ' 3em 5.6em 4em 2.8em', width: '37em' }}> */}
                                <StyledProductColorBox2>
                                    {/* desc */}
                                    <StyledProductDescription>
                                        {product.details.description1}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description2}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description3}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description4}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description5}
                                    </StyledProductDescription>
                                    <StyledProductButtonContainer>
                                        <Link route={BOOKING_ORDER}>
                                            <Button primary secondary title={"BUY NOW"} />
                                        </Link>
                                    </StyledProductButtonContainer>
                                </StyledProductColorBox2>
                                {/* </div> */}
                            </Grid>

                            {index % 2 !== 0 && <Grid item xs={5} container style={{ paddingTop: '14em' }}>
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

                                {/* title */}
                                <StyledProductTitle>{product.title}</StyledProductTitle>

                                <StyledProductColorBox2>
                                    {/* desc */}
                                    <StyledProductDescription>
                                        {product.details.description1}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description2}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description3}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description4}
                                    </StyledProductDescription>

                                    <StyledProductDescription>
                                        {product.details.description5}
                                    </StyledProductDescription>
                                    <StyledProductButtonContainer>
                                        <Link route={BOOKING_ORDER}>
                                            <Button primary secondary title={"BUY NOW"} />
                                        </Link>
                                    </StyledProductButtonContainer>
                                </StyledProductColorBox2>

                            </Grid>

                        </Grid>
                    </Hidden>

                </StyledProductCard >
            );
        });

        const cardList = cardData.map((card, index) => {
            return (
                <StyledCard key={index}>
                    <Grid container direction="row">

                        <Hidden lgUp>
                            <Grid item xs={12} >
                                <StyledCardImage src={card.image} />
                            </Grid>

                            <Grid item xs={12} md={7} style={{ paddingRight: '0em' }}>
                                <Grid container direction="column">
                                    <Grid container direction="row">
                                        <StyledCardName>{card.name}</StyledCardName>
                                        <StyledCardDate>{card.date}</StyledCardDate>
                                    </Grid>
                                    <Rating rating={card.rating} isLarge={false} />
                                    <StyledCardTitle>
                                        {card.title}
                                    </StyledCardTitle>
                                    <StyledCardReview>
                                        {card.review}
                                    </StyledCardReview>
                                </Grid>
                            </Grid>

                        </Hidden>

                        <Hidden mdDown>
                            <Grid item md={5}>
                                <StyledCardImage src={card.image} />
                            </Grid>

                            <Grid item xs={12} md={7} style={{ paddingRight: '3em' }}>
                                <Grid container direction="column">
                                    <Grid container direction="row">
                                        <StyledCardName>{card.name}</StyledCardName>
                                        <StyledCardDate>{card.date}</StyledCardDate>
                                    </Grid>
                                    <Rating rating={card.rating} isLarge={false} />
                                    <StyledCardTitle>
                                        {card.title}
                                    </StyledCardTitle>
                                    <StyledCardReview>
                                        {card.review}
                                    </StyledCardReview>
                                </Grid>
                            </Grid>

                        </Hidden>

                    </Grid>
                </StyledCard>
            )
        })

        return (
            <div>

                <Hidden lgUp>
                    <StyledHero1>
                        <StyledHero1WaveUpper2 src={'../static/assets/landing/wave-blue@3x.png'} />
                    </StyledHero1>
                    <StyledHero10Container>

                        <StyledHero10>
                            <div>
                                <StyledHero1Image src={'../static/assets/hair-kit1/hair-kit-img.png'} />
                            </div>

                            <StyledHero1Title>THE COMPLETE HAIR KIT
                            </StyledHero1Title>


                            <StyledHero1Description>The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.
                            </StyledHero1Description>
                            <StyledHero1BestFor style={{ paddingBottom: '3em' }}>
                                <b>Best For:</b> Advanced hair loss
                            </StyledHero1BestFor>

                            <div>
                                <Link route={BOOKING_ORDER}>
                                    <Button secondary title={'BUY NOW'} />
                                </Link>
                            </div>
                        </StyledHero10>
                    </StyledHero10Container>
                </Hidden>

                <Hidden mdDown>
                    <StyledHero1>
                        <StyledHero1WaveUpper src={'../static/assets/landing/wave-blue@3x.png'} />
                    </StyledHero1>
                    <StyledHero10Container>

                        <StyledHero10>
                            <div>
                                <StyledHero1Image src={'../static/assets/hair-kit1/hair-kit-img.png'} />
                            </div>
                            <div>
                                <StyledHero1Title>THE COMPLETE HAIR KIT
                                </StyledHero1Title>
                            </div>
                            <div>
                                <StyledHero1Description>The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.
                                </StyledHero1Description>
                                <StyledHero1BestFor style={{ paddingBottom: '3em' }}>
                                    <b>Best For:</b> Advanced hair loss
                                </StyledHero1BestFor>

                            </div>
                            <div>
                                <Link route={BOOKING_ORDER}>
                                    <Button secondary title={'BUY NOW'} />
                                </Link>
                            </div>
                        </StyledHero10>
                        <StyledHero10WaveLower src={'../static/assets/landing/wave-pink@3x.png'} />
                    </StyledHero10Container>
                </Hidden>

                <Grid container>
                    <StyledInBoxText>inside the box</StyledInBoxText>
                </Grid>

                <Hidden mdDown>
                    <Grid
                        style={{ paddingBottom: 70 }}
                        container
                        direction="row">
                        {/* Text Container  */}

                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={4}>
                            <StyledProductText>
                                You get the most effective combination of 4 dynamic products to stop any type of hair loss including male pattern baldness
                            </StyledProductText>

                            <StyledProductColorBox>
                                {/* desc */}
                                <StyledProductList>
                                    1. Finasteride. (30 x 1mg)
                                </StyledProductList>
                                <StyledProductList>
                                    2. Minoxidil. (60 ml bottle)
                                </StyledProductList>
                                <StyledProductList>
                                    3. Vitamins. (60 Biotin Gummies)
                                </StyledProductList>
                                <StyledProductList>
                                    4. Shampoo. (DHT 150 ml)
                                </StyledProductList>
                            </StyledProductColorBox>
                            {/* */}
                            <div>
                                <StyledProductText style={{ paddingTop: '3em' }}>
                                    <b>1. Finasteride 1mg tablet</b>
                                </StyledProductText>
                                <StyledProductText>
                                    Used by 12 Million Americans every year, this is the most powerful US FDA approved medication to stop baldness & promote hair growth.
                                </StyledProductText>

                                <StyledProductText style={{ paddingTop: '3em' }}>
                                    <b>Minoxidil 5% (Alcohol Free & 2X Effective)</b>
                                </StyledProductText>
                                <StyledProductText>
                                    1ml of this medicinal solution when applied twice a day increases blood supply & nutrition to scalp thereby stopping hair loss. Our proprietary enhancers make it 2X more effective than any other Minoxidil.
                                </StyledProductText>

                                <StyledProductText style={{ paddingTop: '3em' }}>
                                    <b>Biotin gummies</b>
                                </StyledProductText>
                                <StyledProductText>
                                    These natural food supplements are enriched with Biotin and Vitamins A, C, E & Zinc. They repair your scalp and provide all the nutrition required for healthy hair growth.
                                </StyledProductText>

                                <StyledProductText style={{ paddingTop: '3em' }}>
                                    <b>DHT Herbal Shampoo</b>
                                </StyledProductText>
                                <StyledProductText>
                                    Made with imported medicinal herbs from South America, aloe vera & argan oil, you will get the most nutrient rich DHT shampoo to strengthen your hair.
                                </StyledProductText>
                            </div>

                            <Grid item container justify='space-around' style={{ paddingTop: '2em', paddingLeft: '2em' }}>

                                <Grid item direction='column' justify='center' >

                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>

                                    <StyledBlueCircleText>
                                        Doctor’s #1 Choice
                                    </StyledBlueCircleText>

                                </Grid>

                                <Grid item direction='column' justify='center'>
                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>
                                    <StyledBlueCircleText>
                                        Stops Hair Loss
                                    </StyledBlueCircleText>
                                </Grid>

                                <Grid item direction='column' justify='center'>
                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>
                                    <StyledBlueCircleText>
                                        Stops Baldness
                                    </StyledBlueCircleText>
                                </Grid>
                            </Grid>
                            <Grid item justify='center' style={{ padding: '20px 0' }}>
                                <Link route={BOOKING_ORDER}>
                                    <Button primary secondary title={'BUY NOW'} style={{ width: '10%' }} />
                                </Link>
                            </Grid>

                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={5} style={{ padding: 30 }}>
                            <StyledInBoxImage2 src={"../static/assets/hair-kit1/box-image.png"} />
                        </Grid>
                        {/*  */}
                        {/* Image Item */}

                    </Grid>
                </Hidden>

                <Hidden lgUp>
                    <Grid style={{ paddingBottom: 0 }} container direction='column'>

                        <Grid item style={{ padding: 30 }}>
                            <StyledInBoxImage2 src={"../static/assets/hair-kit1/box-image.png"} />
                        </Grid>

                        <Grid item >
                            <StyledProductText>
                                You get the most effective combination of 4 dynamic products to stop any type of hair loss including male pattern baldness
                            </StyledProductText>

                            <StyledProductColorBox>

                                <StyledProductList>
                                    1. Finasteride. (30 x 1mg)
                                </StyledProductList>
                                <StyledProductList>
                                    2. Minoxidil. (60 ml bottle)
                                </StyledProductList>
                                <StyledProductList>
                                    3. Vitamins. (60 Biotin Gummies)
                                </StyledProductList>
                                <StyledProductList>
                                    4. Shampoo. (DHT 150 ml)
                                </StyledProductList>
                            </StyledProductColorBox>

                            <Hidden mdDown>
                                <div>
                                    <StyledProductText style={{ paddingTop: '3em' }}>
                                        <b>1. Finasteride 1mg tablet</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        Used by 12 Million Americans every year, this is the most powerful US FDA approved medication to stop baldness & promote hair growth.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '3em' }}>
                                        <b>Minoxidil 5% (Alcohol Free & 2X Effective)</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        1ml of this medicinal solution when applied twice a day increases blood supply & nutrition to scalp thereby stopping hair loss. Our proprietary enhancers make it 2X more effective than any other Minoxidil.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '3em' }}>
                                        <b>Biotin gummies</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        These natural food supplements are enriched with Biotin and Vitamins A, C, E & Zinc. They repair your scalp and provide all the nutrition required for healthy hair growth.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '3em' }}>
                                        <b>DHT Herbal Shampoo</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        Made with imported medicinal herbs from South America, aloe vera & argan oil, you will get the most nutrient rich DHT shampoo to strengthen your hair.
                                    </StyledProductText>
                                </div>
                            </Hidden>

                            <Hidden lgUp>
                                <div>
                                    <StyledProductText style={{ paddingTop: '2em' }}>
                                        <b>1. Finasteride 1mg tablet</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        Used by 12 Million Americans every year, this is the most powerful US FDA approved medication to stop baldness & promote hair growth.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '2em' }}>
                                        <b>Minoxidil 5% (Alcohol Free & 2X Effective)</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        1ml of this medicinal solution when applied twice a day increases blood supply & nutrition to scalp thereby stopping hair loss. Our proprietary enhancers make it 2X more effective than any other Minoxidil.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '2em' }}>
                                        <b>Biotin gummies</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        These natural food supplements are enriched with Biotin and Vitamins A, C, E & Zinc. They repair your scalp and provide all the nutrition required for healthy hair growth.
                                    </StyledProductText>

                                    <StyledProductText style={{ paddingTop: '2em' }}>
                                        <b>DHT Herbal Shampoo</b>
                                    </StyledProductText>
                                    <StyledProductText>
                                        Made with imported medicinal herbs from South America, aloe vera & argan oil, you will get the most nutrient rich DHT shampoo to strengthen your hair.
                                    </StyledProductText>
                                </div>
                            </Hidden>

                            <Grid item container justify='space-around' style={{ paddingTop: '2em', paddingLeft: '0em' }}>

                                <Grid item direction='column' justify='center' >

                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>

                                    <StyledBlueCircleText>
                                        Doctor’s #1 Choice
                                    </StyledBlueCircleText>

                                </Grid>

                                <Grid item direction='column' justify='center'>
                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>
                                    <StyledBlueCircleText>
                                        Stops Hair Loss
                                    </StyledBlueCircleText>
                                </Grid>

                                <Grid item direction='column' justify='center'>
                                    <StyledBlueCircle >
                                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }} src='../static/assets/hair-kit1/checkmark.png' />
                                    </StyledBlueCircle>
                                    <StyledBlueCircleText>
                                        Stops Baldness
                                    </StyledBlueCircleText>
                                </Grid>
                            </Grid>

                            <StyledProductButtonContainer2>
                                <Link route={BOOKING_ORDER}>
                                    <Button primary title={'BUY NOW'} style={{ width: '91%' }} />
                                </Link>
                            </StyledProductButtonContainer2>
                        </Grid>

                    </Grid>
                </Hidden>

                <Hidden mdDown>
                    <StyledHero5>
                        <StyledHero5Title>{'ADVANTAGES'}</StyledHero5Title>
                        <StyledHero5Container>
                            <Grid container
                                  direction="column">
                                <Grid item style={{ marginBottom: 100 }}>
                                    <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />
                                    <StyledHero5Text>{'Improves Hair Density by 20%'}</StyledHero5Text>
                                    <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
                                </Grid>
                                <Grid item>
                                    <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />
                                    <StyledHero5Text>{'Grows thicker & stronger hair'}</StyledHero5Text>
                                    <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
                                </Grid>
                            </Grid>
                        </StyledHero5Container>
                    </StyledHero5>
                </Hidden>

                <Hidden lgUp>
                    <StyledHero5>
                        <StyledHero5Title>{'ADVANTAGES'}</StyledHero5Title>
                        <StyledHero5Container>
                            <Grid container
                                  direction="column">
                                <Grid item style={{ marginBottom: 30 }}>
                                    <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />
                                    <StyledHero5Text>{'Improves Hair Density by 20%'}</StyledHero5Text>
                                    <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
                                </Grid>
                                <Grid item>
                                    <StyledHero5Wave src={'../static/assets/landing/wave-blue@3x.png'} />
                                    <StyledHero5Text>{'Grows thicker & stronger hair'}</StyledHero5Text>
                                    <StyledHero5Description>{'Get access to quality medication and doctor’s consultation, all from the comfort and privacy of your home, as and when you want it'}</StyledHero5Description>
                                </Grid>
                            </Grid>
                        </StyledHero5Container>
                    </StyledHero5>
                </Hidden>

                < Grid container >
                    <StyledInBoxText>how to use</StyledInBoxText>
                </Grid >

                <StyledYellowBox>
                    <div>
                        {productListTag}
                    </div>
                </StyledYellowBox>

                {/* StyledBlueBox */}
                <Hidden mdDown>
                    <StyledBlueBox>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            style={{ height: "59em" }}
                        >
                            <Grid item xs={2}>
                                {/* wavy lines */}
                                <StyledHero10Wave src={"../static/assets/landing/wave-pink@3x.png"} />
                            </Grid>

                            <Grid
                                item
                                container
                                direction="column"
                                xs={10}
                                justify="center"
                                style={{ height: "100%" }}
                            >
                                <Grid item>
                                    <StyledBlueBoxTitle>
                                        WHAT TO EXPECT
                                    </StyledBlueBoxTitle>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    justify="space-around"
                                    style={{ paddingTop: "7em" }}
                                >
                                    <Grid item direction="column">
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>1-2 months Stop hair loss </StyledBlueBoxText>
                                    </Grid>

                                    <Grid item direction="column">
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText>3-4 months Regrow hair</StyledBlueBoxText>
                                    </Grid>

                                    <Grid item direction="column">
                                        <StyledHero3ImageContainer>
                                            <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                        </StyledHero3ImageContainer>
                                        <StyledBlueBoxText> Maintain the results </StyledBlueBoxText>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledBlueBox>
                </Hidden>

                <Hidden lgUp>
                    <StyledBlueBox>
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
                                    WHAT TO EXPECT
                                </StyledBlueBoxTitle>
                            </Grid>


                            <Grid item xs={12} md={2}>
                                <StyledHero10Wave src={"../static/assets/landing/wave-pink@3x.png"} />
                            </Grid>


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
                                    <StyledBlueBoxText>1-2 months Stop hair loss </StyledBlueBoxText>
                                </Grid>

                                <Grid item direction="column" md={4} xs={12}>
                                    <StyledHero3ImageContainer>
                                        <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                    </StyledHero3ImageContainer>
                                    <StyledBlueBoxText>3-4 months Regrow hair</StyledBlueBoxText>
                                </Grid>

                                <Grid item direction="column" md={4} xs={12} style={{ marginBottom: '93px' }}>
                                    <StyledHero3ImageContainer>
                                        <StyledHero3Image src={"../static/assets/landing/info1@3x.png"} />
                                    </StyledHero3ImageContainer>
                                    <StyledBlueBoxText>Maintain the results</StyledBlueBoxText>
                                </Grid>
                            </Grid>
                        </Grid>
                    </StyledBlueBox>
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
                                    <div style={{ background: '#15253B', height: '20em', width: '18em',marginTop:'2em' }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={12}>
                                    <div style={{ background: '#15253B', height: '20em', width: '18em',marginTop:'2em'  }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                                <Grid xs={12}>
                                    <div style={{ background: '#15253B', height: '20em', width: '18em',marginTop:'2em'  }} />
                                    <StyledHero6ProfileName>{'DR. Eli Coleman, PhD'}</StyledHero6ProfileName>
                                    <StyledHero6ProfileText>{'Mauris nec neque porttito'}</StyledHero6ProfileText>
                                </Grid>
                            </Grid>

                        </Grid>

                    </StyledHero6>
                </Hidden>



                <div style={{ background: '#ECC2AC' }}>

                    <Hidden mdDown>
                        <Grid container justify='flex-end' direction='column'>
                            < Grid item >
                                <StyledTreatmentText>Treatment</StyledTreatmentText>
                            </Grid >
                            < Grid item >
                                <Grid container style={{ maxHeight: '60px', paddingRight: 30 }} direction="row" justify='flex-end'>

                                    <Grid>
                                        <StyledTreatmentDescriptionText> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu commodo.</StyledTreatmentDescriptionText>
                                    </Grid>

                                </Grid>
                            </ Grid>
                        </Grid>
                        <Grid container direction='row' style={{ padding: '4em 10em' }}>
                            <Grid item xs={6} style={{ padding: '2em' }}>
                                <StyledCard >
                                    <Grid container direction='column'>
                                        <Grid item>
                                            <StyledCardImage src='../static/assets/review/product@3x.png' />
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column">
                                                <Grid container direction="row">
                                                    <StyledCardName>Vivek Nair</StyledCardName>
                                                    <StyledCardDate>06/05/20</StyledCardDate>
                                                </Grid>
                                                <Rating rating='4' isLarge={false} />
                                                <StyledCardTitle>
                                                    works great
                                                </StyledCardTitle>
                                                <StyledCardReview>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus pulvinar luctus. Vestibulum finibus, tortor vel semper semper, magna neque laoreet nunc, ac dictum ipsum sapien eu risus. Morbi cursus porttitor erat vel maximus. Mauris pulvinar tortor id ipsum tempus.
                                                </StyledCardReview>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </StyledCard>
                            </Grid>

                            <Grid item xs={6} style={{ padding: '2em' }}>
                                <StyledCard >
                                    <Grid container direction='column'>
                                        <Grid item>
                                            <StyledCardImage src='../static/assets/review/product@3x.png' />
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="column">
                                                <Grid container direction="row">
                                                    <StyledCardName>Vivek Nair</StyledCardName>
                                                    <StyledCardDate>06/05/20</StyledCardDate>
                                                </Grid>
                                                <Rating rating='4' isLarge={false} />
                                                <StyledCardTitle>
                                                    works great
                                                </StyledCardTitle>
                                                <StyledCardReview>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus pulvinar luctus. Vestibulum finibus, tortor vel semper semper, magna neque laoreet nunc, ac dictum ipsum sapien eu risus. Morbi cursus porttitor erat vel maximus. Mauris pulvinar tortor id ipsum tempus.
                                                </StyledCardReview>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </StyledCard>
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Hidden lgUp>
                        <Grid container justify='flex-end' direction='column'>
                            < Grid item >
                                <StyledTreatmentText>Treatment</StyledTreatmentText>
                            </Grid >
                            < Grid item >
                                <Grid container style={{ paddingLeft: '100px' }}>

                                    <Grid>
                                        <StyledTreatmentDescriptionText> By cutting out the middleman, we can provide you quality medication and doctor consultation, without overcharging you</StyledTreatmentDescriptionText>
                                    </Grid>

                                </Grid>
                            </ Grid>
                        </Grid>

                        <CardContainer>
                            {cardList}
                        </CardContainer>
                    </Hidden>

                    <FooterSuggestions />
                </div>
                <FooterCompany />
            </div >
        )
    }
}
