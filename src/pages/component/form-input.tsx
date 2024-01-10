// FormInput.jsx
import React from 'react';
import { Input } from '@mui/material';

const FormInput = ({
  label, value, placeholder, type, onChange
}: {
  label: string,
  value: any,
  placeholder: any,
  type: string,
  onChange: any,
}) => {
  return (
    <div className='flex items-start flex-col '>
      <label className='mt-16 '>{label}</label>
      <Input
        className='p-3 border-2 border-slate-400'
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
