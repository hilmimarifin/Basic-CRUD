import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { AddProduct, EditProduct, Home, Login, Products, Cart } from '../../pages'
import { useDispatch, useSelector } from 'react-redux'
import { signingOut } from '../../redux/actions'
import PrivateRoute from './privateRoute'
import { Navbar } from '../../components'
import HomeIcon from '../../asset/icon/Home'
import ProductIcon from '../../asset/icon/ProductIcon'
import { ShoppingChartIcon, UserIcon } from '../../asset/icon'

const Routes = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.Auth);
    const handleClick = () => { dispatch(signingOut()) 
        console.log(isLogged) }
    return (
        <div>
            <Router>
               <div className="flex flex-col min-h-screen">
                    <div className="flex-grow">
                        <Switch>
                            <Route path="/cart" component={Cart}/>   
                            <Route path="/login" component={Login}/>    
                            <Route path="/products/add" component={AddProduct}/>
                            <Route path="/products/:id" component={EditProduct}/>
                            <Route path="/products" component={Products}/>
                            <Route path="/" component={Home}/>
                        </Switch>

                    </div>
                    <div className="sticky bottom-0">
                        <Navbar border={`border-t border-gray-400`}>
                            <Link to="/" className="flex  flex-1 items-center"><HomeIcon/></Link>
                            <Link to="/products"className="flex flex-1 items-center"><ProductIcon /></Link>
                            <Link to="/cart" className="flex  flex-1 items-center"><ShoppingChartIcon/></Link>
                            <div className={`flex flex-1 items-center`}><UserIcon onClick={ () => handleClick() }/></div>
                        </Navbar>
                    </div>
               </div>
            </Router>
            
        </div>
    )
}

export default Routes
