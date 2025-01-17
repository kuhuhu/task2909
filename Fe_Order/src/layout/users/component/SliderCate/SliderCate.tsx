import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination'; // Import pagination styles
import 'tailwindcss/tailwind.css';
import axios from 'axios';

const SliderCate: React.FC = () => {
    const [cates, setCates] = useState([])

    useEffect(() => {
        (async () => {
            const url = 'http://127.0.0.1:8000/api/client/category/';
            try {
                const res = await axios.get(url, {
                    headers: {
                        'Api_key': 'uikpRisBWpz3JSRVAEPixzBOhCGf7UXdSMNaRFwdTmU4ZQNLGkUYPwfLejdb',
                    },
                });
                console.log(res.data.data);
                setCates(res.data.data)
                // return data.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        })()
    }, [setCates]);
    return (
        <div className="sliderCate bg-bgColor1 w-full relative w-full p-12">
            <Swiper
                modules={[Autoplay, Pagination]} // Autoplay and Pagination modules
                loop={true} // Enable infinite loop
                pagination={{ clickable: true, dynamicBullets: true }} // Clickable pagination dots with dynamic size
                autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay with 3 seconds delay
                className="h-full max-w-[1140px] mx-auto px-[16px] lg:px-[20px]"
                spaceBetween={20} // Space between slides
                slidesPerView={4}
            >
                {/* Slide 1 */}
                {cates.map((cate, index) => (
                    <SwiperSlide key={cate.id || index} className="flex justify-center items-center">
                        <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                            <div className="cate-item-img">
                                <img src={cate?.image} className="cate-item__img w-full min-w-[180px] h-[200px] object-contain" />
                            </div>
                            <div className="cate-item-content text-center">
                                <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                                <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>{cate?.name}</h3>
                                <span className="cate-item-quantity text-mainColor1 text-md block mt-2">10 Product</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* 
                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center items-center">
                    <div className="cate-item-wrapper bg-white hover:bg-mainColor3 px-6 py-12 rounded-md cursor-pointer group">
                        <div className="cate-item-img">
                            <img src='https://modinatheme.com/html/foodking-html/assets/img/food/pizza-3.png' className="cate-item__img w-full h-[200px] object-contain"></img>
                        </div>
                        <div className="cate-item-content text-center">
                            <span className='block w-[30%] h-1 bg-mainColor1 mx-auto my-6'></span>
                            <h3 className='cate-item__title text-center text-textColor1 text-3xl group-hover:text-white'>Pizza</h3>
                            <span className="cate-item-quantity text-mainColor1 text-md block mt-2"> 10 Product</span>
                        </div>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
};

export default SliderCate;