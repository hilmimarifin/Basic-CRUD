const data = []


const ShoppingChart = (state = data, action) => {
    switch(action.type){
        case 'ADD_TO_CHART' :
            state.push(action.payload)
            return state
        case 'REMOVE_FROM_CHART':
            console.log('niai payload',action.payload)
            const test = (state.filter((newState)=> {return newState.chartID !== action.payload}))
            console.log(test)
            return state = test
        case 'SET_QUANTITY':
            return state = action.payload
        
        default :
            return state    
    }
}

export default ShoppingChart