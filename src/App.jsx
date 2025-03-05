import "./styles/style.scss";
import { useEffect, useState } from "react";

import Context from "@/context/Context";
import CartModal from "@/components/modals/CartModal";
import QuickView from "@/components/modals/QuickView";
import QuickAdd from "@/components/modals/QuickAdd";
import Compare from "@/components/modals/Compare";
import MobileMenu from "@/components/modals/MobileMenu";
import NewsLetterModal from "@/components/modals/NewsLetterModal";
import SearchModal from "@/components/modals/SearchModal";
import SizeGuide from "@/components/modals/SizeGuide";
import Wishlist from "@/components/modals/Wishlist";
import DemoModal from "@/components/modals/DemoModal";
import Categories from "@/components/modals/Categories";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeElectronicPage from "./pages/homes";
import ShopDefaultGridPage from "./pages/products/shop-default-grid";
import ShopDefaultListPage from "./pages/products/shop-default-list";
import ShopFullwidthListPage from "./pages/products/shop-fullwidth-list";
import ShopFullwidthGridPage from "./pages/products/shop-fullwidth-grid";
import ShopLeftSidebarPage from "./pages/products/shop-left-sidebar";
import ShopRightSidebarPage from "./pages/products/shop-right-sidebar";
import ShopFilterDropdownPage from "./pages/products/shop-filter-dropdown";
import ShopFilterCanvasPage from "./pages/products/shop-filter-canvas";
import ShopCategoriesTopPage1 from "./pages/products/shop-categories-top";
import ShopCategoriesTopPag2 from "./pages/products/shop-categories-top-02";
import ShopCollectionPage from "./pages/products/shop-collection";
import ShopBreadcumbImgPage from "./pages/products/shop-breadcrumb-img";
import ShopBreadcumbLeftPage from "./pages/products/shop-breadcrumb-left";
import ShopBreadcumbBackgroundPage from "./pages/products/shop-breadcrumb-background";
import ShopLoadButtonPage from "./pages/products/shop-load-button";
import ShopPaginationPage from "./pages/products/shop-pagination";
import ShopInfinateScrollingPage from "./pages/products/shop-infinite-scrolling";
import ProductStylePage1 from "./pages/products/product-style-01";
import ProductStylePage2 from "./pages/products/product-style-02";
import ProductStylePage3 from "./pages/products/product-style-03";
import ProductStylePage4 from "./pages/products/product-style-04";
import ProductStylePage5 from "./pages/products/product-style-05";
import ProductStylePage6 from "./pages/products/product-style-06";
import ProductStylePage7 from "./pages/products/product-style-07";
import WishListPage from "./pages/other-pages/wish-list";
import SearchResultPage from "./pages/products/search-result";
import ShopingCartPage from "./pages/products/shopping-cart";
import LoginPage from "./pages/other-pages/login";
import ForgotPasswordPage from "./pages/other-pages/forget-password";
import OrderTrackingPage from "./pages/other-pages/order-tracking";
import MyAccountPage from "./pages/my-account/my-account";
import ProductDetailPage from "./pages/productDetails/product-detail";
import ProductGridPage1 from "./pages/productDetails/product-grid-1";
import ProductGridPage2 from "./pages/productDetails/product-grid-2";
import ProductStackedPage from "./pages/productDetails/product-stacked";
import ProductRighrThumbnailPage from "./pages/productDetails/product-right-thumbnails";
import ProductBottomThumbnailPage from "./pages/productDetails/product-bottom-thumbnails";
import ProductDescriptionAccordionPage from "./pages/productDetails/product-description-accordion";
import ProductDescriptionListPage from "./pages/productDetails/product-description-list";
import ProductDescriptionMenutabPage from "./pages/productDetails/product-description-menutab";
import ProductDescriptionFullwidthPage from "./pages/productDetails/product-description-fullwidth";
import ProductFixedProcePage from "./pages/productDetails/product-fixed-price";
import ProductFixedScrollPage from "./pages/productDetails/product-fixed-scroll";
import ProductSwatchColorPage from "./pages/productDetails/product-swatch-color";
import ProductSwatchRoundedPage from "./pages/productDetails/product-swatch-rounded";
import ProductSwatchRoundedColorPage from "./pages/productDetails/product-swatch-rounded-color";
import ProductSwatchImagePage from "./pages/productDetails/product-swatch-image";
import ProductSwatchRoundedImagePage from "./pages/productDetails/product-swatch-rounded-image";
import ProductSwatchDropdownPage from "./pages/productDetails/product-swatch-dropdown";
import ProductSwatchDropdownColorPage from "./pages/productDetails/product-swatch-dropdown-color";
import ProductFrequentlyBoughtTogetherPage1 from "./pages/productDetails/product-frequently-bought-together";
import ProductFrequentlyBoughtTogetherPage2 from "./pages/productDetails/product-frequently-bought-together-02";
import ProductUpSellPage from "./pages/productDetails/product-up-sell";
import ProductPreorderPage from "./pages/productDetails/product-pre-order";
import ProductGroupedPage from "./pages/productDetails/product-grouped";
import ProductCustomerNotePage from "./pages/productDetails/product-customer-note";
import ProductOutOfStockPage from "./pages/productDetails/product-out-of-stock";
import ProductPickupAvailablePage from "./pages/productDetails/product-pickup-available";
import ProductVariablePage from "./pages/productDetails/product-variable";
import ProductDealsPage from "./pages/productDetails/product-deals";
import ProductWithDiscountPage from "./pages/productDetails/product-with-discount";
import ProductExternalPage from "./pages/productDetails/product-external";
import ProductSubscribeSavePage from "./pages/productDetails/product-subscribe-save";
import BlogDefaultPage from "./pages/blogs/blog-default";
import BlogListPage from "./pages/blogs/blog-list";
import BlogGridPage from "./pages/blogs/blog-grid";
import BlogDetailsPage1 from "./pages/blogs/blog-detail";
import BlogDetailsPage2 from "./pages/blogs/blog-detail-02";
import AboutUsPage from "./pages/other-pages/about-us";
import StorelistPage from "./pages/other-pages/store-list";
import StorelistPage2 from "./pages/other-pages/store-list-02";
import ContactPage from "./pages/other-pages/contact";
import ContactPage2 from "./pages/other-pages/contact-02";
import PageNotFoundPage from "./pages/not-found";
import FAQSPage from "./pages/other-pages/FAQs";
import TermsOfUsePage from "./pages/other-pages/term-of-use";
import CommingSoonPage from "./pages/other-pages/coming-soon";
import CustomerFeedbackPage from "./pages/other-pages/customer-feedback";
import WOW from "@/utlis/wow";
import CompareProductsPage from "./pages/other-pages/compare-products";

import { AuthProvider } from "./context/AuthProvider";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header?.classList?.add("header-bg");
      } else {
        header?.classList?.remove("header-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    setScrollDirection("up");
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrollDirection("down");
        } else {
          // Scrolling up
          setScrollDirection("up");
        }
      } else {
        // Below 250px
        setScrollDirection("down");
      }

      lastScrollY.current = currentScrollY;
    };

    const lastScrollY = { current: window.scrollY };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap")
      .then((bootstrap) => {
        // Close any open modal
        const modalElements = document.querySelectorAll(".modal.show");
        modalElements.forEach((modal) => {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        });

        // Close any open offcanvas
        const offcanvasElements = document.querySelectorAll(".offcanvas.show");
        offcanvasElements.forEach((offcanvas) => {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        });
      })
      .catch((error) => {
        console.error("Error loading Bootstrap:", error);
      });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      if (scrollDirection == "up") {
        header.style.top = "0px";
      } else {
        header.style.top = "-185px";
      }
    }
  }, [scrollDirection]);
  useEffect(() => {
    const wow = new WOW({
      mobile: false,
      live: false,
    });
    wow.init();
  }, [pathname]);
  return (
    <>
      <AuthProvider>
        <Context>
          <div id="wrapper">
            <Routes>
              <Route path="/">

                <Route index element={<HomeElectronicPage />} />

                <Route path="shop-default-grid" element={<ShopDefaultGridPage />} />

                <Route path="shop-categories-top" element={<ShopCategoriesTopPage1 />} />

                <Route path="shop-load-button" element={<ShopLoadButtonPage />} />

                <Route path="shop-infinite-scrolling" element={<ShopInfinateScrollingPage />} />


                <Route path="product-style-01" element={<ProductStylePage1 />} />
                <Route path="product-style-07" element={<ProductStylePage7 />} />


                <Route path="wish-list" element={<WishListPage />} />
                <Route path="compare-products" element={<CompareProductsPage />} />
                <Route path="search-result" element={<SearchResultPage />} />
                <Route path="shopping-cart" element={<ShopingCartPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="forget-password" element={<ForgotPasswordPage />} />
                <Route path="order-tracking" element={<OrderTrackingPage />} />
                <Route path="my-account" element={<PrivateRoute element={<MyAccountPage />} />} />

                <Route path="product-detail/:id" element={<ProductDetailPage />} />

                <Route path="product-swatch-rounded-image/:id" element={<ProductSwatchRoundedImagePage />}  />

                <Route path="product-frequently-bought-together/:id" element={<ProductFrequentlyBoughtTogetherPage1 />}  />

                <Route path="product-up-sell/:id" element={<ProductUpSellPage />}  />
                <Route path="product-pre-order/:id" element={<ProductPreorderPage />}  />
                <Route path="product-grouped/:id" element={<ProductGroupedPage />}  />

                <Route path="product-customer-note/:id" element={<ProductCustomerNotePage />}  />
                
                <Route path="product-out-of-stock/:id" element={<ProductOutOfStockPage />}  />
                <Route path="product-pickup-available/:id" element={<ProductPickupAvailablePage />}  />
                <Route path="product-variable/:id" element={<ProductVariablePage />}  />
                <Route path="product-deals/:i" element={<ProductDealsPage />} />
                <Route path="product-with-discount/:id" element={<ProductWithDiscountPage />}  />
                <Route path="product-external/:id" element={<ProductExternalPage />}  />
                <Route path="product-subscribe-save/:id" element={<ProductSubscribeSavePage />}  />


                <Route path="blog-list" element={<BlogListPage />} />
                <Route path="blog-detail-02/:id" element={<BlogDetailsPage2 />} />
                <Route path="about-us" element={<AboutUsPage />} />
                <Route path="store-list-02" element={<StorelistPage2 />} />
                <Route path="contact" element={<ContactPage2 />} />
                <Route path="404" element={<PageNotFoundPage />} />
                <Route path="FAQs" element={<FAQSPage />} />
                <Route path="term-of-use" element={<TermsOfUsePage />} />
                <Route path="coming-soon" element={<CommingSoonPage />} />
                <Route path="customer-feedback" element={<CustomerFeedbackPage />} />
                <Route path="*" element={<PageNotFoundPage />} />
              </Route>
            </Routes>
          </div>
          <CartModal />
          <QuickView />
          <QuickAdd />
          <Compare />
          <MobileMenu />

          <NewsLetterModal />
          <SearchModal />
          <SizeGuide />
          <Wishlist />
          <DemoModal />
          <Categories />
        </Context>
      </AuthProvider>
    </>
  );
}

export default App;
