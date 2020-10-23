import Axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import {  useHistory } from 'react-router-dom'
import { Card, Modal, Navbar } from '../../components'
import { Button, Gap, InputForm } from '../../components/atom'
import {useSelector} from 'react-redux'
import { useDispatch} from 'react-redux'
import { addToChart, deleteProducts } from '../../redux/actions'
import { Default } from '../../asset/img'
import HomeIcon from '../../asset/icon/Home'
import { PlusIcon } from '../../asset/icon'



const Products = () => {

    // const [products, setProducts] = useState([])

    // const getData = () => { Axios.get('http://localhost:4000/products?_sort=id&_order=desc')
    // .then((result)=> {
    //     setProducts(result.data)
    // })

    // }
    
  
    // useEffect(() => {
    //     getData()
    //     },[])

    const dispatch = useDispatch();
    const products = useSelector(state => state.ProductsData)

    const handleDelete = (data) => {
        Axios.delete(`http://localhost:4000/products/${data.id}`).then(()=> dispatch(deleteProducts(data.id)), (err) => {console.log('penyebab error: ',err)})      
    }
    const handleEdit = (data) =>{ 
        history.push(`/products/${data.id}`)
        console.log(data)
    }
    
    const getSpecificData = (data) => { /*Axios.get(`http://localhost:4000/products?nama=${data}`).then((result) => {setProducts(result.data)})

*/}
    const handleSearchButton = (data) => {
       getSpecificData(data.cariProduk)
    }
    const history = useHistory()

    const dataUser = useSelector(state => state.UserData)
    return (
        <div>
            <div className={` sticky top-0`}>
                <Navbar border={`border-b border-gray-400`} children={
                    <div className={`flex flex-row w-screen`}>
                        <h1 className={` flex left-0 items-center text-lg font-bold`}>Products</h1>
                        <div className={`flex flex-grow`}></div>
                        <div className={`flex items-center right-0`} onClick={()=>history.push('/products/add')}><PlusIcon /></div>
                    </div>}/>
            </div>
            <Gap height={10}/>
            <Filter  search={(data)=>handleSearchButton(data) }/>
            <Gap height={5}/>
            <ProductHeader Products={products} />
            <Gap height={23}/>
            <ProductList products={products} delete={handleDelete} edit={handleEdit}/>
        </div>
    )
}

const Filter = (props) => {
const {register, handleSubmit} = useForm();
const onSubmit = (data) => props.search(data)
    return(
        <div className="flex justify-center">
            
                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="flex flex-row " >
                    <InputForm ref={register({required: true})} name="cariProduk" placeholder="Cari nama produk"/>
                    {/* <Button type="submit" label="Cari" /> */}
                </form>
            
        </div>
    )
}

const ProductHeader = (props) => {
    const Products= props.Products

    return(
        <div className="flex flex-col">
            <p className="border-b p-4  font-bold">{Products.length} Produk</p>
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
        <div className="flex flex-col justify-center align-middle divide-y-8">
                {/* <table className="table-auto border border-gray-400 rounded-lg ">
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
            </table> */}
             {props.products.map((anyproduct) => {
                        return(
                            <div key={anyproduct.id} className="flex flex-col w-full py-2">
                                <div className={`flex flex-row`}>
                                    
                                    <img src={Default} alt={Default} className="w-24 h-28"/>
                                    <div>
                                        <h2 className=" font-bold">{anyproduct.nama}</h2>
                                        <p>Rp {anyproduct.harga}</p>
                                        <p className="pt-3">Stok: {anyproduct.stok}</p>
                                    </div>
                                </div>
                                <div className={`flex flex-row justify-center`}>
                                    <Button width={32} mx={2} label={`add to chart`} onClick={()=> handleAddToChart(anyproduct)}/>
                                    <Modal width={32} mx={2} bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={()=>props.delete(anyproduct)}/>
                                </div>
                            </div>
                      )
                    } )}
        </div>
       
    )
}

export default Products
