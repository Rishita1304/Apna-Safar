import { faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const Apartment = () => {



    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726149998/apt1_l4gmys.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150022/apt2_cr70cu.jpg",
        width: 800,
        height: 600
      },
      {
        src: ".https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150000/apt3_wax8pw.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726149998/apt4_vuk7aj.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150002/apt5_gc4zlg.jpg",
        width: 800,
        height: 600
      },
      {
        src: ".https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150000/apt6_cq02zb.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150003/apt7_lcgi1v.jpg",
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
                  <h2 className='hotelTitle'><FontAwesomeIcon icon={faHome} /> Apartment</h2><hr />

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

export default Apartment