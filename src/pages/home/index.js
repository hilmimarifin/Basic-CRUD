import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {  InputForm, Modal } from '../../components'
import {removeFromChart} from '../../redux/actions'
import { setQuantity } from '../../redux/actions'



const Home = () => {
    const dispatch = useDispatch();
   
   
    const dataUser = useSelector(state=>state.UserData)
    const dataChart = useSelector(state=> state.ShoppingChart)
    
    const changeQty =(e)=>{
        const key = e.target.name
        const indexEl = dataChart.findIndex((el) => el.chartID >= key)
        const newData2 = [...dataChart]
        newData2[indexEl] = {...newData2[indexEl], quantity: e.target.value}    
        dispatch(setQuantity(newData2))
    }
    
   
    const handledelete = (anyproduct)=>{
        dispatch(removeFromChart(anyproduct))
    }
    const jmlProduk = [...dataChart]
 
    return (
        <div>
            <h1>Welcome {dataUser.username}</h1>
            <h1>{jmlProduk.length} Produk</h1>
            <TransactionList chart={dataChart} setQuantity={(e)=> changeQty(e)} handledelete={(anyproduct)=>handledelete(anyproduct)}/>
            <TotalCost chart={dataChart} />
   
        </div>
    )
}


const TransactionList = (props) => {
    //const chart = props.chart
  
    
    return(
        <table className="table-auto border border-gray-400 rounded-lg " >
                    <thead>
                    <tr className="bg-gray-300 rounded-lg">
                        <th className="px-10 py-5">Nama Produk</th>
                        <th className="px-10 py-5">Harga Satuan</th>
                        <th className="px-10 py-5">Kuantitas</th>
                        <th className="px-10 py-5">Harga total</th>
                        <th className="px-10 py-5">Aksi</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {props.chart.map((anyproduct) => {
                        return(
                        <tr key={anyproduct.chartID}>
                            <td className="px-10 py-5 "> <img src="" alt=""></img>{anyproduct.nama}</td>
                            <td className="px-10 py-5">{anyproduct.harga}</td>
                            <td className="px-10 py-5"><InputForm type="number" defaultValue={anyproduct.quantity} name={anyproduct.chartID} onChange={props.setQuantity}/></td>
                            <td className="px-10 py-5">{anyproduct.harga*anyproduct.quantity}</td>
                            <td className="px-10 py-5  flex flex-row">
                                < Modal bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={() => props.handledelete(anyproduct)}/>
                            </td>
                        </tr>)
                    } )}
                </tbody> 
        </table>
    )
}


const TotalCost = (props) =>{
    const chart = props.chart
    const totalItem = chart.reduce((prev,cur)=>{return prev + (cur.quantity*1)},0)
    const totalHarga = chart.reduce((prev,cur)=>{return prev + (cur.quantity*cur.harga)},0)
    
  
    return(
        <div>
            <h2>Banyknya Item: {totalItem}</h2>
            <h2>Total Pembayaran: {totalHarga}</h2>
        </div>
    )
}
export default Home
