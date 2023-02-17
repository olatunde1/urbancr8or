import React from 'react'
import Rccg from './images/rccg.png'
import Buono from './images/buono.png'
import Ace from './images/ace.png'
import Daylight from './images/daylight.png'
import Fmh from './images/fmh.png';


const client = () => {
  return (
    <div className='moveWrap' >
      <div className='ourBestClient'>
        <h1>Our Best Client </h1>
      </div>
      
      <marquee behavior="" direction="" >
            <div className="move">
              <img src={Rccg} alt="Rccg" srcset="" />
              <img src={Daylight} alt="" srcset="" />
              <img src={Buono} alt="" srcset="" />
              <img src={Fmh} alt="" srcset="" />
              <img src={Ace} alt="" srcset="" />
            </div>   
        </marquee>  

    </div>
  )
}

export default client