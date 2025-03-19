import React from "react";
import "./skeleton.css"; // We'll define shimmer styles here

export default function ProductDetailSkeleton() {
  return (
    <section className="flat-spacing skeleton-product-detail">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row d-flex">
            {/* Left side: image slider placeholder */}
            <div className="col-md-6 skeleton-img-block shimmer" />

            {/* Right side: product info placeholder */}
            <div className="col-md-6 skeleton-info-wrap">
              {/* Category / Title */}
              <div className="skeleton-line shimmer" style={{ width: "40%", height: "24px" }} />
              <div className="skeleton-line shimmer" style={{ width: "60%", height: "32px" }} />

              {/* Price / Discount */}
              <div className="skeleton-line shimmer" style={{ width: "30%", height: "28px" }} />
              <div className="skeleton-line shimmer" style={{ width: "20%", height: "24px" }} />

              {/* Description */}
              <div className="skeleton-line shimmer" style={{ width: "100%", height: "16px" }} />
              <div className="skeleton-line shimmer" style={{ width: "90%", height: "16px" }} />
              <div className="skeleton-line shimmer" style={{ width: "95%", height: "16px" }} />

              {/* Buttons */}
              <div className="skeleton-btn shimmer" style={{ width: "40%", height: "45px" }} />
              <div className="skeleton-btn shimmer" style={{ width: "40%", height: "45px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
