import React from 'react'
import Slider from './Slider'
import Description from './Description'
import BagalaMukhiPooja from './BagalaMukhiPooja'
import Gallery from './Gallery'
import VideoGallery from './VideoGallery'
import News from './News'
import DescriptionCard from './DescriptionCard'

const Home = () => {
  return (
    <div className='bg-body'>
      <div className='container-fluid'>
        <div className='row'>
          <Slider />
          <div id="about" className="section">
          <Description></Description>
            <DescriptionCard />
          </div>
          <div id="puja" className="section">
            <BagalaMukhiPooja></BagalaMukhiPooja>
          </div>
          <div id="gallery" className="section">
            <Gallery></Gallery>
          </div>
          <div id="video" className="section">
            <VideoGallery />
          </div>
          <div id="news" className="section">
            <News />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
