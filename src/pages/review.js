import React, { Component } from "react";
import styled from "styled-components";
import TitleComponent from "../components/TitleComponent";
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import { Grid } from "@material-ui/core";
import Rating from "../components/Rating";
import Hidden from "@material-ui/core/Hidden";

const StyledContainer = styled.div`
padding: 50px 0 0 10px;
@media (min-width: 1300px) {
 padding: 50px 0 0 300px;
}
 `
const StyledHero2Title = styled.h1`
  text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 12em;
margin: 0;
color: #15253B;
@media (max-width: 700px) {
    font-size: 6em;
  }
  `

const CardContainer = styled.div`
padding:50px 30px;
 @media (min-width: 1300px) {
    padding: 50px 0 100px 300px;
  }


`

const StyledCard = styled.div`
width: 100%;
 margin-top: ${props => props.isFirst ? 0 : '2em'};
 padding-bottom: 4em;
 margin-bottom: 4em;
 border-bottom: 1px solid rgba(21, 37, 59, 0.2) ;
`

const StyledCardImage = styled.img`
height: 100%;
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
text-align:left;
@media (max-width: 700px) {
line-height: 2em;
font-weight: bold;
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
@media (max-width: 700px) {
    padding-left:1em;
    font-weight: bold;
  }
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

const StyledGraphCandleFull = styled.div`
background: #000000;
height: 100%;
width: ${props => `${props.width}%`};
@media (max-width: 700px) {
    width: ${props => `${props.width}%`};
    height: 1em;
      }
`

const StyledGraphCandleEmpty = styled.div`
background: #D0D0D0;
height: 100%;
width: ${props => `${props.width}%`};
@media (max-width: 700px) {
width: ${props => `${props.width}%`};
height: 1em;
  }
`

class Review extends Component {

    state = {
        graphData: [
            { rating: 5, value: 1400, total: 2000 },
            { rating: 4, value: 400, total: 2000 },
            { rating: 3, value: 70, total: 2000 },
            { rating: 2, value: 80, total: 2000 },
            { rating: 1, value: 50, total: 2000 },
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
                rating: 5,
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
    }

    render() {
        const { cardData, graphData } = this.state;

        const cardList = cardData.map((card, index) => {
            return (
                <StyledCard key={index}>
                    <Grid container direction="row">
                        <Hidden lgUp>
                            <Grid item xs={12} >
                                <StyledCardImage src={card.image} />
                            </Grid>
                        </Hidden>
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
                        <Hidden mdDown>
                            <Grid item md={5}>
                                <StyledCardImage src={card.image} />
                            </Grid>
                        </Hidden>
                    </Grid>
                </StyledCard>
            )
        })

        const graphList = graphData.map((data, index) => {
            const widthCandle = (data.value / data.total) * 100;
            return (
                <Grid container direction="row">
                    <Grid item xs={3} md={1} style={{}}>
                        {`${data.rating} Star`}
                    </Grid>
                    <Grid item md={10} xs={9} container direction="row" style={{ padding: '4px 10px 4px 2px' }}>
                        <StyledGraphCandleFull width={widthCandle} /><StyledGraphCandleEmpty width={100 - widthCandle} />
                    </Grid>
                    <Hidden mdDown>
                        <Grid item md={1} xs={1}>
                            {data.value}
                        </Grid>
                    </Hidden>
                </Grid>
            )
        })

        return (
            <div>
                <StyledContainer>
                    <TitleComponent />
                </StyledContainer>

                <StyledHero2Title>
                    {'ACTION'}
                </StyledHero2Title>

                <Hidden mdDown>
                    <CardContainer>
                        <Grid container style={{ paddingBottom: 100 }}>
                            <Grid item md={3} xs={12}>
                                <Grid container direction={"column"} justify="center" alignItems="center">
                                    <StyleCardRatingScore>{'4.7'}</StyleCardRatingScore>
                                    <StyledCardTitle>{'256 Reviews'}</StyledCardTitle>
                                    <Rating rating={4} isLarge={true} />
                                </Grid>
                            </Grid>
                            <Grid item md={9} xs={12}>
                                <StyledCardGraph>
                                    {graphList}
                                </StyledCardGraph>
                            </Grid>

                        </Grid>
                        {cardList}
                    </CardContainer>
                </Hidden>

                <Hidden lgUp>
                    <CardContainer>
                        <Grid container style={{}}>
                            <Grid item xs={12}>
                                <Grid container direction={"column"} justify='flex-start' >
                                    <StyledCardTitle>{'256 Reviews'}</StyledCardTitle>
                                    <Grid container direction='row' alignItems="center">
                                        <Rating rating={4} isLarge={true} />
                                        <StyleCardRatingScore>{'4.7'}</StyleCardRatingScore>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={{ paddingTop: '2em' }}>
                                <StyledCardGraph>
                                    {graphList}
                                </StyledCardGraph>
                            </Grid>

                        </Grid>
                        {cardList}
                    </CardContainer>
                </Hidden>


                <Footer />
                <FooterCompany />
            </div>
        )
    }
}


export default Review
