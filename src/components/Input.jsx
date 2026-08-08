import React, { useId } from 'react'

const Input = React.forwardRef(
    function Input(
        {
            label,
            type = 'text',
            className = 'px-3 py-2 rounded-lg',
            ...props
        }, ref
    ) {
        const id = useId();
        return (
            <div className="w-full">{
                label && <label htmlFor={id} className="inline-block pb-1 mb-1">
                    {label}
                </label>
            }
            <input 
            type={type}
            className={`bg-white text-black
                 focus:bg-gray-50 outline-none duration-200
                  border border-gray-200 w-full
                ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            </div>
        )
    }
)

export default Input;
