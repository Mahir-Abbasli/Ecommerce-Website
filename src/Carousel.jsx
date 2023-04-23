import React from 'react'
import './Carousel.css'
import img2 from './image/samsung_400.png'
import img4 from './image/Made in Samsung.png' 
import img5 from './image/Birkart.jpg'
import img6 from './image/Tamkart.jpg'
import img7 from './image/Samsung-tv.jpg'
import img3 from './image/ivi_3ayliq.png'
import img12 from './image/Galaxy-S23-Series.jpg'
import img13 from './image/iPhone-14-banner-aze.png'
import img14 from './image/Watch-8-banner-aze.png'
import img15 from './image/Artboard-1-.jpg'

const Carousel = () => {
  return (
    <div>
      <div className="bc_div">
    <div id="myCarousel2" className="carousel slide"
        data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel2"
            data-slide-to="0"></li>
            <li data-target="#myCarousel2"
            data-slide-to="1"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="2"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="3"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="4"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="5"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="6"></li> 
            <li data-target="#myCarousel2"
            data-slide-to="7"></li> 
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active" data-interval="3000">
                <div className="overlay-image image1" >
                    <img src={img12} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img13}/>
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img14} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img15} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img7} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img3} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img2} />
                </div>
            </div>
            <div className="carousel-item" data-interval="99999">
                <div className="overlay-image image1" >
                    <img src={img4} />
                </div>
            </div>
        </div>
        <a href="#myCarousel2" className='previousbtn' role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
            <span
            aria-hidden="true" className=" button_16"><svg xmlns="http://www.w3.org/3000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg></span>
        </a>
        <a href="#myCarousel2" className='nextbtn' role="button" data-slide="next">
            <span className="sr-only">Previous</span>
            <span className="button_16"
             aria-hidden="true"><svg xmlns="http://www.w3.org/3000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right " viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg></span>
        </a>
    </div>
</div>
    <div className='KrKartlar'>
        <img src={img5}/>
        <img src={img6}/>
    </div>
    </div>
    
  )
}

export default Carousel
