import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { AddProduct, EditProduct, Home, Login, Products } from '../../pages'
import { useDispatch, useSelector } from 'react-redux'
import { signingOut } from '../../redux/actions'
import PrivateRoute from './privateRoute'

const Routes = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.Auth);
    const handleClick = () => { dispatch(signingOut()) 
        console.log(isLogged) }
    return (
        <div>
            <Router>
                <div>
                    <nav className=" bg-gray-900">
                        <div className="flex flex-row h-16 px-24">               
                                <Link to="/" className=" text-gray-300 flex items-center mr-6">Home</Link>
                                <Link to="/products"className="text-gray-300 flex items-center">Products</Link>
                                <p className="text-gray-300 flex items-center ml-6"  onClick={ () => handleClick() }>log out</p>
                               
                        </div>
                    </nav>
                </div>
                <div className="container-md px-24 pb-24 pt-10">
                    <Switch>
                        <Route path="/login" component={Login}/>    
                        <PrivateRoute path="/products/add" component={AddProduct}/>
                        <PrivateRoute path="/products/:id" component={EditProduct}/>
                        <PrivateRoute path="/products" component={Products}/>
                        <PrivateRoute path="/" component={Home}/>
                    </Switch>

                </div>
            </Router>
            
        </div>
    )
}

export default Routes
