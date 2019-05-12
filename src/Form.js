'use strict';

import React from 'react';
import InputComponent from './Components/InputComponent';
import ButtonSubmit from './Components/ButtonSubmit'
import './Form.css';


function ResetForm () {
  alert('hey')
}



const Form = (props) => {
  return (
    <form>
      <InputComponent nameInput='Full Name' typeInput='name'/>
      <InputComponent nameInput='Email Address' typeInput='email'/>
      <InputComponent nameInput='Username' typeInput='name'/>
      <InputComponent nameInput='Password' typeInput='password'/>
      <InputComponent nameInput='Confirm Password' typeInput='password'/>
      <ButtonSubmit buttonClassName='button__submit--allowed' />
      <ButtonSubmit onClick={ResetForm} buttonClassName='button__submit--denied' nameInput='reset' />

    </form>
  )
}




export default Form