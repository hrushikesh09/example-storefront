import React, {Component} from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Footer from "../components/Footer";
import FooterCompany from "../components/FooterCompany";
import TitleComponent from "../components/TitleComponent";


const StyledContainer = styled.div`
padding: 20px;
 @media (min-width: 700px) {
    padding: 50px 0 100px 150px;
  }
   @media (min-width: 1300px) {
    padding: 50px 0 100px 300px;
  }
 `


const StyledTitle = styled.h2`
text-align: left;
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 3.5em;
line-height: 1.2em;
margin: 0;
color: #15253B;
text-transform: uppercase;
 `

const StyledNavigationList = styled.ul`
list-style-type:none;
padding: 0;
`

const StyledNavigationListItem = styled.li`

  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1.2em;
padding: 0;
line-height: 3em;
text-transform: uppercase;
letter-spacing: 0.02em;
color: rgba(21, 37, 59, 0.5);
`

const StyledNavigationTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.2em;
line-height: 3em;
margin: 0;
letter-spacing: 0.02em;

color: #15253B;
`

const StyledHorizontalLine = styled.span`
border-top: 1px solid #15253B;
margin-top: 1.7em;
width: 2em;
margin-right: 1em;
`

const StyledCardImage = styled.img`
background: #ECC2AC;
height: 25em;
width: 100%;
border: none;
border: 0;
`

const StyledCard = styled.div`
width: 100%;
 margin-top: ${props => props.isFirst ? 0 : '2em'};
 padding-bottom: 4em;
 margin-bottom: 4em;
 border-bottom: 1px solid rgba(21, 37, 59, 0.2);
`

const StyledCardContainer = styled.div`
padding: 0;
 @media (min-width: 700px) {
   padding: 0 200px 0 100px;
  }
 @media (min-width: 1300px) {
     padding: 0 300px 0 100px;
  }
`

const StyledCardTags = styled.h5`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.8em;
letter-spacing: 0.02em;
margin: 2em 0 0 0;
padding: 0;
color: #9F9F9F;
`

const StyledCardDescription = styled.h6`
  font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.1em;
line-height: 1.8em;
letter-spacing: 0.02em;
margin: 2em 0;
padding: 0;
color: #15253B;
`


export default class Learn extends Component {

    state = {
        navigationList: [
            'hair loss causes',
            'hair loss questions',
            'hair loss treatments',
            'living with hair loss'
        ],
        cardsData: [
            {
                title: 'Is Summer Hair Loss a Real Thing?',
                tags: 'HAIR LOSS CAUSES, HAIR LOSS QUESTIONS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu commodo sem. Praesent laoreet tortor non nulla rutrum mollis'
            },
            {
                title: 'Is Summer Hair Loss a Real Thing?',
                tags: 'HAIR LOSS CAUSES, HAIR LOSS QUESTIONS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu commodo sem. Praesent laoreet tortor non nulla rutrum mollis'
            },
            {
                title: 'Is Summer Hair Loss a Real Thing?',
                tags: 'HAIR LOSS CAUSES, HAIR LOSS QUESTIONS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu commodo sem. Praesent laoreet tortor non nulla rutrum mollis'
            }
        ]
    }

    render() {
        const {navigationList, cardsData} = this.state;
        const navList = navigationList.map(nav => {
            return (
                <StyledNavigationListItem key={nav}>
                    {nav}
                </StyledNavigationListItem>
            )
        })
        const cardList = cardsData.map((card, index) => {
            return (
                <StyledCard isFirst={index === 0} key={index}>
                    <StyledCardImage/>
                    <StyledCardTags>
                        {card.tags}
                    </StyledCardTags>
                    <StyledTitle>
                        {card.title}
                    </StyledTitle>
                    <StyledCardDescription>
                        {card.description}
                    </StyledCardDescription>
                    <Button primary title={'READ MORE'}/>
                </StyledCard>
            )
        })
        return (
            <div>
                <StyledContainer>
                    <TitleComponent/>
                    <Grid container direction="row">
                        <Grid item container xs={0} md={2} direction="column">
                            <Grid container
                                  direction="row"><StyledHorizontalLine/><StyledNavigationTitle>{'ALL'}</StyledNavigationTitle></Grid>
                            <StyledNavigationList>
                                {navList}
                            </StyledNavigationList>
                        </Grid>
                        <Grid item container xs={12} md={10}>
                            <StyledCardContainer>
                                {cardList}
                            </StyledCardContainer>
                        </Grid>
                    </Grid>
                </StyledContainer>
                <Footer/>
                <FooterCompany/>
            </div>
        )
    }


}
