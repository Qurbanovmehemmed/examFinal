import React from 'react'
import OurProducts from '../../components/OurProducts/OurProducts'
import Hero from '../../components/Hero/Hero'
import Shipping from '../../components/shipping/Shipping'
import Customers from '../../components/customers/Customers'
import Subsucribe from '../../components/subsucribe/Subsucribe'

const Home = () => {
    return (
        <div>
            <Hero />
            <Shipping/>
            <OurProducts />
            <Customers/>
            <Subsucribe/>
        </div>
    )
}

export default Home
