import { cn } from "@/lib/utils";
import React from "react";

type TextAreaProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  isLoading?: boolean;
  helperText?: string;
};

export default function TextArea({
  register,
  errors,
  label,
  name,
  isLoading,
  helperText = "",
}: TextAreaProps) {
  return (
    <div className='col-span-full w-full'>
      <label htmlFor={name} className='block text-sm font-medium leading-6'>
        {label}
      </label>
      <div className='mt-2 w-full'>
        {/* Ensure this div is full width */}
        <textarea
          disabled={isLoading}
          id={name}
          {...register(`${name}`, { required: true })}
          rows={3}
          className={cn(
            "w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            errors[`${name}`] && "focus:ring-red-500"
          )}
        />
        {errors[`${name}`] && (
          <span className='text-xs text-red-600'>Description is required</span>
        )}
      </div>
      {helperText && (
        <p className='mt-1 text-sm leading-6 text-gray-600'>{helperText}</p>
      )}
    </div>
  );
}
