// import { useContextElement } from "@/context/Context";
// import React from "react";

// export default function Categories() {

//   const { Categoryloading, Categoryerror, categories } = useContextElement();
//   const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

//   return (
//     <div
//       className="offcanvas offcanvas-start canvas-filter canvas-categories"
//       id="shopCategories"
//     >
//       <div className="canvas-wrapper">
//         <div className="canvas-header">
//           <span className="icon-left icon-filter" />
//           <h5>Categories</h5>
//           <span
//             className="icon-close icon-close-popup"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           />
//         </div>
//         <div className="canvas-body">
//           {!Categoryloading && !Categoryerror && Array.isArray(categories) && categories.map((category, index) => (
//             <div className="wd-facet-categories">
//               <div
//                 role="dialog"
//                 className="facet-title collapsed"
//                 data-bs-target="#forWomen"
//                 data-bs-toggle="collapse"
//                 aria-expanded="true"
//                 aria-controls="forWomen"
//               >
//                 <img
//                   className="avt"
//                   // className="lazyload"
//                   data-src={`${BASE_URL}${category.banner_img}`}
//                   alt={category.title}
//                   src={`${BASE_URL}${category.banner_img}`}
//                   width={48}
//                   height={48}
//                 />
//                 <span className="title text-uppercase">{category.title}</span>
//                 <span className="icon icon-arrow-down" />
//               </div>
//               <div id="forWomen" className="collapse">
//                 <ul className="facet-body">
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/new-in.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         New in
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/promotion.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Promotion
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/clothing.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Clothing
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/shoes.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Shoes
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/bags.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Bags
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/accessories.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Accessories
//                       </span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="item link">
//                       <img
//                         className="avt"
//                         alt="avt"
//                         src="/images/avatar/jewelry.jpg"
//                         width={48}
//                         height={48}
//                       />
//                       <span className="title-sub text-caption-1 text-secondary">
//                         Jewelry
//                       </span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ))}
//           <div className="wd-facet-categories">
//             <div
//               role="dialog"
//               className="facet-title collapsed"
//               data-bs-target="#forWomen"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="forWomen"
//             >
//               <img
//                 className="avt"
//                 alt="avt"
//                 src="/images/avatar/women.jpg"
//                 width={48}
//                 height={48}
//               />
//               <span className="title">For Women</span>
//               <span className="icon icon-arrow-down" />
//             </div>
//             <div id="forWomen" className="collapse">
//               <ul className="facet-body">
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/new-in.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       New in
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/promotion.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Promotion
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/clothing.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Clothing
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/shoes.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Shoes
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/bags.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Bags
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/accessories.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Accessories
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/jewelry.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Jewelry
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="wd-facet-categories">
//             <div
//               role="dialog"
//               className="facet-title collapsed"
//               data-bs-target="#forMen"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="forMen"
//             >
//               <img
//                 className="avt"
//                 alt="avt"
//                 src="/images/avatar/men.jpg"
//                 width={48}
//                 height={48}
//               />
//               <span className="title">For Men</span>
//               <span className="icon icon-arrow-down" />
//             </div>
//             <div id="forMen" className="collapse">
//               <ul className="facet-body">
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/men.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Men
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/men.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Men
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="wd-facet-categories">
//             <div
//               role="dialog"
//               className="facet-title collapsed"
//               data-bs-target="#forKid"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="forKid"
//             >
//               <img
//                 className="avt"
//                 alt="avt"
//                 src="/images/avatar/kid.jpg"
//                 width={48}
//                 height={48}
//               />
//               <span className="title">For Kid</span>
//               <span className="icon icon-arrow-down" />
//             </div>
//             <div id="forKid" className="collapse">
//               <ul className="facet-body">
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/kid.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Kid
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/kid.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Kid
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="wd-facet-categories">
//             <div
//               role="dialog"
//               className="facet-title collapsed"
//               data-bs-target="#accessories"
//               data-bs-toggle="collapse"
//               aria-expanded="true"
//               aria-controls="accessories"
//             >
//               <img
//                 className="avt"
//                 alt="avt"
//                 src="/images/avatar/accessories.jpg"
//                 width={48}
//                 height={48}
//               />
//               <span className="title">Accessories</span>
//               <span className="icon icon-arrow-down" />
//             </div>
//             <div id="accessories" className="collapse">
//               <ul className="facet-body">
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/accessories.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Accessories
//                     </span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="item link">
//                     <img
//                       className="avt"
//                       alt="avt"
//                       src="/images/avatar/accessories.jpg"
//                       width={48}
//                       height={48}
//                     />
//                     <span className="title-sub text-caption-1 text-secondary">
//                       Accessories
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { useContextElement } from "@/context/Context";

export default function Categories() {
  const { Categoryloading, Categoryerror, categories } = useContextElement();
  const BASE_URL = import.meta.env.REACT_APP_IMAGE_BASE_URL || "https://ecomapi.tallytdls.in/";

  return (
    <div
      className="offcanvas offcanvas-start canvas-filter canvas-categories"
      id="shopCategories"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="icon-left icon-filter" />
          <h5>Categories</h5>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          {Categoryloading && <p>Loading...</p>}
          {Categoryerror && <p className="text-danger">{Categoryerror}</p>}
          {!Categoryloading && !Categoryerror && Array.isArray(categories) && (
            categories.map((category, index) => (
              <div className="wd-facet-categories" key={category.id}>
                {/* Accordion Title */}
                <div
                  role="dialog"
                  className="facet-title collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${index}`}
                >
                  <img
                    className="avt"
                    src={`${BASE_URL}${category.banner_img}`}
                    alt={category.title}
                    width={48}
                    height={48}
                  />
                  <span className="title text-uppercase">{category.title}</span>
                  <span className="icon icon-arrow-down" />
                </div>

                {/* Accordion Content */}
                <div id={`collapse-${index}`} className="collapse">
                  <ul className="facet-body">
                    {/* 
                      If your API provides subcategories or related links,
                      render them here. For now, we just show placeholders.
                    */}
                    <li>
                      <a href="#" className="item link">
                        <img
                          className="avt"
                          alt="Placeholder"
                          src="/images/avatar/new-in.jpg"
                          width={48}
                          height={48}
                        />
                        <span className="title-sub text-caption-1 text-secondary">
                          Subcategory 1
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="item link">
                        <img
                          className="avt"
                          alt="Placeholder"
                          src="/images/avatar/clothing.jpg"
                          width={48}
                          height={48}
                        />
                        <span className="title-sub text-caption-1 text-secondary">
                          Subcategory 2
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
