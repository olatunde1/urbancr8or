import React from 'react'
import pic1 from './images/2.jpg'
import pic2 from './images/3.jpg'
import pic3 from './images/5.jpg'
import pic4 from './images/7.png'
import pic5 from './images/slid3.jpg'
import pic6 from './images/slide3.jpg'

const Gallery = () => {
  return (
    <div>
        <div id='gallery' class="galleryMain">
            {/* <div class="pics"><img src={pic1} alt="galleryImages" /></div> */}
            <div class="pics">
                {/* <div className="overlayText">
                    <h1>Bandana Villa</h1>
                </div> */}
                <div class="css-1gzxeik">
                    <img src={pic1} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic2} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic3} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic4} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic5} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic6} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic3} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic2} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                <div class="css-1gzxeik">
                    <img src={pic5} alt="galleryImages" class=""  />
                </div>
            </div>
            <div class="pics">
                {/* <div className="overlayText">
                    <h1>Bandana Villa</h1>
                </div> */}
                <div class="css-1gzxeik">
                    <img src={pic1} alt="galleryImages" class=""  />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Gallery