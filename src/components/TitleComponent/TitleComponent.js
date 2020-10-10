import React, {Component} from "react";
import styled from "styled-components";

const StyledHeroWave = styled.img`
 height: 5em;
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

const StyledMain = styled.div`
 padding: 50px 0 50px 30px;
  @media (min-width: 1300px) {
    padding: 50px 0 0 300px;
  }
 `
const StyledHeroImage = styled.img`
margin: 4em 0;
 width: 100%;
 height: 100%;
 `


class TitleComponent extends Component {

    render() {
        return (
            <div>
                <StyledHeroWave src={'../static/assets/landing/wave-blue@3x.png'}/>
                <StyledMain>
                    <StyledTitle>
                        HEADLINE GOES HERE
                    </StyledTitle>
                    <StyledHeroImage src={'../static/assets/learn/hero1@3x.png'}/>
                </StyledMain>
            </div>
        )
    }

}

export default TitleComponent
