import React from 'react'
import Gallery from 'react-grid-gallery';
import './gridimages.css'

const GridImages = () => {

  const IMAGES =
  [{
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151248/1_yiy7sn.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151248/1_yiy7sn.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Myrland, Nordland, Norway"
  },
  {
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/2_lrmqr9.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/2_lrmqr9.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Sodankylä, Finland"
  },

  {
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/3_n2ryqz.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/3_n2ryqz.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Iceland"
  }, 
  {
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/4_vaqmr2.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151250/4_vaqmr2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Algeria"
  },
  {
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151253/5_mqmtu3.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151253/5_mqmtu3.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Scotland, United Kingdom"
  },

  {
      src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151253/6_izb1ei.jpg",
      thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151253/6_izb1ei.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "Santa Cristina Valgardena, Trentino-Alto Adige, Italia"
  }, 

  {
    src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151252/7_g48com.jpg",
    thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151252/7_g48com.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Maldives"
  }, 

  {
    src: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151254/8_jcujdw.jpg",
    thumbnail: "https://res.cloudinary.com/dysxdrm1l/image/upload/v1726151254/8_jcujdw.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Braies, Trentino-Alto Adige, Italy"
  }, 
]

  return (
    <div id='grid' className='gridImages'>
        <h2 className='gridImagesTitle'>Get inspirations Here!</h2>
        <Gallery images={IMAGES} />
    </div>
  )
}

export default GridImages