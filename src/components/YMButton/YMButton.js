import React, { Component } from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
    height:50px;
    border-radius: 2px;
  display: inline-block;
 -webkit-appearance: none;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1em;
line-height: 50px;
    min-width: 8.25rem;
    transition-duration: 100ms;
    transition-property: background, border, box-shadow, color;
    transition-timing-function: ease;
    pointer-events: auto;
    color: #15253B;
    margin: 0px;
    padding: 0;
    outline: none;
 
    text-align: center;
    background: #15253B;
    color: white;

&:hover {
    background: white;
    color: rgb(0, 0, 0);
    background: #ECC2AC;
    color: #15253B;
  }
`

class YMButton extends Component {

    render() {
        const {href, target, rel, title, primary, secondary, onClick, style} = this.props;
        return (
            <ButtonStyle {... {href, target, rel, primary, secondary, onClick, style}}>
                {title}
            </ButtonStyle>
        )
    }
}
export default YMButton
