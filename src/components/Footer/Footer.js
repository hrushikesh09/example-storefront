import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "../Button";
import styled from "styled-components";
import { Link, Router } from '../../routes';

const StyledHero10 = styled.div`
  position: relative;
  padding: 20px;
  background: #15253B;
   @media (min-width: 800px) {
   padding: 100px 100px;
  }
   @media (min-width: 1300px) {
     padding: 125px 150px;
  }
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
  background: #ECC2AC;`

const StyledHero10Wave = styled.img`
 height: 5em;
 padding: 50px 0;
 @media (min-width: 1300px) {
   padding: 0;
  }
  @media (max-width: 700px) {
    height: 2em;

}
 `
const StyledHero10News = styled.img`
 height: 3em;
 background: #ECC2AC;
  @media (min-width: 1300px) {
  height: 6em;
  }
 `

const StyledHero10Text = styled.h1`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 6em;
text-align: center;
margin: 0;
color: #FFFFFF;
 @media (min-width: 1300px) {
   font-size: 12em;
  }
`

const StyledHero10Description = styled.h4`
margin: 0 0 2em 0;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 36px;
text-align: center;
color: rgba(255, 255, 255, 0.5);
 @media (min-width: 1300px) {
   font-size: 24px;
  }
`

class Footer extends Component {

    render() {
        return (
            <div>
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
                <StyledHero10>
                    <StyledHero10Text>{'YOUR TURN'}</StyledHero10Text>
                    <StyledHero10Description>{'Answer a few questions and we’ll handle the rest.'}</StyledHero10Description>
                    <Grid container justify="center"
                          alignItems="center">
                        <Button title={'GET STARTED'} onClick={() => Router.pushRoute('/get-started')} />
                    </Grid>
                    <Grid container justify="center"
                          alignItems="center">
                        <Grid item container xs={6} justify="center"
                              alignItems="center">
                            <StyledHero10Wave src={'../static/assets/landing/wave-pink@3x.png'} />
                        </Grid>
                        <Grid item xs={6}>
                        </Grid>
                    </Grid>
                </StyledHero10>
            </div>
        )
    }

}

export default Footer
