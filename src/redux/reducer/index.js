import {combineReducers} from 'redux'
import Auth from './auth'
import UserData from './userData'
import ShoppingChart from './shoppingChart'

const reducers = combineReducers({
    Auth : Auth,
    UserData,
    ShoppingChart
})


export default reducers;

