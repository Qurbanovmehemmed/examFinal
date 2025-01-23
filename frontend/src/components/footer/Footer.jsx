import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

const Footer = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex flex-wrap">
          <div className="col-md-3">
            <h4>Vegefoods</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
            <div style={{
              fontSize:"20px",
              display:"flex",
              gap:"20px",
              marginTop:"30px"
            }}>
              <FaTwitter/>
              <FaFacebookF/>
              <FiInstagram/>  
            </div>
          </div>
          <div className="col-md-3">
            <h4>Menu</h4>
            <p>Shop</p>
            <p>About</p>
            <p>Journal</p>
            <p>Contact Us</p>
          </div>
          <div className="col-md-3">
            <h4>Help</h4>
            <div className='d-flex gap-3'><p>Shipping Information</p> <p>FAQs</p></div>
            <div className='d-flex gap-3'><p>Returns & Exchange</p> <p>Contact</p></div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-md-3">
            <h4>Have a Questions ?</h4>
            <div className='d-flex gap-3'>
              <HiLocationMarker/><p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className='d-flex gap-3'>
              <FaPhoneAlt/><p>+2 392 3929 210</p>
            </div>
            <div className='d-flex gap-3'>
              <HiLocationMarker/><p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
