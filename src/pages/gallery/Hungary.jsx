import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Hungary = () => {



    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150045/hu1_sf7qcj.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150035/hu3_v00gyt.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150046/hu6_jr3eiw.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150037/hu5_wvxzgl.jpg",
        width: 800,
        height: 600
      },

      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150036/hu4_u1onoc.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150034/hu2_wpyjzc.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150041/hu7_faltjk.jpg",
        width: 800,
        height: 600
      }
    ];

  return (
    <>
      <Header type="smallHeader" />
          <div className="hotelContainer">
          <div className="hotelRow">
                <div className="hotelCol">
                  {/* <h2 className='hotelTitle'>Relax casa Victoria</h2> */}
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faLocation} /> Hungary</h2><hr />

                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos}  imgProps={{ loading: "lazy" }} />
            </div>
            
          </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Hungary