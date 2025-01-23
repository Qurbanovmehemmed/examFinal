import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router'
import { SlBasket } from "react-icons/sl";
import { useSelector } from 'react-redux';
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";


const Navbar = () => {
    const { basket } = useSelector((state) => state.basket);
    const totalAmount = basket.reduce((sum, product) => sum + product.count, 0);
    return (
        <div>
            <div className="navStart">
                <div className="container d-flex justify-content-between flex-wrap">
                    <div className="phone d-flex align-items-center gap-2">
                      <FaPhoneAlt/>  + 1235 2355 98</div>
                    <div className="email d-flex align-items-center gap-2">
                       <FaPaperPlane/> YOUREMAIL@EMAIL.COM</div>
                    <div className="bussines">
                        3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</div>
                </div>
            </div>
            <div className="container d-flex justify-content-between p-4 flex-wrap">
                <div className="logo"><h2>VEGEFOODS</h2></div>
                <div className="list d-flex gap-4 flex-wrap">
                <Link to={"/admin"}>AdminPanel</Link>
                    <Link to="/">HOME</Link>
                    <Link to={"/shop"}>SHOP</Link>
                    <Link to={"/about"}>ABOUT</Link>
                    <Link to={"/blog"}>BlOG</Link>
                    <Link to={"/contact"}>CONTACT</Link>
                    <Link to={"/basket"}>

                        <SlBasket />
                        <sup>{totalAmount}</sup>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
