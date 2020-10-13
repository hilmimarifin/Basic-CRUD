import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {  useHistory, useParams } from 'react-router-dom'
import { Button, InputForm } from '../../components'

const EditProduct = () => {
    const {id} = useParams()
    const getData =() =>{
        Axios.get(`http://localhost:4000/products/${id}`).then((res) => { setAttrib(res.data) }, (err) => {console.log(err)})
    }
      
    useEffect(
       getData
    , [])

    
    const [attrib, setAttrib] = useState({})

    // const handleChange = (e) =>{
      
    //     const {name, value} = e.target;
    //     const timestamp = new Date().getTime();
    //     attrib['id'] = timestamp
    //     setAttrib({
    //         ...attrib,
    //         [name] : value
         
    //     })             
    // }

    const history = useHistory()
    const putData = (data) => {
    Axios.put(`http://localhost:4000/products/${id}`, data).then((res) =>{ history.push('/products')}, (err) => {console.log('error', err)})
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     putData();
        
     
    // }
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {putData(data)}

    return (
        <div>
            <h1 className="font-bold text-4xl">Edit product</h1>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <p>Nama</p>
        <InputForm name="nama"  ref={register({required:true})} defaultValue={attrib.nama}/>
        {errors.nama && <span className={`text-sm text-red-600`}>This field is required</span>}

        <p>Kode</p>
        <InputForm name="kode" ref={register({ required: true })} defaultValue={attrib.kode}/>
        {errors.kode && <span className={`text-sm text-red-600`}>This field is required</span>}

        <p>Stok</p>
        <InputForm type="number" name="stok" ref={register({required:true})} defaultValue={attrib.stok}/>
        {errors.stok && <span className={`text-sm text-red-600`}>This field is required</span>}

        <p>Harga</p>
        <InputForm type="number" name="harga" ref={register({required:true})} defaultValue={attrib.harga}/>
        {errors.harga && <span className={`text-sm text-red-600`}>This field is required</span>}

      
      <Button label="Submit" type="submit" />
    </form>

        </div>
    )
}

export default EditProduct
