import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Shop() {
  return (
    <div className="shopmain">
      <div className="shopmain-container">
        <div className="home-container">
          <Swiper
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Autoplay,
            ]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000, // autoplay delay in milliseconds
              disableOnInteraction: false, // enable autoplay even when user interacts with the slider
            }}
           
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="home">
                <div className="home-intro">
                  <h1>Best Perfume</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore cupiditate exercitationem consectetur dignissimos
                    nemo eius? maiores autem voluptatum repudiandae rerum
                    delectus?
                  </p>
                  <button>Shop Now</button>
                </div>
                <div className="Img-con">
                  <img src="https://odour-demo.myshopify.com/cdn/shop/files/01_slider_image.png?v=1614298669" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home">
                <div className="home-intro">
                  <h1>Best Perfume</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore cupiditate exercitationem consectetur dignissimos
                    nemo eius? maiores autem voluptatum repudiandae rerum
                    delectus?
                  </p>
                  <button>Shop Now</button>
                </div>
                <div className="Img-con">
                  <img src="https://odour-demo.myshopify.com/cdn/shop/files/03_slider-image.png?v=1614298669" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home">
                <div className="home-intro">
                  <h1>Best Perfume</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore cupiditate exercitationem consectetur dignissimos
                    nemo eius? maiores autem voluptatum repudiandae rerum
                    delectus?
                  </p>
                  <button>Shop Now</button>
                </div>
                <div className="Img-con">
                  <img src="https://odour-demo.myshopify.com/cdn/shop/files/02_slider_iamge.png?v=1614298669" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="shop-container">
          <div className="shop">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
