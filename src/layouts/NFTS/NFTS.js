import React from "react";
import styles from "./NFTS.module.css";
import collectionImg1 from "assets/images/collectionImg1.png";
import collectionImg2 from "assets/images/collectionImg2.png";
import collectionImg3 from "assets/images/collectionImg3.png";
import collectionImg4 from "assets/images/collectionImg4.png";
import collectionImg5 from "assets/images/collectionImg5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";
import CollectionCard from "components/Cards/CollectionCard/CollectionCard";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";
SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

function NFTS() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div>
      <Fade direction="up" triggerOnce={true} cascade={true}>
        <div className="container-wrapper">
          <h1
            className={` white weight-7 text-center ${
              isBellow1000px ? "mb-40px fs-24px lh-1_4" : "mb-80px fs-40px"
            }  uppercase`}
          >
            <span className="pink">8420</span> smoking{" "}
            {isBellow1000px ? <br /> : ""} kongs nft
          </h1>
        </div>

        {/* SLIDER */}
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          effect={"coverflow"}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
          }}
          breakpoints={{
            760: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
            200: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <CollectionCard img={collectionImg1} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard img={collectionImg2} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard img={collectionImg3} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard img={collectionImg4} />
          </SwiperSlide>
          <SwiperSlide>
            <CollectionCard img={collectionImg5} />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
}

export default NFTS;
