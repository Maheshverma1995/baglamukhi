import React from 'react'

const Gallery = () => {
  return (
    <div>
      <div className='container mb-5 bg-body '>
      
      <h1 className='text-center fs-1'>
      <span className='pb-2' style={{borderBottom:'2px solid red'}}>गैलरी</span>
          </h1>
            
        <div className='row mt-5'>
            
            <div className='col mt-2 mb-3'>
            <img className='img-fluid' src="./Image/6.jpg" alt="" />
            </div>
            
        </div>
        <div className='row mt-2'>
          <div className='col-lg-4'>
            <img className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          <div className='col-lg-4'>
            <img className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          <div className='col-lg-4'>
            <img className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          
        </div>
        <div className='row mt-4 mb-5'>
        <div className='col-xs-12 text-center'>
        <button type="button" class="btn btn-danger">गैलरी</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
