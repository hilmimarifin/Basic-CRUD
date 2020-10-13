
const Auth = (state = false, action) => {
    switch(action.type){
        case 'SIGNING_IN':
            return state = true
        case 'SIGNING_OUT':
            return state = false
        default : 
            return state
    }
}

export default Auth
