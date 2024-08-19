import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface ITextInputProps {
  isLoading: any;
  mediaLoading?: any;
  register: any;
  errors: any;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
}
export default function TextInput({
  isLoading,
  mediaLoading,
  register,
  errors,
  label,
  type,
  name,
  placeholder,
}: ITextInputProps) {
  return (
    <div className='grid gap-1'>
      <Label className='Enter Email mb-2' htmlFor={name}>
        {label}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        autoCapitalize='none'
        autoComplete={name}
        autoCorrect='off'
        disabled={isLoading || mediaLoading}
        {...register(`${name}`)}
      />
      {errors?.[name] && (
        <p className='px-1 text-xs text-red-600'>{errors[name]?.message}</p>
      )}
    </div>
  );
}
