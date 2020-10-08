import React from 'react'
import Gap from '../gap'
import { useForm } from 'react-hook-form'



const InputForm = React.forwardRef(({...rest},ref) => (

<div>
    <input className="appearance-none border rounded w-226 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={ref} {...rest}/> 
</div>

))
         
    


export default InputForm
