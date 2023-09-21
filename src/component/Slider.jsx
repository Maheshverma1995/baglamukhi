import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <Marquee className='p-2 mt-2'>
          शारदीय नवरात्रि 2023 तिथि (Shardiya Navratri 2023 Start Date) हिंदू पंचांग के अनुसार, आश्विन शुक्ल पक्ष की प्रतिपदा तिथि 14 अक्टूबर रात्रि 11 बजकर 24 मिनट से शुरू होगी और 16 अक्टूबर मध्य रात्रि 12 बजकर 32 मिनट पर समाप्त हो जाएगी। ऐसे में शारदीय नवरात्रि पर्व का शुभारंभ 15 अक्टूबर 2023, रविवार के दिन होगा। नवरात्रि में मां बगलामुखी माता की अखंड ज्योति जलाने के लिए संपर्क करें 
मोबाइल नंबर :- <span className='fs-4 m-3'> 9425866655</span> ,
ईमेल आईडी:- <span className='fs-4 m-3'> maabagalamubki@gmail.com</span>
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
