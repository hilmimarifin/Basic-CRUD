import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from '../../components'

const Home = () => {

    const products = useSelector(state => state.ProductsData)
    return (
        <div>
            <Navbar border={`border-b`} children={
                <div className={`flex items-center`}>
                    <h1 className={`font-bold text-xl`}>Statistic</h1>
                </div>
            }/>
            <StatisticList products={products} />
        </div>
    )
}

const StatisticList = (props) =>{
    const products= props.products
    return (
        <div>
            <TotalItems products={products}/>
            {/* <TotalNetworth/>
            <TotalTransaction/>
            <Profit/> */}
        </div>
     )
}

const TotalItems = (props) =>{
    const products = props.products
    const networth = products.reduce((prev,cur)=>{return prev + (cur.stok*cur.harga)},0)
    const totalItems = products.reduce((prev,cur)=>{return prev + (cur.stok*1)},0)
    return(
        <div>
            <div>Stok di toko</div>
            <div>Rp {networth}</div>
            <div>{totalItems} potong</div>

        </div>
    )
}

export default Home
