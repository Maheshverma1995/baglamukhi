import React from 'react'

const VideoGallery = () => {
  return (
    <div>
      <div className='container mt-5 mb-5'>
      <h1 className='text-center fs-1'>
            सक्षिप्त विवरण
            </h1>
        <div className='row mt-5'>
                      
            <video controls muted  className='img-fluid' src="./Image/6.jpg" alt="" />
            
            
        </div>
        <div className='row mt-2 text-center'>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          <div className='col-lg-4'>
            <video controls muted  className='img-fluid' src="./Image/4.jpg" alt="" />
          </div>
          
        </div>
        <div className='row mt-4 mb-5'>
        <div className='col-xs-12 text-center'>
        <button type="button" class="btn btn-danger">Danger</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VideoGallery
