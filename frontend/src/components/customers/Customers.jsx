import React from 'react'
import "./Customers.scss"
import { FaQuoteLeft } from "react-icons/fa";

const Customers = () => {
    return (
        <div className='container'>
            <div className="customersStart d-flex flex-column justify-content-center align-items-center mt-5">
                <p style={{
                    color: "#82ae46 "
                }}>Testimony</p>
                <h1>Our satisfied customer says</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
            <div className="customersCart d-flex flex-wrap justify-content-between mt-5">
                <div className='customCart col-md-4'>
                    <div className='customImg'>

                        <img src="https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg" alt="" />
                        <div className="customIcon">
                            <FaQuoteLeft/>
                        </div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     <p>Garreth Smith</p>
                     <span>Interface Designer</span>


                </div>
                <div className='customCart col-md-4'>
                    <div className='customImg'>

                        <img src="https://preview.colorlib.com/theme/vegefoods/images/person_2.jpg" alt="" />
                        <div className="customIcon">
                            <FaQuoteLeft/>
                        </div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     <p>Garreth Smith</p>
                     <span>Interface Designer</span>


                </div>
                <div className='customCart col-md-4'>
                    <div className='customImg'>

                        <img src="https://preview.colorlib.com/theme/vegefoods/images/person_3.jpg" alt="" />
                        <div className="customIcon">
                            <FaQuoteLeft/>
                        </div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     <p>Garreth Smith</p>
                     <span>Interface Designer</span>


                </div>
            </div>

        </div>
    )
}

export default Customers
