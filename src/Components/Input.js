import React from 'react'

const Input = ({ type, placeholder }) => {
    return (
        <div className="flex items-center justify-center relative group">
            <input className="w-4/5 max-w-[380px] min-w-[320px] h-14 my-2 peer bg-trueGray-300 bg-opacity-40 hover:bg-opacity-60 shadow-custom rounded-lg px-4 focus:outline-none transition-all duration-200 ease-in transform placeholder-transparent z-10" placeholder={placeholder} type={type} required autoComplete="off" />
            <label className="absolute left-3 text-sm text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-700 peer-placeholder-shown:top-6 peer-focus:text-sm peer-focus:top-1.5 peer-focus:text-gray-800 transition-all duration-200 top-1.5">{placeholder}</label>
            <span className="w-2 h-2 rounded-full absolute right-3 peer-invalid:bg-red-500 peer-valid:bg-green-500 peer-focus:bg-amber-500 transition-all duration-200 ease-in transform"></span>
        </div>
    )
}

export default Input
