import React from 'react';

const Slider = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='d-flex'>
              <img src={require("../../src/Image/1.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
              <img src={require("../../src/Image/2.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className='d-flex'>
              <img src={require("../../src/Image/3.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
              <img src={require("../../src/Image/4.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className='d-flex'>
              <img src={require("../../src/Image/5.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
              <img src={require("../../src/Image/6.jpg").default} className="d-block img-fluid w-50 h-25" alt="..." />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider;
