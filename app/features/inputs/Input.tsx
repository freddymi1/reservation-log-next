'use client';

import { RegisterStyle } from "@/app/utils/constantStyle";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors,
    placeholder?: string
}

export const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors,
    placeholder
}) => {
    return (
        <div className={RegisterStyle.main}>
            {formatPrice && (
                <BiDollar size={24} className={RegisterStyle.subMainStyle}/>
            )}
            
            <input
                id={id}
                {...register(id, {required})}
                type={type} 
                // placeholder={placeholder}
                className={`
                    ${RegisterStyle.inputStyle.inputForm}
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-neutral-600'}
                `}
            />
            <label 
                htmlFor={id} 
                className={`
                ${RegisterStyle.inputStyle.label}
                ${formatPrice ? 'left-9' : 'left-4'}
                ${RegisterStyle.inputStyle.labelSuite}
                `}>
                    {label}
            </label>
        </div>
    )
}