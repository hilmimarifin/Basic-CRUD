import React, { useEffect } from 'react';
import { Routes } from './config';
import { useDispatch, useSelector } from 'react-redux'
import './styles/app.css';
import { getProducts } from '../src/redux/actions'
import Axios from 'axios'

function App() {
  
  const dispatch = useDispatch()
  const getData = () => { Axios.get('http://localhost:4000/products?_sort=id&_order=desc')
    .then((result)=> {
        dispatch(getProducts(result.data))
    })
  }

  useEffect(() => {
    getData()
    },[])


  return (
    <div className={'container max-w-md mx-auto min-h-screen'}>
     <Routes />
    </div>
  );
}

export default App;
