import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
        margin: 0 10px;
`

const StyledRound = styled.div`
position: relative;

label {
 background-color: #fff;
  border: 1px solid rgba(21, 37, 59, 0.5);
  border-radius: 50%;
  cursor: pointer;
  height: 23px;
  left: 0;
  position: absolute;
  top: 0;
  width: 23px;
}

label:after {
    border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 6px;
  transform: rotate(-45deg);
  width: 12px;
  }

input[type="checkbox"] {
visibility: hidden;
}

input[type="checkbox"]:checked + label {
  background-color: #15253B;
  border-color: #15253B;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
`

class YMCheckbox extends Component {

  constructor(props) {
    super(props)
    this.state = { checkBoxChecked: false }
  }

  handleCheckClick = () => {
    this.setState({ checkBoxChecked: !this.state.checkBoxChecked }, () => {
      this.props.handleCheckClickProp(this.props.id, this.state.checkBoxChecked)
    })


  }

  render() {
    return (
      <StyledContainer>

        <StyledRound>
          <input type="checkbox"
                 id={this.props.id}
                 onClick={this.handleCheckClick}
          />

          <label htmlFor={this.props.id}></label>
        </StyledRound>
      </StyledContainer>
    )
  }
}
export default YMCheckbox

// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { defaultList: todo, checked: false }
//   }


//   onSubmit = (task) => {
//     //create a copy of state
//     let newState = { ...this.state.defaultList }
//     newState.defaultList.push({ task });
//     this.setState(newState);
//   }

//   handleCheckBox = (checked) => {
//     if (checked) {
//       //shou your message
//     }
//     else {//hide it
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Form
//           onSubmit={this.onSubmit}
//           checkCheckBox={this.handleCheckBox}
//         />
//         <List
//           lists={this.state.defaultList}
//         />
//       </div>
//     );
//   }
// }

// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////

// class Form extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { checkBoxChecked: false }
//   }

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit(this.refs.userInput.value);
//     this.refs.userInput.value = "";
//   }

//   handleCheckClick = () => {
//     //you can't setState on props
//     //this.props.setState({ checked: !this.props.state.checked });
//     this.setState({ checkBoxChecked: !this.state.checkBoxChecked })
//     //now if you want do stuff on parent you can call the parent function
//     this.props.handleCheckClick(this.state.checkBoxChecked)

//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit}>
//           <div>
//             <label>Task</label>
//             <input ref="userInput" />
//             <p className="warning"></p>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               checked={this.state.checkBoxChecked}
//               //duplicated handler
//               //checkCheckBox={this.handleCheckClick}
//               onChange={this.handleCheckClick}
//             />
//             <label>Important</label>
//           </div>
//           <button type="submit">ADD</button>
//         </form>
//       </div>
//     );
//   }
// }
