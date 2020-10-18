import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { AddProduct, EditProduct, Home, Login, Products } from '../../pages'
import { useDispatch, useSelector } from 'react-redux'
import { signingOut } from '../../redux/actions'
import PrivateRoute from './privateRoute'
import { Navbar } from '../../components'

const Routes = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.Auth);
    const handleClick = () => { dispatch(signingOut()) 
        console.log(isLogged) }
    return (
        <div>
            <Router>
                <div>
                    <Navbar>
                        <Link to="/" className=" text-gray-300 flex items-center mr-6">Home</Link>
                        <Link to="/products"className="text-gray-300 flex items-center">Products</Link>
                        <p className="text-gray-300 flex items-center ml-6"  onClick={ () => handleClick() }>log out</p>       
                    </Navbar>
                </div>
                <div className="container-md px-24 pb-24 pt-10">
                    <Switch>
                        <Route path="/login" component={Login}/>    
                        <Route path="/products/add" component={AddProduct}/>
                        <Route path="/products/:id" component={EditProduct}/>
                        <Route path="/products" component={Products}/>
                        <Route path="/" component={Home}/>
                    </Switch>

                </div>
            </Router>
            
        </div>
    )
}

export default Routes
