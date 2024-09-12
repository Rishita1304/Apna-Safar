import React from 'react'
import { Link } from 'react-router-dom'
import './propertytype.css'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../Request'
import { TailSpin } from 'react-loader-spinner'

const PropertyType = () => {

    const {data, loading, error} = useFetch(`${BASE_URL}hotels/bytype`)
    console.log(data);

    const images =[
        "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150012/ho_ir0auj.jpg",
        "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150995/ap_m3gjtk.jpg",
        "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726149580/re_jvnjug.jpg",
        "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150002/ca_rosdix.jpg"
    ]
// console.log(data[0].type);
return (
    <div className="pList">
        {/* <p className="cityDesc1">Rent these properties at minimal prices!</p> */}
      {loading ? (
        <div className="cityDesc1">
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
        </div>
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                  loading="lazy"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyType
