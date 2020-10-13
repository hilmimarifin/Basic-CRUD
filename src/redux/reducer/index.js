import {combineReducers} from 'redux'
import Auth from './auth'
import UserData from './userData'

const reducers = combineReducers({
    Auth : Auth,
    UserData
})


export default reducers;

