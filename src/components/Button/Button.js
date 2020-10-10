import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
    border-radius: 2px;
  display: inline-block;
 -webkit-appearance: none;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1em;
line-height: 1.4em;
    min-width: 8.25rem;
    transition-duration: 100ms;
    transition-property: background, border, box-shadow, color;
    transition-timing-function: ease;
    pointer-events: auto;
    color: #15253B;
    background: #ECC2AC;
    margin: 0px;
    outline: none;
    padding: calc(1rem + 2px) 1rem calc(1rem - 2px);
    text-align: center;
 ${props => props.primary && `
    background: #15253B;
    color: white;
  `}
${props => props.isFullWidth && `
    width: 90%;
  `}

&:hover {
    background: white;
    color: rgb(0, 0, 0);
     ${props => props.primary && `
    background: #ECC2AC;
    color: #15253B;
  `}
   ${props => props.secondary && `
    background: #FFFFFF;
    color: #15253B;
  `}
  }
  /* The GitHub button is a primary button
   * edit this to target it specifically! */

`

class Button extends Component {

    render() {
        const {href, target, rel, title, primary, secondary, onClick, style, isFullWidth} = this.props;
        return (
            <ButtonStyle {... {href, target, rel, primary, secondary, onClick, style, isFullWidth}}>
                {title}
            </ButtonStyle>
        )
    }
}
export default Button
