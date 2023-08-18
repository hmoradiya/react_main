import React, { useEffect } from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import Button from '../../Components/Button/Button';
import SignInForm from '../../Components/SignInForm/SignInForm';

function Authentication() {

  return (
    <div className='container'>
      <div className='row row-gap-3'>
        <div className='col-lg-6 col-md-12 col-12'>
          <SignInForm />
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
          <SignUpForm />
        </div>
      </div>
    </div>

  )
}

export default Authentication