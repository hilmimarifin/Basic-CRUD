import {combineReducers} from 'redux'
import Auth from './auth'
import UserData from './userData'
import ShoppingChart from './shoppingChart'
import ProductsData from './productsData'

const reducers = combineReducers({
    Auth : Auth,
    UserData,
    ShoppingChart,
    ProductsData
})


export default reducers;

