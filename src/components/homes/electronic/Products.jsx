import ProductCard3 from "@/components/productCards/ProductCard3";
import { products29 } from "@/data/products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useContextElement } from "@/context/Context";
import { fetchProducts } from "@/redux/action/product/productAction";
import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";

export default function Products() {
  const dispatch = useDispatch();
  const { products, loading, error, categories } = useContextElement();

  const tabItems = ["All Products", ...(categories ? categories.map((cat) => cat.title) : [])];

  const [activeItem, setActiveItem] = useState("All Products");
  const [selectedItems, setSelectedItems] = useState([]);

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

  useEffect(() => {
    // When activeItem or products change, filter products accordingly
    if (activeItem === "All Products") {
      setSelectedItems(products);
    } else {
      setSelectedItems(
        products.filter(
          (product) =>
            product.category &&
            product.category.title.toLowerCase() === activeItem.toLowerCase()
        )
      );
    }
  }, [activeItem, products]);

  useEffect(() => {
    dispatch(fetchProducts(1));
  }, [dispatch]);

  if (loading) {
    return (
      <section className="flat-spacing-4 pt-0">
        <div className="container">
          <div className="heading-section-2">
          <h4>Deal of the day</h4>
            {/* <div className="skeleton-heading shimmer"></div> */}
            <ul className="tab-product-v3 justify-content-sm-center mw-100p-scroll overflow-hidden">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="nav-tab-item">
                  <div className="skeleton-tab shimmer"></div>
                </li>
              ))}
            </ul>
          </div>
          <Swiper
            dir="ltr"
            className="swiper tf-sw-latest"
            breakpoints={{
              1200: { slidesPerView: 5 },
              768: { slidesPerView: 4 },
              480: { slidesPerView: 3 },
              0: { slidesPerView: 2 },
            }}
            spaceBetween={15}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonLoader />
              </SwiperSlide>
            ))}
          </Swiper>
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
    <>
    <section className="flat-spacing-4 pt-0">
      <div className="container">
        <div className="heading-section-2 wow fadeInUp">
          <h4>Deal of the day</h4>
          <ul
            className="tab-product-v3 justify-content-sm-center mw-100p-scroll"
            role="tablist"
          >
            {tabItems.map((item) => (
              <li key={item} className="nav-tab-item" role="presentation">
                <a
                  href={`#`} // Generate href dynamically
                  className={`text-caption-1 ${activeItem === item ? "active" : ""
                    }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setActiveItem(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flat-animate-tab">
          <div className="tab-content">
            <div
              className="tab-pane active show tabFilter filtered"
              id="AllProducts"
              role="tabpanel"
            >
              <Swiper
                dir="ltr"
                className="swiper tf-sw-latest"
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
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
                spaceBetween={15}
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  el: ".spd26",
                }}
              >
                {selectedItems.map((product, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <ProductCard3 product={product} />
                  </SwiperSlide>
                ))}

                <div className="sw-pagination-latest sw-dots type-circle justify-content-center spd26" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
