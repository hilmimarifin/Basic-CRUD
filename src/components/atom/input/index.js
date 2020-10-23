import React from 'react'




const InputForm = React.forwardRef(({...rest},ref,width) => (

<div>
    <input className={`appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} ref={ref} {...rest}/> 
</div>

))
         
    


export default InputForm
