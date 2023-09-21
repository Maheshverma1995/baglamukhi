import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Marquee>
            
          </Marquee>
        </div>
      </div>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./Image/image.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Image/image (1).png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Image/image (2).png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="./Image/image (3).png" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
}

export default Slider;
