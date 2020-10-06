import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className=" bg-gray-900">
            <div className="flex flex-row h-16 px-24">
                <Router>
                    <Link to="/" className=" text-gray-300 flex items-center mr-6">Home</Link>
                    <Link to="/products"className="text-gray-300 flex items-center">Product</Link>
                </Router>
            </div>
        </nav>
    )
}

export default Navbar
