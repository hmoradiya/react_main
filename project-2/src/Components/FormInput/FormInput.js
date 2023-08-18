import React from 'react';
import './FormInput.scss';

function FormInput({ label, handleChange, name, type, value, required }) {
  return (
    <div className='group'>
          <input className='form-input' type={type} name={name} onChange={handleChange} value={value} required={required} />
          {label && <label className={`${value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
  )
}

export default FormInput