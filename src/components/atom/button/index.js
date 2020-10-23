import React from 'react'

const Button = ({label,my,mx,py,px,width,...rest}) => {
    return (
        <div>
            <button className={`  border border-gray-600 rounded-lg hover:bg-blue-700 text-gray-600 font-bold w-${width} py-${py||2} px-${px||4} my-${my} mx-${mx} rounded `} {...rest}>
            {label}
        </button>

        </div>
    )
}

export default Button
