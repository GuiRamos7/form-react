'use strict';


import React, { Component } from 'react';
import './buttonSubmit.css';




class ButtonSubmit extends Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <button  
        className={this.props.buttonClassName}>
          {this.props.nameInput}
      </button>
    )
  }
}

ButtonSubmit.defaultProps = {
  nameInput: 'Submit',
  buttonClassName: 'button__submit' 
}





// const ButtonSubmit = (props) => {
//   return (
//     <button  className={props.buttonClassName} >{props.nameInput}</button>
//   )
// }





export default ButtonSubmit;