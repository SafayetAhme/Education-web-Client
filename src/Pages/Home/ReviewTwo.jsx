import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const ReviewTwo = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div className="mb-10" >
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {
          reviews.map(review =>
            <SwiperSlide key={review._id} review={review}>
              <div style={{ backgroundImage: 'url(https://i.pinimg.com/564x/d8/9f/ba/d89fba93f4ea80056624ae892c33f424.jpg)' }}>
                <div className="py-32 text-center">
                  <h1 className="text-4xl font-bold text-white ">{review.name}</h1>
                  <p className="text-white text-xl">{review.details}</p>
                  <p className="text-white pt-2">{review.title}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
    // <div>So das</div>
  );
};

export default ReviewTwo;