import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import StepperQ from '../../components/StepperQ'
import Button from "../../components/Button";
import YMCheckbox from "../../components/YMCheckbox";
import StepperMobile from "../../components/StepperMobile";
import Hidden from "@material-ui/core/Hidden";
import { Link } from '../../server/routes';
import { CONSULTATION_PHOTOS } from "../../constants/pathConstants";
import firebaseDb from '../../custom/fire-config'

const StyledHeroWave = styled.img`
margin-left:17%;
 height: 5em;
 @media (max-width: 700px) {
    height: 2em;
    margin-left:7%;
    margin-top:1.5em;
  }
 `

const StyledHeading = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-align: center;
text-transform: uppercase;
color: #15253B;
margin:auto;
margin-top:2em;
width:25%;
@media (max-width: 700px) {
    font-size: 36px;
    line-height: 50px;
    width:100%;
    margin-top:2em;
  }
`

const StyledDescription = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
color: #15253B;
text-align: center;
width:28%;
margin:auto;
padding-bottom:3.8em;
@media (max-width: 700px) {
    font-size: 18px;
    line-height: 30px;
    width:80%;
margin:0.8em auto 0em;

  }
`

const StyledCard = styled.div`
width: 57.5em;
background: #FDFDFD;
border: 1px solid rgba(0, 0, 0, 0.2);
box-sizing: border-box;
margin:auto;
margin-bottom:16.5em;
padding:4.5em 3.125em 2.9em 6em ;
@media (max-width: 700px) {
    width: 345px;
    height: 100%;
    padding:1em 1em 1em 1em ;

    margin:auto;
    margin-bottom:6.5em;
  }
  `

const StyledCardTitle = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3.75em;
  text-transform: uppercase;
  color: #15253B;
  margin:0;
`

const StyledCardQuestion = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.5em;
letter-spacing: 0.02em;
color: #15253B;
margin-bottom:0.5em;
margin-top: ${props => props.isFirst ? 0 : '3.3125em'};
@media (max-width: 700px) {
    font-size: 18px;
    line-height: 30px;
    margin-top:${props => props.isFirst ? 0 : '1em'};;
    }
`

const StyledQCardDetails = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
align-items: center;
padding: 10px 0;
@media (max-width: 700px) {
    width:100%
    }
`

const StyledSmallWhiteCircle = styled.div`
  height: 1.5625em;
  width: 1.5625em;
  border-radius: 50%;
  text-align: center;
  background: #FFFFFF;
border: 1px solid rgba(21, 37, 59, 0.5);
`


const StyledSmallBlueCircle = styled.div`

  height: 1.5625em;
  width: 1.5625em;
  background-color: #15253B;
  border-radius: 50%;
  text-align: center;
`

const StyledTickImage = styled.img`

`
const StyledCardText = styled.h2`
display:inline;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
color: rgba(21, 37, 59, 0.5);
margin:0;
margin-left:10px;
@media (max-width: 700px) {
    font-size: 16px;
    }
`
const StyledQCard = styled.div`

  `


export default class LifestyleQuestionnaire extends Component {
  state = {
    QArray: [],
    LifestyleQuestionnaireSelections: []
  };

  componentDidMount = () => {
    firebaseDb.database().ref().child('Lifestyle-Questionnaire').once('value').then((snapshot) => {
      // console.log(snapshot.val());
      var newArr = []
      snapshot.forEach((childSnapshot) => {
        newArr.push(childSnapshot.val())
      });

      this.setState({
        QArray: newArr
      })
      // console.log(newArr);
      // console.log(this.state.QArray);
    })
  }

  handleCheckClick = (id, checked) => {

    this.setState(prevState => ({
          LifestyleQuestionnaireSelections: [
            ...prevState.LifestyleQuestionnaireSelections,
            id
          ]
        }
      ),
      () => {
        // console.log(this.state.HairLossQuestionnaireSelections);
      })
  }

  handleContinueClick = () => {
    //retrived the userId and store it in the below variable
    var userId = 'abc1'

    const lifestyleSelections = this.state.LifestyleQuestionnaireSelections

    firebaseDb.database().ref().child('User-Data/' + userId + '/lifestyleSelections').push(
      lifestyleSelections,
      err => {
        if (err)
          console.log(err)
        else
          console.log('pushed successfully');
        console.log(lifestyleSelections);
      })
  }

  render() {

    const QList = this.state.QArray.map((Q, index) => {
      return (
        <StyledQCard key={index}>
          <StyledCardQuestion isFirst={index === 0}>{Q.question}</StyledCardQuestion>

          {Q.options.map((option, i) => {
            return (
              <StyledQCardDetails key={i}>
                <YMCheckbox
                  id={option.optId}
                  handleCheckClickProp={this.handleCheckClick} />
                <StyledCardText>{option.optVal}</StyledCardText>
              </StyledQCardDetails>
            )
          })}

        </StyledQCard>
      )
    })


    return (
      <div>
        <StyledHeroWave src={'/assets/landing/wave-blue@3x.png'} />

        <Hidden mdDown>
          <StepperQ stepNum={3} />
        </Hidden>

        <Hidden lgUp>
          <StepperMobile stepName={'Lifestyle'} />
        </Hidden>

        <div>
          <StyledHeading>LIFESTYLE</StyledHeading>

          <StyledDescription> Let us look at your daily habits to get a deeper understanding.</StyledDescription>
        </div>

        <StyledCard>

          {QList}

          <Grid container direction='column' justify='flex-start'  >

            <Grid item style={{ textAlign: 'center', marginTop: '2.3em', marginBottom: '2.16em' }}>
              <Link route={CONSULTATION_PHOTOS}>
                <Button primary title="CONTINUE" onClick={this.handleContinueClick} />
              </Link>
            </Grid>

          </Grid>
        </StyledCard>

      </div>
    )
  }
}
