import Axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, InputForm } from '../../components'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../redux/actions'

const AddProduct = () => {
    // const attribut = {
    //     nama : '',
    //     kode : '',
    //     stok :'',
    //     harga : ''
    // }
    

    // const handleChange = (e) =>{
      
    //     const {name, value} = e.target;
    //     const timestamp = new Date().getTime();
    //     attrib['id'] = timestamp
    //     setAttrib({
    //         ...attrib,
    //         [name] : value
         
    //     })             
    // }
    
    // }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     postData();
    // }
    
    // return (
    //     <div>
    //         <h1 className="font-bold text-4xl">Add new product</h1>
    //         <form autoComplete="off" onSubmit={handleSubmit} >
                
    //             <p>Nama Product</p> <InputForm value ={attrib.nama} name="nama" type="text" onChange={handleChange}/>
    //             <p>Kode</p><InputForm value ={attrib.kode} name="kode" type="text" onChange={handleChange}/>
    //             <p>Stok</p><InputForm value = {attrib.stok }name="stok" type="text" onChange={handleChange}/>
    //             <p>Harga</p><InputForm value = {attrib.harga} name="harga" type="text" onChange={handleChange}/>
    //             <Gap height={20}/>
    //             <Button label="Submit" type="submit"/>

    //         </form>

    //     </div>
    // )

    // const [attrib, setAttrib] = useState({})

    // const postData = () => {
    //     Axios.post('http://localhost:4000/products', attrib).then((res) =>{ history.push('/products')}, (err) => {console.log('error', err)})
    // }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => Axios.post('http://localhost:4000/products', data)
      .then((res) =>{ return res.data }, (err) => {console.log('error', err)})
      .then((data2)=> dispatch(addProducts(data2)) )
      .then(()=> { history.push('/products')});

    const history = useHistory()
    const dispatch = useDispatch()
  console.log(watch("data")); // watch input value by passing the name of it

  return (
    <div>

        <h1 className="font-bold text-4xl"> Add Product</h1>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <p>Nama</p>
            <InputForm name="nama"  ref={register({required:true})} />
            {errors.nama && <span className={`text-sm text-red-600`}>This field is required</span>}

            <p>Kode</p>
            <InputForm name="kode" ref={register({ required: true })}/>
            {errors.kode && <span className={`text-sm text-red-600`}>This field is required</span>}

            <p>Stok</p>
            <InputForm type="number" name="stok" ref={register({required:true})}/>
            {errors.stok && <span className={`text-sm text-red-600`}>This field is required</span>}

            <p>Harga</p>
            <InputForm type="number" name="harga" ref={register({required:true})}/>
            {errors.harga && <span className={`text-sm text-red-600`}>This field is required</span>}

        
        <Button label="Submit" type="submit" />
        </form>

    </div>
  );
}

export default AddProduct
