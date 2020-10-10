import React, { Component } from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import StepperQ from '../../components/StepperQ'
import Button from "../../components/Button";
import Webcam from "react-webcam";
import { Link } from "../../server/routes";
import YMButton from "../../components/YMButton";
import { CONSULTATION_HISTORY } from "../../constants/pathConstants";
import firebase from '../../custom/fire-config';
const storageRef = firebase.storage().ref();

const StyledHeroWave = styled.img`
margin-left:17%;
 height: 5em;
 `

const StyledHeadingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 50px 0;
`
const StyledSlideContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px 0;
`

const StyledButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`


const StyledHeading = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 3.75em;
text-align: center;
text-transform: uppercase;
color: #15253B;
margin: 0;
`

const StyledHeadingDesc = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 2.75em;
text-align: center;
text-transform: uppercase;
color: #15253B;
margin: 0;
`


const StyledDescription = styled.h2`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 1.125em;
letter-spacing: 0.02em;
text-align: center;
color: #FF0000;
margin:0;
`

const StyledImageFrame = styled.img`
margin: auto;
 width: 100%;
  max-width: 700px;
  height: auto;
`

export default class DoctorConsultation extends Component {

  state = {
    photoStep: 0,
    descriptionText: [
      {
        title: 'Top of your head',
        desc: 'Tilt your head forward slightly and include the top of your head as much as possible'
      },
      {
        title: 'Your hairline',
        desc: 'Use one hand to hold the front of your hair as shown below, so that your hairline is visible'
      },
      {
        title: 'Your Crown',
        desc: 'Either use a mirror or hold the phone upward such that your crown is visible as shown below'
      }
    ],
    images: [
      '', '', ''
    ],
    isComplete: false,
    imageLinks: []
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  handleNext = () => {
    const { photoStep, images } = this.state;
    if (photoStep < 2) {
      this.setState({
        photoStep: photoStep + 1
      })
    } else {
      images.forEach((image, index) => {

        const uploadTask = storageRef.child('userImages/' + 'abc1' + `file${index}`).putString(image, 'data_url');
        uploadTask.on('state_changed', function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // switch (snapshot.state) {
          //   case firebase.storage.TaskState.PAUSED: // or 'paused'
          //     console.log('Upload is paused');
          //     break;
          //   case firebase.storage.TaskState.RUNNING: // or 'running'
          //     console.log('Upload is running');
          //     break;
          // }
        }, function (error) {
          // Handle unsuccessful uploads
        }, function () {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            this.setState(prevState => ({
              imageLinks: [
                ...prevState.imageLinks,
                downloadURL
              ]
            }))
          });
        });
      });

      const { imageLinks } = this.state;
      firebaseDb.database().ref().child('User-Data/' + userId + '/imageLinks').push(
        imageLinks,
        err => {
          if (err)
            console.log(err)
          else
            console.log('pushed successfully');
        })
      this.setState({
        isComplete: true
      })
    }
  }

  handleDiscard = () => {
    const { photoStep, images } = this.state;
    this.setState({
      images: this.updateObjectInArray(images, photoStep, '')
    })
  }

  updateObjectInArray(array, ind, finalItem) {
    return array.map((item, index) => {
      if (index !== ind) {
        return item
      }
      return finalItem;
    })
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();

    const { photoStep, images } = this.state;
    this.setState({
      images: this.updateObjectInArray(images, photoStep, imageSrc)
    })
  };

  render() {
    const { photoStep, descriptionText, images, isComplete } = this.state;
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    console.log('images are: ', images);

    const slideShow = isComplete && images.map((image, ind) => {
      return (<StyledSlideContainer>
        <StyledHeadingDesc>
          {descriptionText[ind].title}
        </StyledHeadingDesc>
        <StyledImageFrame src={image} />
      </StyledSlideContainer>)
    })

    if (isComplete) {
      return (
        <div>
          <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

          <StepperQ stepNum={4} />
          <StyledHeadingContainer>
            <StyledHeading>{`Photo Upload Complete`}</StyledHeading>
          </StyledHeadingContainer>
          <div>
            {slideShow}
          </div>
          <StyledButtons>
            <Link route={CONSULTATION_HISTORY}>
              <Button primary title={"PROCEED TO HISTORY"} />
            </Link>
          </StyledButtons>
        </div>)
    }

    return (
      <div>
        <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'} />

        <StepperQ stepNum={4} />

        <StyledHeadingContainer>
          <StyledHeading>{`Photos ${photoStep + 1} of 3`}</StyledHeading>

          <StyledDescription>{descriptionText[photoStep].desc}</StyledDescription>
        </StyledHeadingContainer>
        <StyledHeadingDesc>
          {descriptionText[photoStep].title}
        </StyledHeadingDesc>
        <Grid container direction='column' justify='center'>
          {images[photoStep] ? <StyledImageFrame src={images[photoStep]} /> : <Webcam
            height={400}
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />}
          <div style={{ padding: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
            {images[photoStep] ? <StyledButtons><Button isFullWidth={true} primary secondary title={"NEXT"} onClick={this.handleNext} /><Button title={"DISCARD"} onClick={this.handleDiscard} /></StyledButtons> :
              <Button primary title={"TAKE PHOTO"} onClick={this.capture} />}
          </div>
        </Grid>
      </div>
    )
  }
}
