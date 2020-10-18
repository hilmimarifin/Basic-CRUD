//AUTH REDUCER
export const signingIn = () => {
    return {
        type : "SIGNING_IN"
    }
}
export const signingOut = () => {
    return {
        type : "SIGNING_OUT"
    }
}

export const signingUserData = (userdata) => {
    return {
        type : "SIGNING_USER_DATA",
        payload : userdata
    }
}

//SHOPPING CHART REDUCER
export const addToChart = (chartdata) => {
    return {
        type : "ADD_TO_CHART",
        payload : chartdata
    }
}

export const removeFromChart = (chartdata) => {
    return {
        type : "REMOVE_FROM_CHART",
        payload : chartdata.chartID
    }
}

export const setQuantity = (chartdata) => {
    return {
        type : "SET_QUANTITY",
        payload : chartdata
    }
}


//TRANSACTION REDUCER
export const addTransaction = (chartdata) => {
    return {
        type : "ADD_TRANSACTION",
        payload : chartdata
    }
}


