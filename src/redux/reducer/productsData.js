const data = []


const ProductsData = (state = data, action) => {
    switch(action.type){
        case 'GET_PRODUCTS' :
            return state = action.payload
        case 'ADD_PRODUCTS' :
            state.unshift(action.payload)
            return state
        case 'REMOVE_PRODUCTS':
            const test = state.filter((newState)=> {return newState.id !== action.payload})
            return state = test
        default :
            return state    
    }
}

export default ProductsData