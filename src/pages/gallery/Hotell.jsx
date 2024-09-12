import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Hotell = () => {



    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150022/hot1_xysf0t.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150029/hot2_jrerva.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150025/hot3_vryq4y.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150029/hot4_yoyc7v.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150028/hot5_yguled.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150030/hot6_afgd1e.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150031/hot7_is2gqq.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faHome} /> Hotels</h2><hr />

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

export default Hotell