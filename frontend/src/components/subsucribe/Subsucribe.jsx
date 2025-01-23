import React from 'react'
import "./Subsucribe.scss"
import { FaChevronUp } from "react-icons/fa";
const Subsucribe = () => {
    return (
        <div className='subStart mt-5'>
            <div className="container d-flex flex-wrap">
                <div className="col-md-6 ">
                    <h3 >Subcribe to our Newsletter</h3>
                    <span>Get e-mail updates about our latest shops and special offers</span>
                </div>
                <div className="col-md-6">
                    <div className="inputArea">
                        <input type="email" placeholder='Enter email adress'/>
                        <button >Subscribe</button>
                    </div>
                </div>
            </div>
<div className='subIcon'>
    <FaChevronUp/>
</div>

        </div>
    )
}

export default Subsucribe
