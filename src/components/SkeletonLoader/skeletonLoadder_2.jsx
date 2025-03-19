// SkeletonLoader.jsx (List View Version)
import React from "react";
import "./skeleton2.css";

export default function SkeletonLoader2() {
  return (
    <div className="card-product style-list skeleton-list-item">
      <div className="card-product-wrapper">
        <div className="product-img skeleton-img" />
        <div className="skeleton-sale" />
      </div>
      <div className="card-product-info">
        <div className="skeleton-title" />
        <div className="skeleton-price" />
        <div className="skeleton-description" />
        <div className="variant-wrap-list">
          <div className="skeleton-colors">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton-color-swatch" />
            ))}
          </div>
          <div className="skeleton-sizes">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-size" />
            ))}
          </div>
          <div className="skeleton-actions">
            <div className="skeleton-button" />
            <div className="skeleton-icon" />
            <div className="skeleton-icon" />
            <div className="skeleton-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}