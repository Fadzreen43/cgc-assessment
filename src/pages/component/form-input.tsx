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
    <div className='flex items-start flex-col'>
  <label className='mt-4 text-lg'>{label}</label>
  <Input
    className='p-4 border-2 border-slate-400 mt-2'
    value={value}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
  />
</div>
  );
};

export default FormInput;
