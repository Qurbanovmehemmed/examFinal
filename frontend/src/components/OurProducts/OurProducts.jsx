import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/productSlice'
import Cards from '../cards/Cards'

const OurProducts = () => {
    const dispatch =useDispatch()
    const {products} =useSelector((state)=>state.products)
    console.log(products);
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  return (
    <div>
        <div className="text-center d-flex flex-column gap-2 mt-5">
            <p style={{color:"#82ae46"}}>Featured Products</p>
            <h2>Our Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className="container d-flex justify-content-between flex-wrap">
                {products && products.length >0 ? (
                    products.map((product)=>(
                        <Cards product={product} key={product._id}/>
                    ))
                ):("product not found")
                    
                }
            </div>

        </div>
      
    </div>
  )
}

export default OurProducts
