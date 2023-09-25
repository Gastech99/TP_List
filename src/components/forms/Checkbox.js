import React from 'react'

function Checkbox({checked, onChange, label, id}) {
  return (
    <div className='form-check'>
        <input type='checkbox' className='form-check-input'
            checked={checked}
            value='value' placeholder='placeholder' 
            onChange={(e) => onChange(e.target.checked)}
        />

        <label htmlFor={id} className='form-check-label'>{label}</label>
    </div>
  )
}

export default Checkbox