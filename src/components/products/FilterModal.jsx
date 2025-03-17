// import {
//   availabilityOptions,
//   // brands,
//   // categories,
//   colors,
//   sizes,
// } from "@/data/productFilterOptions";
// import { productMain } from "@/data/products";
// import RangeSlider from "react-range-slider-input";
// import { selectProducts, selectLoading, selectError, selectPagination } from '@/redux/action/product/productSelectors';
// import { selectCategories, selectCategoryLoading, selectCategoryError } from '@/redux/action/category/categorySelectors';
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchCategory } from "@/redux/action/category/categoryAction";
// import { fetchBrands } from "@/redux/action/brand/bandAction";

// export default function FilterModal({ allProps }) {
//   const dispatch = useDispatch();

//   const { brands } = useSelector((state) => state.brand);

//   const products = useSelector(selectProducts);
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
//   const pagination = useSelector(selectPagination);

//   const categories = useSelector(selectCategories);
//   const Categoyloading = useSelector(selectCategoryLoading);
//   const Categoyerror = useSelector(selectCategoryError);


//   useEffect(() => {
//     dispatch(fetchCategory())
//     dispatch(fetchBrands())
//   }, [dispatch])

//   // console.log(products);
//   // Fetch products for page 1 on mount
//   return (
//     <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
//       <div className="canvas-wrapper">
//         <div className="canvas-header">
//           <h5>Filters</h5>
//           <span
//             className="icon-close icon-close-popup"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           />
//         </div>
//         <div className="canvas-body">
//           <div className="widget-facet facet-categories">
//             <h6 className="facet-title">Product Categories</h6>
//             <ul className="facet-content">
//               {categories.map((category, index) => (
//                 <li key={index}>
//                   <a href="#" className={`categories-item`}>
//                     {category.title}{" "}
//                     <span className="count-cate">({category.count})</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="widget-facet facet-price">
//             <h6 className="facet-title">Price</h6>

//             <RangeSlider
//               min={0}
//               max={50000}
//               value={allProps.price}
//               onInput={(value) => allProps.setPrice(value)}
//             />
//             <div className="box-price-product mt-3">
//               <div className="box-price-item">
//                 <span className="title-price">Min price</span>
//                 <div
//                   className="price-val"
//                   id="price-min-value"
//                   data-currency="₹"
//                 >
//                   {allProps.price[0]}
//                 </div>
//               </div>
//               <div className="box-price-item">
//                 <span className="title-price">Max price</span>
//                 <div
//                   className="price-val"
//                   id="price-max-value"
//                   data-currency="₹"
//                 >
//                   {allProps.price[1]}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="widget-facet facet-size">
//             <h6 className="facet-title">Size</h6>
//             <div className="facet-size-box size-box">
//               {sizes.map((size, index) => (
//                 <span
//                   key={index}
//                   onClick={() => allProps.setSize(size)}
//                   className={`size-item size-check ${allProps.size === size ? "active" : ""
//                     }`}
//                 >
//                   {size}
//                 </span>
//               ))}
//               <span
//                 className={`size-item size-check free-size ${allProps.size == "Free Size" ? "active" : ""
//                   } `}
//                 onClick={() => allProps.setSize("Free Size")}
//               >
//                 Free Size
//               </span>
//             </div>
//           </div>
//           <div className="widget-facet facet-color">
//             <h6 className="facet-title">Colors</h6>
//             <div className="facet-color-box">
//               {colors.map((color, index) => (
//                 <div
//                   onClick={() => allProps.setColor(color)}
//                   key={index}
//                   className={`color-item color-check ${color == allProps.color ? "active" : ""
//                     }`}
//                 >
//                   <span className={`color ${color.className}`} />
//                   {color.name}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="widget-facet facet-fieldset">
//             <h6 className="facet-title">Availability</h6>
//             <div className="box-fieldset-item">
//               {availabilityOptions.map((option, index) => (
//                 <fieldset
//                   key={index}
//                   className="fieldset-item"
//                   onClick={() => allProps.setAvailability(option)}
//                 >
//                   <input
//                     type="radio"
//                     name="availability"
//                     className="tf-check"
//                     readOnly
//                     checked={allProps.availability === option}
//                   />
//                   <label>
//                     {option.label}{" "}
//                     <span className="count-stock">
//                       (
//                       {
//                         productMain.filter((el) => el.inStock == option.value)
//                           .length
//                       }
//                       )
//                     </span>
//                   </label>
//                 </fieldset>
//               ))}
//             </div>
//           </div>
//           <div className="widget-facet facet-fieldset">
//             <h6 className="facet-title">Brands</h6>
//             <div className="box-fieldset-item">
//               {brands.map((brand, index) => (
//                 <fieldset
//                   key={index}
//                   className="fieldset-item"
//                   onClick={() => allProps.setBrands(brand.title)}
//                 >
//                   <input
//                     type="checkbox"
//                     name="brand"
//                     className="tf-check"
//                     readOnly
//                     checked={allProps.brands.includes(brand.title)}
//                   />
//                   <label>
//                     {brand.title}{" "}
//                     <span className="count-brand">
//                       (
//                       {
//                         productMain.filter((el) =>
//                           el.filterBrands.includes(brand.title  )
//                         ).length
//                       }
//                       )
//                     </span>
//                   </label>
//                 </fieldset>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="canvas-bottom">
//           <button
//             id="reset-filter"
//             onClick={allProps.clearFilter}
//             className="tf-btn btn-reset"
//           >
//             Reset Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RangeSlider from "react-range-slider-input";
import {
  availabilityOptions,
  colors,
  sizes,
} from "@/data/productFilterOptions";
import { selectProducts } from "@/redux/action/product/productSelectors";
import { selectCategories } from "@/redux/action/category/categorySelectors";
import { fetchCategory } from "@/redux/action/category/categoryAction";
import { fetchBrands } from "@/redux/action/brand/brandAction";

export default function FilterModal({ allProps }) {
  const dispatch = useDispatch();

  // Get live data from Redux store
  const { brands } = useSelector((state) => state.brand);
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <h5>Filters</h5>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          {/* Categories Facet */}
          <div className="widget-facet facet-categories">
            <h6 className="facet-title">Product Categories</h6>
            <ul className="facet-content">
              {categories.map((category, index) => (
                <li key={index}>
                <a
                  className={`categories-item ${
                    allProps.category === category.title ? "active" : ""
                  }`}
                  onClick={() => allProps.setCategory(category.title)}
                >
                  {category.title}{" "}
                  <span className="count-cate">({category.count || 0})</span>
                </a>
              </li>
              ))}
            </ul>
          </div>
          {/* Price Facet */}
          <div className="widget-facet facet-price">
            <h6 className="facet-title">Price</h6>
            <RangeSlider
              min={0}
              max={50000}
              value={allProps.price}
              onInput={(value) => allProps.setPrice(value)}
            />
            <div className="box-price-product mt-3">
              <div className="box-price-item">
                <span className="title-price">Min price</span>
                <div className="price-val" id="price-min-value" data-currency="₹">
                  {allProps.price[0]}
                </div>
              </div>
              <div className="box-price-item">
                <span className="title-price">Max price</span>
                <div className="price-val" id="price-max-value" data-currency="₹">
                  {allProps.price[1]}
                </div>
              </div>
            </div>
          </div>
          {/* Size Facet */}
          <div className="widget-facet facet-size">
            <h6 className="facet-title">Size</h6>
            <div className="facet-size-box size-box">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  onClick={() => allProps.setSize(size)}
                  className={`size-item size-check ${allProps.size === size ? "active" : ""}`}
                >
                  {size}
                </span>
              ))}
              <span
                className={`size-item size-check free-size ${allProps.size === "Free Size" ? "active" : ""}`}
                onClick={() => allProps.setSize("Free Size")}
              >
                Free Size
              </span>
            </div>
          </div>
          {/* Color Facet */}
          <div className="widget-facet facet-color">
            <h6 className="facet-title">Colors</h6>
            <div className="facet-color-box">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => allProps.setColor(color)}
                  className={`color-item color-check ${allProps.color === color ? "active" : ""}`}
                >
                  <span className={`color bg-red ${color.className}`} />
                  {color.name}
                </div>
              ))}
            </div>
          </div>
          {/* Availability Facet */}
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Availability</h6>
            <div className="box-fieldset-item">
              {availabilityOptions.map((option, index) => (
                <fieldset
                  key={index}
                  className="fieldset-item"
                  onClick={() => allProps.setAvailability(option)}
                >
                  <input
                    type="radio"
                    name="availability"
                    className="tf-check"
                    readOnly
                    checked={allProps.availability === option}
                  />
                  <label>
                    {option.label}{" "}
                    <span className="count-stock">
                      (
                      {products.filter((el) => el.inStock === option.value).length}
                      )
                    </span>
                  </label>
                </fieldset>
              ))}
            </div>
          </div>
          {/* Brands Facet */}
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Brands</h6>
            <div className="box-fieldset-item">
              {brands.map((brand, index) => (
                <fieldset
                  key={index}
                  className="fieldset-item"
                  onClick={() => allProps.setBrands(brand.title)}
                >
                  <input
                    type="checkbox"
                    name="brand"
                    className="tf-check"
                    readOnly
                    checked={allProps.brands.includes(brand.title)}
                  />
                  <label>
                    {brand.title}{" "}
                    <span className="count-brand">
                      (
                      {products.filter((el) => el.filterBrands?.includes(brand.title)).length}
                      )
                    </span>
                  </label>
                </fieldset>
              ))}
            </div>
          </div>
        </div>
        <div className="canvas-bottom">
          <button
            id="reset-filter"
            onClick={allProps.clearFilter}
            className="tf-btn btn-reset"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
