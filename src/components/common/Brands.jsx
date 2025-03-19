import { brands } from "@/data/brands";
import { fetchBrands } from "@/redux/action/brand/brandAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSkeleton from "../SkeletonLoader/BrandSkeleton";

export default function Brands({ parentClass = "flat-spacing-5 line-top" }) {
  const dispatch = useDispatch()
  const { brands, loading, error } = useSelector((state) => state.brand);
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";
  useEffect(() => {
    dispatch(fetchBrands())
  }, [dispatch])
  // console.log(brands);

  if (loading || !brands) {
    return (
      <section className={parentClass}>
        <Swiper
          dir="ltr"
          className="swiper tf-sw-partner sw-auto"
          spaceBetween={50}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: "auto", spaceBetween: 74 },
            768: { slidesPerView: "auto", spaceBetween: 50 },
            0: { slidesPerView: 2, spaceBetween: 50 },
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SwiperSlide key={i}>
              <BrandSkeleton />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  return (
    <section className={parentClass}>
      <Swiper
        dir="ltr"
        className="swiper tf-sw-partner sw-auto"
        spaceBetween={50} // Equivalent to data-space={50}
        loop={true} // Equivalent to data-loop="true"
        autoplay={{ delay: 0 }} // Equivalent to data-auto-play="true" with a delay of 0
        breakpoints={{
          1024: {
            slidesPerView: "auto", // Equivalent to data-preview="auto"
            spaceBetween: 74, // Equivalent to data-space-lg={74}
          },
          768: {
            slidesPerView: "auto", // Equivalent to data-tablet="auto"
            spaceBetween: 50, // Equivalent to data-space-md={50}
          },
          0: {
            slidesPerView: 2, // Equivalent to data-mobile={2}
            spaceBetween: 50, // Equivalent to data-space={50}
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <a href="#" className="brand-item">
              <img
                data-src={`${BASE_URL}${brand.banner_img}`}
                src={`${BASE_URL}${brand.banner_img}`}
                alt={brand.title}
                width={135}
                height={30}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
