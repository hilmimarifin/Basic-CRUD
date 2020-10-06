import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import { Button, Gap, InputForm } from '../../components'

const EditProduct = () => {
    const {id} = useParams()
    const getData =() =>{
        Axios.get(`http://localhost:4000/products/${id}`).then((res) => { setAttrib(res.data) }, (err) => {console.log(err)})
    }
      
    useEffect(
       getData
    , [])

    
    const [attrib, setAttrib] = useState({})

    const handleChange = (e) =>{
      
        const {name, value} = e.target;
        const timestamp = new Date().getTime();
        attrib['id'] = timestamp
        setAttrib({
            ...attrib,
            [name] : value
         
        })             
    }

    const history = useHistory()
    const putData = () => {
    Axios.put(`http://localhost:4000/products/${id}`, attrib).then((res) =>{ history.push('/products')}, (err) => {console.log('error', err)})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        putData();
        
     
    }
    
    return (
        <div>
            <h1 className="font-bold text-4xl">Edit product</h1>
            <form autoComplete="off" onSubmit={handleSubmit} >
                
                <p>Nama Product</p> <InputForm value ={attrib.nama} name="nama" type="text" onChange={handleChange}/>
                <p>Kode</p><InputForm value ={attrib.kode} name="kode" type="text" onChange={handleChange}/>
                <p>Stok</p><InputForm value = {attrib.stok }name="stok" type="text" onChange={handleChange}/>
                <p>Harga</p><InputForm value = {attrib.harga} name="harga" type="text" onChange={handleChange}/>
                <Gap height={20}/>
                <Button label="Update" type="submit"/>

            </form>

        </div>
    )
}

export default EditProduct
