import React from 'react'
import Gap from '../gap'

const InputForm = ({...rest}) => {
    return (
        <div>
            <Gap width={5}/>
            <input className=" appearance-none border rounded w-226 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...rest}></input>
        </div>
    )
}

export default InputForm
