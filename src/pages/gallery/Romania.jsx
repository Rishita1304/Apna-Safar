import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Romania = () => {



    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143560/ro1_csysyw.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143557/ro2_u75v5v.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143572/ro3_exbq60.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143550/ro4_nbdxqm.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143553/ro5_m92ldo.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143552/ro6_ycnp3t.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726143560/ro7_dkqykp.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faLocation} /> Romania</h2><hr />

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

export default Romania
