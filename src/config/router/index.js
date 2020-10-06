import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { AddProduct, EditProduct, Home, Products } from '../../pages'

const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <nav className=" bg-gray-900">
                        <div className="flex flex-row h-16 px-24">               
                                <Link to="/" className=" text-gray-300 flex items-center mr-6">Home</Link>
                                <Link to="/products"className="text-gray-300 flex items-center">Products</Link>
                        </div>
                    </nav>
                </div>
                <div className="container-md px-24 pb-24 pt-10">
                    <Switch>
                        <Route path="/products/add">
                            <AddProduct/>
                        </Route>   
                         <Route path="/products/:id">
                            <EditProduct/>
                        </Route> 
                        <Route path="/products">
                            <Products/>
                        </Route>           
                        <Route path="/">
                            <Home/>
                        </Route>        
                    </Switch>

                </div>
            </Router>
            
        </div>
    )
}

export default Routes
