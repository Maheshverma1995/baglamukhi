import React from 'react'
import { Link } from 'react-router-dom'

const VideoGallery = () => {
  return (
    <div>
      <div className='container-fluid mb-5'>
      <h1 className='text-center fs-1'>
      <span className='pb-2' style={{borderBottom:'2px solid red'}}>वीडियो</span>
          </h1>
        <div className='row mt-5'>
                      
            <video controls muted className='img-fluid' src="./Image/__शारदीय नवरात्रि महोत्सव__श्री बगलामुखी सिद्ध,शंकराचार्य मठ__ब्रह्मचारी श्री चैतन्यानंद जी महाराज__.mp4" alt="" />
            
            
        </div>
        {/* <div className='row mt-2 text-center'>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="https://www.youtube.com/watch?v=MTkRipYZz_Q" alt="" />
          </div>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="https://www.youtube.com/watch?v=50uXqCL4Tt4" alt="" />
          </div>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="https://www.youtube.com/watch?v=3Xf3lGP6JlE" alt="" />
          </div>
          
        </div> */}
        <div className='row mt-4 mb-5'>
        <div className='col-xs-12 text-center'>
        <Link to="https://www.youtube.com/@chaitanyanandji"><button type="button" class="btn btn-danger">वीडियो</button></Link>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VideoGallery
