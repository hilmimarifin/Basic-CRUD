import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import {  useHistory } from 'react-router-dom'
import { Modal } from '../../components'
import { Button, Gap, InputForm } from '../../components/atom'


const Products = () => {

    const [products, setProducts] = useState([])

    const getData = () => { Axios.get('http://localhost:4000/products')
    .then((result)=> {
        setProducts(result.data)
    })

    }
    
    const getSpecificData = () => { Axios.get(`http://localhost:4000/products?nama=${filterValue}`).then((result) => {setProducts(result.data)})

    }
    useEffect(() => {
        getData()
        },[])



    const handleDelete = (data) => {
        Axios.delete(`http://localhost:4000/products/${data.id}`).then(()=> getData(), (err) => {console.log(err)})
       
    }


    const handleEdit = (data) =>{
      
        history.push(`/products/${data.id}`)
        console.log(data)

    }
    
    const [filterValue, setFilterValue] = useState('')
    const handleChangeFilter = (e) => {
        setFilterValue(e.target.value)
    }


    const handleSearchButton = () => {
    
       getSpecificData()

    }
  
    const history = useHistory()
    return (
        <div>
            <Filter change = {handleChangeFilter} search={handleSearchButton} />
            <Gap height={52}/>
            <ProductHeader Products={products} onClick={()=>history.push('/products/add')}/>
            <Gap height={23}/>
            <ProductList products={products} delete={handleDelete} edit={handleEdit}/>
        </div>
    )
}

const Filter = (props) => {



    return(
        <div>
            <div className="flex flex-row">
                <Gap width={1000}/>
                <InputForm onChange={props.change} placeholder="Nama Produk"/>
                <Gap width={20}/>
                <Button onClick={props.search} label="Cari" />
            </div>
        </div>
    )
}

const ProductHeader = ({Products,...rest}) => {

    return(
        <div className="flex flex-row pl-56">
   
            <p className=" text-lg font-bold">{Products.length} Produk</p>
            <Gap width={680}/>
            <Button label={`+ Add Product`} {...rest}/>
        </div>
    )
}

const ProductList = (props) => {

    return(
        <div className="container flex justify-center align-middle">
            <table className="table-auto border border-gray-400 rounded-lg ">
                <thead>
                   <tr className="bg-gray-300 rounded-lg">
                       <th className="px-10 py-5">Nama Produk</th>
                       <th className="px-10 py-5">Kode</th>
                       <th className="px-10 py-5">Stok</th>
                       <th className="px-10 py-5">Harga</th>
                       <th className="px-10 py-5">Aksi</th>
                       
                   </tr>
                </thead>
                <tbody>
                    {props.products.map((anyproduct) => {
                        return(
                        <tr key={anyproduct.id}>
                            <td className="px-10 py-5 "> <img src="" alt=""></img>{anyproduct.nama}</td>
                            <td className="px-10 py-5">{anyproduct.kode}</td>
                            <td className="px-10 py-5">{anyproduct.stok}</td>
                            <td className="px-10 py-5">{anyproduct.harga}</td>
                            <td className="px-10 py-5  flex flex-row"><Button label="Edit" onClick={()=> props.edit(anyproduct)}/><Gap width={20}/><Modal bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={()=>props.delete(anyproduct)}/></td>
                        </tr>)
                    } )}
                </tbody> 
            </table>
            {/* <Modal show={props.modal}/> */}
        </div>
       
    )
}

export default Products
