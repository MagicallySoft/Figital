import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { fetchCategory } from "@/redux/action/category/categoryAction";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { useContextElement } from "@/context/Context";
import CategorySkeletonLoader from "@/components/SkeletonLoader/CategorySkeletonLoader";

export default function Categories() {
  const dispatch = useDispatch();
  const { Categoryloading, Categoryerror, categories } = useContextElement();
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  // We'll detect the window size and decide how many skeleton placeholders to render
  const [skeletonCount, setSkeletonCount] = useState(7); // default to your largest slidesPerView
  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setSkeletonCount(7);
      } else if (width >= 992) {
        setSkeletonCount(4);
      } else if (width >= 576) {
        setSkeletonCount(3);
      } else {
        setSkeletonCount(2);
      }
    };
    updateSkeletonCount(); // initialize on mount
    window.addEventListener("resize", updateSkeletonCount);
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <section className="flat-spacing-4">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Popular Categories</h3>
        </div>
        <div className="flat-collection-circle wow fadeInUp" data-wow-delay="0.1s">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-categories"
            slidesPerView={7}
            breakpoints={{
              1200: { slidesPerView: 7 },
              992: { slidesPerView: 4 },
              576: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={15}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true, el: ".spd22" }}
            navigation={{ prevEl: ".snbp8", nextEl: ".snbn8" }}
          >
            {/* 1) Loading State with Skeleton */}
            {Categoryloading && (
              Array.from({ length: skeletonCount }).map((_, i) => (
                <SwiperSlide key={i}>
                  <CategorySkeletonLoader />
                </SwiperSlide>
              ))
            )}
            

            {/* 2) Error State */}
            {Categoryerror && (
              <div className="error">
                <Alert variant="danger" className="login-alert">
                  {Categoryerror}
                </Alert>
              </div>
            )}

            {/* 3) Loaded Categories */}
            {!Categoryloading && !Categoryerror && Array.isArray(categories) && categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="collection-circle hover-img">
                  <Link to={`/shop-categories-top`} className="img-style">
                    <img
                      className="lazyload"
                      data-src={`${BASE_URL}${category.banner_img}`}
                      alt={category.title}
                      src={`${BASE_URL}${category.banner_img}`}
                      width={253}
                      height={252}
                    />
                  </Link>
                  <div className="collection-content text-center">
                    <div>
                      <Link to={`/shop-categories-top`} className="cls-title">
                        <h6 className="text">{category.title}</h6>
                        <i className="icon icon-arrowUpRight" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="d-flex d-lg-none sw-pagination-categories sw-dots type-circle justify-content-center spd22" />
          </Swiper>
          <div className="nav-prev-categories d-none d-lg-flex nav-sw style-line nav-sw-left snbp8">
            <i className="icon icon-arrLeft" />
          </div>
          <div className="nav-next-categories d-none d-lg-flex nav-sw style-line nav-sw-right snbn8">
            <i className="icon icon-arrRight" />
          </div>
        </div>
      </div>
    </section>
  );
}
