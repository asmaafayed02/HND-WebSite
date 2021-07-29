import React from 'react'
import ReactPlayer from 'react-player';
import './slider.css'
const HomeSlider =()=> {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/4fJV7w2YDqw'
            width='100%'
            height='100%'
            alt="this is vidio"
            controls
          />
        </div>
      )
    }
  ;
export default HomeSlider;