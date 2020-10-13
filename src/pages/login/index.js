import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, InputForm } from "../../components";
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { signingIn, signingUserData } from '../../redux/actions'


function Login(props) {
 
    
    const dispatch = useDispatch()
    const dataUser = useSelector(state => state.UserData)
    console.log(dataUser)

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => { dispatch(signingIn())
        dispatch(signingUserData(data))
        history.replace(from)
        console.log(dataUser)
    }

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <p>E-mail</p>
        <InputForm name="username" ref={register({required:true})}/>
        {errors.username && <span className={`text-sm text-red-600`}>This field is required</span>}

        <p>Password</p>
        <InputForm type="password" name="password" ref={register({required:true})}/>
        {errors.password && <span className={`text-sm text-red-600`}>This field is required</span>}
        <Button type="submit" label="Log in" my={6}/>
        
      </form>
    </div>
  );
}

export default Login;