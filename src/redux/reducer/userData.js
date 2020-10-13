const data = {
    username : "",
    password : ""
}
const UserData = (state = data, action) => {
    switch(action.type){
        case 'SIGNING_USER_DATA':
            return state = action.payload
       
        default : 
            return state
    }
}

export default UserData