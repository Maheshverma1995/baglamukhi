import React from 'react'
import { FaPhoneAlt,FaEnvelope, } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <div className='container-fluid mt-2 mb-3 bg-body'>
      <div className='row d-flex justify-content-center  mt-4'>
        <img className='w-25' src="./Image/img4.png" alt="" />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img className='img-fluid' src="./Image/1.jpg" alt="" />
          </div>
          <div className='col-md-4 mt-2 '>
            <h1 className='fs-1 text-center mt-5'><span className='p-2' style={ {borderBottom:'4px solid red'}}>संपर्क सूत्र</span></h1>
            <div className='d-flex mt-4 p-1'>
              <i className='ps-5 pe-3'><FaLocationDot/></i>
              <p>बगलामुखी माता पीताम्बरा पीठ जबलपुर,मध्य प्रदेश</p>
            </div>
            <div className='d-flex '>
              <i className='ps-5 pe-3'><FaPhoneAlt/></i>
              <p>9425866655</p>
            </div>
            <div className='d-flex'>
              <i className='ps-5 pe-3'><FaEnvelope/></i>
              <p>maabagalamubki@gmail.com</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='col-'>
              <Iframe className='img-fluid' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0170883045876!2d79.93111037418706!3d23.16957641082843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afb941f902f7%3A0xcda392f10e0140aa!2sBaglamukhi%20temple!5e0!3m2!1sen!2sin!4v1694588837652!5m2!1sen!2sin"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            </div>
          <div class="mt-1">
          <a href="https://www.facebook.com">
          <img src="Image/facebook.png" alt=""/></a>
        </div>
        <div class="mt-1">
          <a href="https://www.youtube.com">
          <img src="Image/youtube.png" alt=""/></a>
        </div>
          </div>
        </div>
      </div>
      <div className='row bg'>
        
        <h3 className='p-4 text-center text-white'>Copyright © All rights reserved | Pitambara pith</h3>
        
      </div>
    </div>
  )
}

export default Footer
