import React from 'react'

const Navbar = (props) => {
    return (
        <nav className=" bg-gray-900">
            <div className="flex flex-row h-16 px-24">
                    {props.children}
            </div>
        </nav>  
    )
}

export default Navbar
