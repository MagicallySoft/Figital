import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import Listview from "./Listview";
import GridView from "./GridView";
import { useEffect, useReducer, useState } from "react";
import FilterModal from "./FilterModal";
import { initialState, reducer } from "@/redux/reducers/filterReducer";
import FilterMeta from "./FilterMeta";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/redux/action/product/productAction";
import { useContextElement } from "@/context/Context";
import { Alert, Spinner } from "react-bootstrap";
import PageNotFoundPage from "@/pages/other-pages/404";



export default function Products1({ parentClass = "flat-spacing" }) {
  const dispatchs = useDispatch();
  const { products, loading, error, pagination, } = useContextElement();

  // Fetch products
  useEffect(() => {
    dispatchs(fetchProducts(1));
  }, [dispatchs]);

  // Handle page change
  const handlePageChange = (page) => {
    dispatchs(fetchProducts(page));
  };

  const [activeLayout, setActiveLayout] = useState(4);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    price,
    availability,
    color,
    size,
    brands,
    category,
    filtered,
    sortingOption,
    sorted,
    activeFilterOnSale,
    currentPage,
    itemPerPage,
  } = state;

  const allProps = {
    ...state,
    setPrice: (value) => dispatch({ type: "SET_PRICE", payload: value }),
    setColor: (value) => {
      value == color
        ? dispatch({ type: "SET_COLOR", payload: "All" })
        : dispatch({ type: "SET_COLOR", payload: value });
    },
    setSize: (value) => {
      value == size
        ? dispatch({ type: "SET_SIZE", payload: "All" })
        : dispatch({ type: "SET_SIZE", payload: value });
    },
    setAvailability: (value) => {
      value == availability
        ? dispatch({ type: "SET_AVAILABILITY", payload: "All" })
        : dispatch({ type: "SET_AVAILABILITY", payload: value });
    },
    setBrands: (newBrand) => {
      const updated = [...brands].includes(newBrand)
        ? [...brands].filter((elm) => elm != newBrand)
        : [...brands, newBrand];
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    removeBrand: (newBrand) => {
      const updated = [...brands].filter((brand) => brand != newBrand);
      dispatch({ type: "SET_BRANDS", payload: updated });
    },
    setCategory: (value) => dispatch({ type: "SET_CATEGORY", payload: value }),
    setSortingOption: (value) => dispatch({ type: "SET_SORTING_OPTION", payload: value }),
    toggleFilterWithOnSale: () => dispatch({ type: "TOGGLE_FILTER_ON_SALE" }),
    setCurrentPage: (value) => dispatch({ type: "SET_CURRENT_PAGE", payload: value }),
    setItemPerPage: (value) => {
      dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
      dispatch({ type: "SET_ITEM_PER_PAGE", payload: value });
    },
    clearFilter: () => {
      dispatch({ type: "CLEAR_FILTER" });
    },
  };

  // Filter products based on criteria
  useEffect(() => {
    let filteredArrays = [];

    // Category Filter: if a specific category is selected


    if (category && category !== "All") {
      const filteredByCategory = products.filter(
        (product) => product.category?.title === category
      );
      filteredArrays.push(filteredByCategory);
    }

    if (brands.length) {
      const filteredByBrands = products.filter((product) =>
        brands.every((selectedBrand) => product.brand?.title === selectedBrand)
      );
      filteredArrays = [...filteredArrays, filteredByBrands];
    }

    if (availability !== "All") {
      const filteredByavailability = [...products].filter(
        (elm) => availability.value === elm.inStock
      );
      filteredArrays = [...filteredArrays, filteredByavailability];
    }
    if (color !== "All") {
      const filteredByColor = [...products].filter((elm) =>
        elm.filterColor.includes(color.name)
      );
      filteredArrays = [...filteredArrays, filteredByColor];
    }
    if (size !== "All" && size !== "Free Size") {
      const filteredBysize = [...products].filter((elm) =>
        elm.filterSizes.includes(size)
      );
      filteredArrays = [...filteredArrays, filteredBysize];
    }
    if (activeFilterOnSale) {
      const filteredByonSale = [...products].filter((elm) => elm.oldPrice);
      filteredArrays = [...filteredArrays, filteredByonSale];
    }

    const filteredByPrice = [...products].filter(
      (elm) => elm.price >= price[0] && elm.price <= price[1]
    );

    filteredArrays = [...filteredArrays, filteredByPrice];


    const commonItems = [...products].filter((item) =>
      filteredArrays.every((array) => array?.includes(item))
    );

    dispatch({ type: "SET_FILTERED", payload: commonItems });
  }, [price, availability, color, size, brands, activeFilterOnSale, products, category]);

  // Sort filtered results
  useEffect(() => {
    if (sortingOption === "Price Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.price - b.price),
      });
    } else if (sortingOption === "Price Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.price - a.price),
      });
    } else if (sortingOption === "Title Ascending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => a.title.localeCompare(b.title)),
      });
    } else if (sortingOption === "Title Descending") {
      dispatch({
        type: "SET_SORTED",
        payload: [...filtered].sort((a, b) => b.title.localeCompare(a.title)),
      });
    } else {
      dispatch({ type: "SET_SORTED", payload: filtered });
    }
    dispatch({ type: "SET_CURRENT_PAGE", payload: 1 });
  }, [filtered, sortingOption]);


  if (error) {
    return (
      <section className={parentClass}>
        <div className="container">
          <div className="error">
            <Alert variant="danger" className="login-alert">
              {error}
            </Alert>
            <PageNotFoundPage />
            
          </div>
        </div>
      </section>
    );
  }
  // console.log("pagination--->", pagination);

  return (
    <>
      <section className={parentClass}>
        <div className="container">
          <div className="tf-shop-control">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="filterShop"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filters</span>
              </a>
              <div
                onClick={allProps.toggleFilterWithOnSale}
                className={`d-none d-lg-flex shop-sale-text ${activeFilterOnSale ? "active" : ""}`}
              >
                <i className="icon icon-checkCircle" />
                <p className="text-caption-1">Shop sale items only</p>
              </div>
            </div>
            <ul className="tf-control-layout">
              <LayoutHandler setActiveLayout={setActiveLayout} activeLayout={activeLayout} />
            </ul>
            <div className="tf-control-sorting">
              <p className="d-none d-lg-block text-caption-1">Sort by:</p>
              <Sorting allProps={allProps} />
            </div>
          </div>
          <div className="wrapper-control-shop">
            <FilterMeta productLength={sorted.length} allProps={allProps} />
            {activeLayout === 1 ? (
              <div className="tf-list-layout wrapper-shop" id="listLayout">
                <Listview
                  loading={loading}
                  products={sorted.length ? sorted : products}
                  pagination={pagination}
                  onPageChange={handlePageChange}
                  currentPage={pagination.current_page}
                  totalPages={pagination.last_page}
                />
              </div>
            ) : (
              <div className={`tf-grid-layout wrapper-shop tf-col-${activeLayout}`} id="gridLayout">
                <GridView
                  loading={loading}
                  products={sorted.length ? sorted : products}
                  pagination={pagination}
                  onPageChange={handlePageChange}
                  currentPage={pagination.current_page}
                  totalPages={pagination.last_page}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <FilterModal allProps={allProps} />
    </>
  );
}
