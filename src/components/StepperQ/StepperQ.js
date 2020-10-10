import React, {Component} from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import {PropTypes} from 'prop-types';
import {
    CONSULTATION_DOCTOR,
    CONSULTATION_QUESTIONNAIRE_HAIR_LOSS,
    CONSULTATION_QUESTIONNAIRE_LIFESTYLE,
    CONSULTATION_PHOTOS,
    CONSULTATION_HISTORY
} from "../../constants/pathConstants";
import {Link} from '../../server/routes';

const StyledBlueCircle = styled.div`
cursor: pointer;
display:block;
  height: 6.625em;
  width: 6.625em;

  background-color: ${props => {
    if (props.index <= props.stepNum) {
        return '#15253B'
    } else return '#ECC2AC'
}} ;

  border-radius: 50%;
  text-align: center;
  margin-left:auto;
  margin-right:auto;
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

const StyledTickImage = styled.img`
`

const StyledLine = styled.div`
  width: 8.2em;
  height: 0px;
  margin-left: 0;
  margin-right: 0;
  margin-top:45px;
  margin-bottom:auto;
  border: 1px solid rgba(21, 37, 59, 0.3);
`;

const StyledStep = styled.div`
display: flex;
flex-direction: row;
`;



class StepperQ extends Component {

    state = {
        stepsData: [{
            name: 'Start',
            route: CONSULTATION_DOCTOR
        },
            {
                name: 'Hair',
                route: CONSULTATION_QUESTIONNAIRE_HAIR_LOSS
            },
            {
                name: 'Lifestyle',
                route: CONSULTATION_QUESTIONNAIRE_LIFESTYLE
            },
            {
                name: 'Photos',
                route: CONSULTATION_PHOTOS
            },
            {
                name: 'History',
                route: CONSULTATION_HISTORY
            }
        ]
    }

    render() {

        const {stepNum} = this.props;
        const {stepsData} = this.state;

        const stepperSteps = stepsData.map((step, index) => {
            return (
                <StyledStep>
                    {index > 0 && <StyledLine/>}
                     <Link route={step.route}>
                    <Grid item direction='column' justify='center'>
                        <StyledBlueCircle index={index + 1} stepNum={stepNum}>
                            <StyledTickImage style={{paddingTop: '29%', paddingBottom: '29%', width: '50%'}}
                                             src='../static/assets/hair-kit1/checkmark.png'/>
                        </StyledBlueCircle>
                        <StyledCircleText>{step.name}</StyledCircleText>
                    </Grid>
                     </Link>
                </StyledStep>
            )
        })

        return (
            <Grid container direction="row" justify="center"
                  style={{paddingTop: '2em'}}>
                {stepperSteps}
            </Grid>
        )
    }
}

StepperQ.propTypes = {
    stepNum: PropTypes.number.isRequired
};

export default StepperQ
