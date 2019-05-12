'use strict';


import React from 'react';
import './inputStyle.css';

const InputComponent = (props) => {
  return (
    <label className="input__container">
      <legend className="legend-input" >{props.nameInput}</legend>
      <input className="input__component" type={props.typeInput}></input>
    </label>
  )
}


InputComponent.defaultProps = {
  nameInput: 'Input Name Not Defined',
  typeInput: 'name'
}


export default InputComponent;