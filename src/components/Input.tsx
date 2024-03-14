import React, { HTMLInputTypeAttribute } from "react";
import { Control, Controller } from "react-hook-form";

type Props = {
  name: string
  label: string
  type?: HTMLInputTypeAttribute
  control: Control<any>
  placeholder?: string
  error?: string
}

const Input: React.FC<Props> = ({ name, label, type, placeholder, error, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, value, onBlur, onChange } }) => {
        return (
          <div className="w-[100%] flex flex-col gap-2 " >
            <label className="text-lg font-semibold  " >
              {label}
            </label>
            <input
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              type={type}
              placeholder={placeholder}
              className={`
                w-[100%] h-[45px] bg-gray-200 rounded-md focus:outline-none p-2 shadow-sm   
                ${error && "border-solid border-[0.5px] border-red-500 "}
              `}
            />

            {error && (
              <p className="text-sm  text-red-700 font-bold" >
                {error || "Erro de testes"}
              </p>
            )}
          </div>
        )
      }}
    />
  )
}

export default Input