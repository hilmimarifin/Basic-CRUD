import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Default } from '../../asset/img'
import {  Button, Card, Gap, InputForm, Modal } from '../../components'
import {removeFromChart} from '../../redux/actions'
import { setQuantity } from '../../redux/actions'



const Cart= () => {
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
 

            <div className={`flex flex-col `}>
                <h1>Welcome {dataUser.username}</h1>
                <h1>{jmlProduk.length} Produk</h1>
                <div className={`flex flex-grow`}>
                    <TransactionList chart={dataChart} setQuantity={(e)=> changeQty(e)} handledelete={(anyproduct)=>handledelete(anyproduct)}/>    
                </div>
                <div className={`  `}><TotalCost chart={dataChart} /></div>
    


        </div>
    )
}


const TransactionList = (props) => {
    //const chart = props.chart
  
    
    return(
        // <table className="table-auto border border-gray-400 rounded-lg " >
        //             <thead>
        //             <tr className="bg-gray-300 rounded-lg">
        //                 <th className="px-10 py-5">Nama Produk</th>
        //                 <th className="px-10 py-5">Harga Satuan</th>
        //                 <th className="px-10 py-5">Kuantitas</th>
        //                 <th className="px-10 py-5">Harga total</th>
        //                 <th className="px-10 py-5">Aksi</th>
                        
        //             </tr>
        //             </thead>
        //             <tbody>
        //             {props.chart.map((anyproduct) => {
        //                 return(
        //                 <tr key={anyproduct.chartID}>
        //                     <td className="px-10 py-5 "> <img src="" alt=""></img>{anyproduct.nama}</td>
        //                     <td className="px-10 py-5">{anyproduct.harga}</td>
        //                     <td className="px-10 py-5"><InputForm type="number" defaultValue={anyproduct.quantity} name={anyproduct.chartID} onChange={props.setQuantity}/></td>
        //                     <td className="px-10 py-5">{anyproduct.harga*anyproduct.quantity}</td>
        //                     <td className="px-10 py-5  flex flex-row">
        //                         < Modal bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={() => props.handledelete(anyproduct)}/>
        //                     </td>
        //                 </tr>)
        //             } )}
        //         </tbody> 
        // </table>
        <div className="flex flex-col justify-center align-middle divide-y-8">
            
            {props.chart.map((anyproduct) => {
              return(
                <div key={anyproduct.chartID} className="flex flex-col w-full py-2">
                    <div className={`flex flex-row`}>
                        
                        <img src={Default} alt={Default} className="w-24 h-28"/>
                        <div>
                            <h2 className=" font-bold">{anyproduct.nama}</h2>
                            <p>Rp {anyproduct.harga}</p>
                            <div><InputForm type="number" defaultValue={anyproduct.quantity} name={anyproduct.chartID} onChange={props.setQuantity}/></div>
                        </div>
                    </div>
                    <div className={`flex flex-row justify-center`}>
                        {/* <Button width={32} mx={2} label={`add to chart`} onClick={()=> handleAddToChart(anyproduct)}/>
                        <Modal width={32} mx={2} bodyMessage={`Yakin ingin menghapus ${anyproduct.nama}?`} yes={()=>props.delete(anyproduct)}/> */}
                    </div>
                </div>
             )
          } )}
        </div>
    )
}


const TotalCost = (props) =>{
    const chart = props.chart
    const totalItem = chart.reduce((prev,cur)=>{return prev + (cur.quantity*1)},0)
    const totalHarga = chart.reduce((prev,cur)=>{return prev + (cur.quantity*cur.harga)},0)
    
  
    return(
        <div className={`flex flex-row`}>
            
            <div className={``}>
                <h2>Total Pembayaran: {totalHarga}</h2>
                <h2>Banyknya Item: {totalItem}</h2>
            </div>
            <div className={``}>
                <Button label="Confirm"/>
            </div>
            <Gap height={100}/>
        </div>
    )
}
export default Cart
