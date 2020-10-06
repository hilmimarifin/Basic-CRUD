import Axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Gap, InputForm } from '../../components'

const AddProduct = () => {
    const attribut = {
        nama : '',
        kode : '',
        stok :'',
        harga : ''
    }
    const [attrib, setAttrib] = useState(attribut)

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
    const postData = () => {
        Axios.post('http://localhost:4000/products', attrib).then((res) =>{ history.push('/products')}, (err) => {console.log('error', err)})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        postData();
    }
    
    return (
        <div>
            <h1 className="font-bold text-4xl">Add new product</h1>
            <form autoComplete="off" onSubmit={handleSubmit} >
                
                <p>Nama Product</p> <InputForm value ={attrib.nama} name="nama" type="text" onChange={handleChange}/>
                <p>Kode</p><InputForm value ={attrib.kode} name="kode" type="text" onChange={handleChange}/>
                <p>Stok</p><InputForm value = {attrib.stok }name="stok" type="text" onChange={handleChange}/>
                <p>Harga</p><InputForm value = {attrib.harga} name="harga" type="text" onChange={handleChange}/>
                <Gap height={20}/>
                <Button label="Submit" type="submit"/>

            </form>

        </div>
    )
}

export default AddProduct
