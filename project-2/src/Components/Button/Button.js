import React from 'react'
import './Button.scss'

function Button({ label, type, googleBtn, inverted, handleClick }) {
  return (
    <div>
      {
      handleClick ?
        <button onClick={handleClick} className={`${googleBtn && 'google-sign-in'} ${inverted && 'inverted'} button-container`} type={type}>{label}</button>
      :
        <button className={`${googleBtn && 'google-sign-in'} ${inverted && 'inverted'} button-container`} type={type}>{label}</button>
      }
    </div>
  )
}

export default Button