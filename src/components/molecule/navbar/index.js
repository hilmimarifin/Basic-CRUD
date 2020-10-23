import React from 'react'

const Navbar = (props) => {
    return (
        <nav className=" bg-white" >
            <div className={`flex flex-row h-12 px-10 min-w-full ${props.border}`}>
                    {props.children}
            </div>
        </nav>  
    )
}

export default Navbar
