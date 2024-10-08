import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import PhotoAlbum from "react-photo-album";
import { TailSpin } from 'react-loader-spinner'
import './hotel.css'
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from '../../components/reserve/Reserve';
import { BASE_URL } from '../../Request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hotel = () => {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];

  const {data, loading} = useFetch(`${BASE_URL}hotels/find/${id}`);
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [open,setOpen] = useState(false)
    const [openModal,setOpenModal] = useState(false)

    const {date, options} = useContext(SearchContext);
    const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 *24;
    function dayDifference(date1, date2) {
      const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
      const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
      return differentDays;
    }
    const days = (dayDifference(date[0].endDate, date[0].startDate));

    const handleClick = () => {
      if(user){
        setOpenModal(true);
      }else{
        toast.error('Login to Book a hotel');
        // navigate('/login');
      }
    }

    const photos = [
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726168984/7.1_m3xpyk.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151607/1.1_cxeowh.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151608/1.2_khnt4h.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151608/1.3_wca4le.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151609/1.4_uzdogr.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151610/1.5_skcwgy.jpg",
        width: 800,
        height: 600
      },
      {
        src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151613/1.6_xdnqr5.jpg",
        width: 800,
        height: 600
      }
    ];

  return (
    <>
      <Header type="smallHeader" />
      {
        loading ? (<div className="cityDesc2">
          <TailSpin
          visible={true}
          height="40"
          width="40"
          color="rgb(3, 91, 131)"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          />
          </div>) : (
          <div className="hotelContainer">
            <div className="hotelRow">
                <div className="hotelCol">
                  <h2 className='hotelTitle'>{data.name}</h2>
                  <span><FontAwesomeIcon icon={faMapLocation} /> {data.address}</span><br /><br />
                  <span className="hotelDistance">
              Excellent location – 500m from center
            </span>
                  <h3><strong>For {options.room} rooms, Price: ${days * data.price * options.room} for {days} days!</strong></h3>
                </div>
                <div className="hotelCol">
                  <button className="hotelBtn" onClick={handleClick}>Book Now</button>
                </div>
            </div>
            <div className="hotelRow">
              <PhotoAlbum layout="rows" photos={photos} />
            </div>
            <div className="hotelRow">
              <h3 className='hotelSubTitle'>Description</h3>
              <p className="hotelDesc">{data.desc}
              </p>
            </div>
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}  
          </div>
        )
      }
      <Subscribe />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Hotel
