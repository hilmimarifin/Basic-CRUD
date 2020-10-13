import React from 'react'
import {useSelector} from 'react-redux'

const Home = () => {
    const dataUser = useSelector(state=>state.UserData)
    return (
        <div>
            <h1>Welcome {dataUser.username}</h1>
        </div>
    )
}

export default Home
