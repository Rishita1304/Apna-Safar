import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './top.css'
import { Link } from 'react-router-dom';

const Tops = () => {

  

  return (
    <>
      <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} transitionTime={3000} interval={3000} showArrows={false} showIndicators={false}>
        <div id='tops' className="cImage">
          <Link to="/">
            <img src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150911/angkor_wat_xogqe6.jpg" alt="Angokar Wat" />
            <div className="cImgDesc">
              <h2 className='cImgTitle'>Angokar Wat</h2>
              <span className="cImgP">12 properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150002/boro_boro_xttysl.jpg" alt="Boro Boro" />
            <div className="cImgDesc">
              <h2 className='cImgTitle'>Boro Boro</h2>
              <span className="cImgP">21 properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150067/niagara_falls_j5mdl0.jpg" alt="Niagara Falls" />
            <div className="cImgDesc">
              <h2 className='cImgTitle'>Niagara Falls</h2>
              <span className="cImgP">5 properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150917/taj_mahal_meze8d.jpg" alt="Taj Mahal" />
            <div className="cImgDesc">
              <h2 className='cImgTitle'>Taj Mahal</h2>
              <span className="cImgP">3 properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150074/petra_bl3fhs.jpg" alt="Petra" />
            <div className="cImgDesc">
              <h2 className='cImgTitle'>Petra </h2>
              <span className="cImgP">9 properties</span>
            </div>
          </Link>
        </div>
      </Carousel>
    </>
  )
}

export default Tops
