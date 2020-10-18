import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import {  useHistory } from 'react-router-dom'
import { Modal } from '../../components'
import { Button, Gap, InputForm } from '../../components/atom'
import {useSelector} from 'react-redux'
import { useDispatch} from 'react-redux'
import { addToChart } from '../../redux/actions'



const Products = () => {

    const [products, setProducts] = useState([])

    const getData = () => { Axios.get('http://localhost:4000/products?_sort=id&_order=desc')
    .then((result)=> {
        setProducts(result.data)
    })

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
    
    const getSpecificData = (data) => { Axios.get(`http://localhost:4000/products?nama=${data}`).then((result) => {setProducts(result.data)})

    }
    const handleSearchButton = (data) => {
       getSpecificData(data.cariProduk)
    }
  
    const history = useHistory()

    const dataUser = useSelector(state => state.UserData)
    return (
        <div>
            <h1>Hai, {dataUser.username}</h1>
            <Filter  search={(data)=>handleSearchButton(data) }/>
            <Gap height={52}/>
            <ProductHeader Products={products} onClick={()=>history.push('/products/add')}/>
            <Gap height={23}/>
            <ProductList products={products} delete={handleDelete} edit={handleEdit}/>
        </div>
    )
}

const Filter = (props) => {

const {register, handleSubmit} = useForm();


const onSubmit = (data) => props.search(data)
    return(
        <div className="flex flex-row-reverse">
            
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="flex flex-row" >
                    <InputForm ref={register({required: true})} name="cariProduk" placeholder="Nama Produk"/>
                    <Gap width={20}/>
                    <Button type="submit" label="Cari" />
                </form>
            
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
    const dispatch = useDispatch();
    const chart = useSelector(state => state.ShoppingChart);
 

    
   
    const handleAddToChart = (anyproduct) =>{
        const chartID = new Date().getTime()
        const newChart = { nama : anyproduct.nama,
                            kode : anyproduct.kode,
                            stok : anyproduct.stok,
                            harga: anyproduct.harga,
                            quantity: 1,
                            id: anyproduct.id,
                            chartID: chartID}
         
        
        dispatch(addToChart(newChart));
       
        
        console.log('ini chart',chart);
    };


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
                            <td className="px-10 py-5  flex flex-row">
                                <Button label="Edit" onClick={()=> props.edit(anyproduct)} mx={5}/>
                                <Modal bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={()=>props.delete(anyproduct)}/>
                                <Button label="+" mx={5} onClick={()=> handleAddToChart(anyproduct)}/>
                            </td>
                        </tr>)
                    } )}
                </tbody> 
            </table>
            {/* <Modal show={props.modal}/> */}
        </div>
       
    )
}

export default Products
