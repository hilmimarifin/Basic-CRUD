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

