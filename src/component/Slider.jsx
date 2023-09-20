import React from 'react';

const Slider = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./Image/1.jpg" class="d-block w-100" style={{ height: '400px' }} alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./Image/2.png" class="d-block img-fluid w-100" style={{ height: '400px' }} alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./Image/4.jpg" class="d-block w-100" style={{ height: '400px' }} alt="..." />
              </div>
            </div>
          </div>
        </div>
      
    </div>

  );
}

export default Slider;
