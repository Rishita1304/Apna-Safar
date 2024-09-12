import React from 'react'
import { Link } from 'react-router-dom'
import './city.css'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../Request'
import { TailSpin } from 'react-loader-spinner'

const City = () => {
    const {data, loading, error} = useFetch(`${BASE_URL}hotels/bycitycount?cities=romania,hungary,iran,london`)
    // console.log(data);
  return (
    <div id='city' className='cities'>
        <h2 className="cityTitle">Explore!</h2>
        <p className='cityDesc'>These popular destinations have a lot to offer!</p>
        <div className="cityImages">
            { loading? <TailSpin
  visible={true}
  height="40"
  width="40"
  color="rgb(3, 91, 131)"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  /> :(
                <>
                    <div className="cityImage">
                        <Link to='/romania' >
                            <div className="cityImg">
                                <img loading="lazy" src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151215/roo_kjpfc7.jpg" alt="Romania" />
                            </div>
                            <h4 className='cityImgTitle'>Romania</h4>
                            <span className='cityImgProperties'>{data[0]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/hungary'>
                            <div className="cityImg">
                                <img loading="lazy" src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150029/hu_ypmm6a.jpg" alt="Hungary" />
                            </div>
                            <h4 className='cityImgTitle'>Hungary</h4>
                            <span className='cityImgProperties'>{data[1]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/iran'>
                            <div className="cityImg">
                                <img loading="lazy" src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150040/ir_yakrly.jpg" alt="Iran" />
                            </div>
                            <h4 className='cityImgTitle'>Iran</h4>
                            <span className='cityImgProperties'>{data[2]} properties</span>
                        </Link>
                    </div>
                    <div className="cityImage">
                        <Link to='/london'>
                            <div className="cityImg">
                                <img loading="lazy" src="https://res.cloudinary.com/dysxdrm1l/image/upload/v1726150066/lo_fdorlf.jpg" alt="London" />
                            </div>
                            <h4 className='cityImgTitle'>London</h4>
                            <span className='cityImgProperties'>{data[3]} properties</span>
                        </Link>
                    </div>
                </>)}
        </div>
    </div>
  )
}

export default City
