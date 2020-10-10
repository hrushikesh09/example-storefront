import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { PropTypes } from 'prop-types';


const StyledTickImage = styled.img`

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


class StepperQ extends Component {


    render() {

        const { stepName } = this.props;

        return (
            <StyledStep>
                <StyledLine />
                <Grid item direction='column' justify='center'>
                    <StyledBlueCircle >
                        <StyledTickImage style={{ paddingTop: '29%', paddingBottom: '29%', width: '50%' }}
                                         src='/assets/hair-kit1/checkmark.png' />
                    </StyledBlueCircle>
                    <StyledCircleText>{stepName}</StyledCircleText>
                </Grid>
                <StyledLine />
            </StyledStep>
        )
    }
}

StepperQ.propTypes = {
    stepName: PropTypes.number.isRequired
};

export default StepperQ
