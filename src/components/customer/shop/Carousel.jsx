import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

// Images
import fruitImg from '../../../assets/Shop/fruits.png';
import vegitableImg from '../../../assets/Shop/vegitables.png';
import fruitandvegiImg from '../../../assets/Shop/shopall.png';
import { Link } from 'react-router-dom';

const slides = [
  {
    img: fruitandvegiImg,
    discount: '60%',
    title: 'Fruits & Veggies Combo',
    subtitle: 'Shop all essentials in one basket – eat clean!',
    link: '/shop/all',
  },
  {
    img: fruitImg,
    discount: '70%',
    title: 'Fresh & Healthy Organic Food',
    subtitle: 'Free shipping on all your order. we deliver, you enjoy',
    link: '/shop/fruits',
  },
  {
    img: vegitableImg,
    discount: '50%',
    title: 'Green & Organic Vegetables',
    subtitle: 'Get fresh veggies at your doorstep daily!',
    link: '/shop/vegetables',
  },
];


const Carousel = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="relative bg-white py-10">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Autoplay]} 
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet mx-1 inline-block"></span>`;
          },
        }}
        className="mySwiper"
      >
{slides.map((slide, index) => (
  <SwiperSlide key={index}>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-8">
      <div className="relative">
        <img
          src={slide.img}
          alt="Slide Visual"
          className="w-full max-h-[400px] object-contain"
        />
        <div className="absolute top-4 left-4 bg-orange-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center font-bold text-sm shadow-md">
          <span>{slide.discount}</span>
          <span>OFF</span>
        </div>
      </div>
      <div>
        <p className="text-green-500 uppercase text-sm mb-2">Welcome to Shopery</p>
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">{slide.title}</h2>
        <p className="text-gray-500 mb-6">{slide.subtitle}</p>

        <Link
          to={slide.link}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-700 transition"
        >
          Shop now <span>&rarr;</span>
        </Link>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 
                   w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 
                   rounded-full hover:scale-110 transition duration-300 shadow-lg"
      >
        <TfiArrowCircleLeft size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 
                   w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 
                   rounded-full hover:scale-110 transition duration-300 shadow-lg"
      >
        <TfiArrowCircleRight size={28} />
      </button>
    </div>
  );
};

export default Carousel;
