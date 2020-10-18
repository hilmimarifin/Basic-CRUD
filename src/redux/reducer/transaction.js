const data = []


const transaction = (state = data, action) => {
    switch(action.type){
        case 'ADD_TRANSACTION' :
            state.push(action.payload)
            return state
        
        default :
            return state    
    }
}

export default transaction