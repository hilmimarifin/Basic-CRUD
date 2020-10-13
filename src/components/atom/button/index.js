import React from 'react'

const Button = ({label,my,mx,py,px, ...rest}) => {
    return (
        <div>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-${py||2} px-${px||4} my-${my} mx-${mx} rounded`} {...rest}>
            {label}
        </button>

        </div>
    )
}

export default Button
