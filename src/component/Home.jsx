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
        <Slider/>
      <Description></Description>
      <DescriptionCard/>
      <BagalaMukhiPooja></BagalaMukhiPooja>
      <Gallery></Gallery>
      <VideoGallery/>
      <News/>
        </div>
      </div>
      
    </div>
  )
}

export default Home
