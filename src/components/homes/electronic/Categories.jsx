// import { categories5 } from "@/data/collections";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";

import { fetchCategory } from "@/redux/action/category/categoryAction"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Alert, Spinner } from "react-bootstrap";

import { selectCategories, selectCategoryLoading, selectCategoryError } from '@/redux/action/category/categorySelectors'; 

export default function Categories() {
  const dispatch = useDispatch();
  // const { categories, loading, error } = useSelector((state) => state.category) || { categories: [], loading: false, error: null };
    const categories = useSelector(selectCategories);
    const loading = useSelector(selectCategoryLoading);
    const error = useSelector(selectCategoryError);
  

  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])






  return (
    <section className="flat-spacing-4">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Popular Categories</h3>
        </div>
        <div
          className="flat-collection-circle wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Swiper
            dir="ltr"
            className="swiper tf-sw-categories"
            slidesPerView={7} // Equivalent to data-preview
            breakpoints={{
              1200: { slidesPerView: 7 }, // Desktop view
              992: { slidesPerView: 4 }, // Tablet view
              576: { slidesPerView: 3 }, // Small tablet view
              0: { slidesPerView: 2 }, // Mobile view
            }}
            spaceBetween={15} // Equivalent to data-space
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: ".spd22",
            }}
            navigation={{
              prevEl: ".snbp8",
              nextEl: ".snbn8",
            }}
          >
            {
              loading ? (
                <div className="container d-flex justify-content-center">
                  <div className="loader"><Spinner animation="border" size="sm" />&nbsp;&nbsp;Loading Categories...</div>
                </div>
              ) : error ? (
                <div className="error"><Alert variant="danger" className="login-alert">
                  {error}
                </Alert></div>
              ) : (
                <>
                  {Array.isArray(categories) && categories?.map((category, index) => (
                    <SwiperSlide key={index}>
                      <div className="collection-circle hover-img">
                        <Link to={`/shop-categories-top`} className="img-style">
                          {/* <Link to={`/shop-categories-top`} > */}
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
                </>
              )
            }
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
