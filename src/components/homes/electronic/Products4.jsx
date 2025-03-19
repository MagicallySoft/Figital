import ProductCard4 from "@/components/productCards/ProductCard4";
import { products30 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import { useEffect, useState } from "react";
import { useContextElement } from "@/context/Context";
import { Alert, Spinner } from "react-bootstrap";
export default function Products4() {

  const { products, loading, error, } = useContextElement();

    // Function to shuffle the array
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
      }
      return shuffled;
    };
  
    // Get a shuffled array and select the first 6 products
    const randomProducts = shuffleArray(products).slice(0, 6);

  const [skeletonCount, setSkeletonCount] = useState(2);
  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setSkeletonCount(4);
      } else if (width >= 768) {
        setSkeletonCount(4);
      } else if (width >= 480) {
        setSkeletonCount(3);
      } else {
        setSkeletonCount(2);
      }
    };
    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  if (loading || !products) {
    return (
      <section className="flat-spacing-4 pt-0">
        <div className="container">
          <div className="grid-loader-wrapper d-flex justify-content-between">
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    <div className="error">
      <Alert variant="danger" className="login-alert">
        {error}
      </Alert>
    </div>
  }

  return (
    <section className="flat-spacing-4 pt-0">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <h4>Most-viewed Products</h4>
          <Link to={`/shop-default-grid`} className="line-under">
            See All Products
          </Link>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-sw-recent"
          spaceBetween={30}
          breakpoints={{
            1200: {
              slidesPerView: 6,
            },
            768: {
              slidesPerView: 4,
            },
            480: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd28",
          }}
        >
          {randomProducts.map((product, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <ProductCard4 product={product} />
            </SwiperSlide>
          ))}

          <div className="sw-pagination-recent sw-dots type-circle justify-content-center spd28" />
        </Swiper>
      </div>
    </section>
  );
}
