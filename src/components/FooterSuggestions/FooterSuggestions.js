import React, { Component } from "react";
import Button from "../Button";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Footer from "../Footer";
import FooterCompany from "../FooterCompany";
import Rating from "../Rating";
import Hidden from "@material-ui/core/Hidden";
////////////////////////////////////////////////////
const StyledHero10 = styled.div`
  position: relative;
  height:100%;
  padding: 100px 100px;
  background: #15253B;
   @media (min-width: 1300px) {
     padding: 125px 150px;
  };
  @media (max-width: 700px) {
    padding: 50px 20px;
 }
  
  `
const StyledHero1Image = styled.img`
margin-top:-5em;
width: 44em;
height: 39em;
@media (max-width: 700px) {
    width: 23.67em;
height: 20.61em;
margin-top:-2em;
 }
 `
const StyledHero10Wave = styled.img`
margin-top:-5em;
  height: 5em;
  @media (max-width: 700px) {
    margin-top:3em;
height: 2em;
 }
`;
const StyledHero10Topbar = styled.div`
  position: relative;
  padding: 100px 10px;
    @media (min-width: 1300px) {
     padding: 125px 150px;
  }
  background: #ECC2AC;
  opacity:0.5;
  @media (max-width: 700px) {
    padding: 10px 10px;
 }
  `
const StyledHero10News = styled.img`
 height: 6em;
 background: #ECC2AC;
 @media (max-width: 700px) {
    height: 3em;
 }
 `
const StyledHero10Text = styled.h1`
text-align:center;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 96px;
line-height: 144px;
color: #FFFFFF;
margin:0;
@media (max-width: 700px) {
    font-size: 3.54em;
    line-height: 1.5em;
 }
`
const StyledHero10Title = styled.h1`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
color: #FFFFFF;
margin:0;
width:78%;
max-width:26em;
line-height:1.2em;
@media (max-width: 700px) {
    font-size: 2.25em;
    line-height: 1.5em;
    text-align:center;
 }
`
const StyledHero10Description = styled.h4`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1em;
letter-spacing: 0.02em;
color: #FFFFFF;
margin:0;
padding-bottom:1.6em;
@media (max-width: 700px) {
    font-size: 1em;
    text-align:center;
    width:80%;
    line-height: 1.5em;
 }
`
export default class FooterSuggestions extends Component {
    render() {
        return (
            <div>
                {/* the missing contaniner is in the below div   */}
                <div>

                    <StyledHero10Topbar>
                        <Grid container
                              spacing={0}
                              direction="row"
                              justify="space-evenly"
                              alignItems="center">
                            <Grid item xs={12} md={6}>
                                <StyledHero10News src={'/assets/landing/news@3x.png'} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <StyledHero10News src={'/assets/landing/news@3x.png'} />
                            </Grid>
                        </Grid>
                    </StyledHero10Topbar>

                    <Hidden mdDown>
                        <StyledHero10>
                            <StyledHero10Text>{'You may also like...'}</StyledHero10Text>
                            <Grid container justify='center' direction='row' alignItems="center">
                                <Grid item container xs={6} direction='column'>
                                    <StyledHero10Title>THE CLASSIC HAIR KIT</StyledHero10Title>
                                    <StyledHero10Description>The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.</StyledHero10Description>
                                    <Grid container justify="flex-start" alignItems="center">
                                        <Button title={'READ MORE'} />
                                    </Grid>
                                </Grid>
                                <Grid item container xs={6}>
                                    <StyledHero1Image src={'/assets/hair-kit1/hair-kit-img.png'} />
                                </Grid>
                                <Grid container justify='flex-end'
                                      alignItems="center">
                                    <Grid item container xs={6} justify='flex-end'
                                          alignItems="center">
                                        <StyledHero10Wave src={'/assets/landing/wave-pink@3x.png'} />
                                    </Grid>
                                    <Grid item xs={6}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledHero10>
                    </Hidden>

                    <Hidden lgUp>

                        <StyledHero10>
                            <StyledHero10Text>{'You may also like...'}</StyledHero10Text>
                            <Grid container justify='center' direction='row' alignItems="center">

                                <Grid item container xs={12}>
                                    <StyledHero1Image src={'/assets/hair-kit1/hair-kit-img.png'} />
                                </Grid>

                                <Grid item container xs={12} direction='column' justify='center'>

                                    <Grid container justify='center' alignItems="center">
                                        <StyledHero10Title>THE CLASSIC HAIR KIT</StyledHero10Title>
                                    </Grid>

                                    <Grid container justify='center' alignItems="center">
                                        <StyledHero10Description>The meds make the difference. Scientifically proven solution to regrow hair on even the baldest of heads.</StyledHero10Description>
                                    </Grid>

                                    <Grid container justify='center' alignItems="center">
                                        <Button title={'READ MORE'} />
                                    </Grid>
                                </Grid>
                                <Grid container justify='flex-end'
                                      alignItems="center">
                                    <Grid item container xs={12} justify='flex-start'
                                          alignItems="center">
                                        <StyledHero10Wave src={'/assets/landing/wave-pink@3x.png'} />
                                    </Grid>
                                    <Grid item xs={12}>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledHero10>
                    </Hidden>

                </div>
            </div>
        )
    }
}
