import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Cabin = () => {



    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150026/ca1_rwzqet.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150007/ca2_g2niuy.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150008/ca3_evmsa9.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150013/ca4_a7mgsl.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150011/ca5_risimj.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150021/ca6_yxc8pa.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150021/ca7_gzlyjq.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faHome} /> Cabins</h2><hr />

                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos} />
            </div>
            
          </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Cabin