import React from 'react'
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { GiStarMedal } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import "./Shipping.scss"
const Shipping = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between flex-wrap mt-5'>
                <div className="icons">
                    <div className='icon'  >
                        <FaTruckArrowRight />
                    </div>
                    <h6>FREE SHIPPING</h6>
                    <p>ON ORDER OVER $100</p>
                </div>
                <div className="icons">
                    <div className='iconA ' >
                        <IoFastFood />
                    </div>
                    <h6>ALWAYS FRESH</h6>
                    <p>PRODUCT WELL PACKAGE</p></div>
                <div className="icons  ">
                    <div className='iconB' >
                        <GiStarMedal />
                    </div>
                    <h6>SUPERIOR QUALITY</h6>
                    <p>QUALITY PRODUCTS</p>
                </div>
                <div className="icons">
                    <div className='iconC' >
                        <MdSupportAgent />
                    </div>
                    <h6>SUPPORT</h6>
                    <p>24/7 SUPPORT</p></div>
            </div>

        </div>
    )
}

export default Shipping
