// CompareSkeleton.jsx
import React from "react";
import "./skeleton.css"; // We'll define the shimmer styles here

export default function CompareSkeleton() {
  // For demonstration, we’ll create 3 skeleton columns in each row.
  // Adjust the number as you see fit.
  const numSkeletonCols = 3;

  return (
    <section className="flat-spacing skeleton-compare-section">
      <div className="container">
        {/* Table wrapper */}
        <div className="tf-compare-table skeleton-compare">
          {/* Header row (images, etc.) */}
          <div className="tf-compare-row tf-compare-grid">
            <div className="tf-compare-col d-md-block d-none" />
            {Array.from({ length: numSkeletonCols }).map((_, index) => (
              <div key={index} className="tf-compare-col skeleton-col">
                <div className="tf-compare-item">
                  <div className="tf-compare-image skeleton-img shimmer" />
                  <div className="tf-compare-content">
                    <div className="skeleton-text shimmer" />
                    <div className="skeleton-text shimmer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Example row for Price, repeated for other fields */}
          <div className="tf-compare-row">
            <div className="tf-compare-col tf-compare-field d-md-block d-none">
              <h6 className="skeleton-text shimmer" style={{ width: "60px" }} />
            </div>
            {Array.from({ length: numSkeletonCols }).map((_, index) => (
              <div
                key={index}
                className="tf-compare-col tf-compare-field text-center skeleton-col"
              >
                <div className="skeleton-text shimmer" />
              </div>
            ))}
          </div>

          {/* Repeat more rows (Type, Brand, etc.) as placeholders */}
          <div className="tf-compare-row">
            <div className="tf-compare-col tf-compare-field d-md-block d-none">
              <h6 className="skeleton-text shimmer" style={{ width: "60px" }} />
            </div>
            {Array.from({ length: numSkeletonCols }).map((_, index) => (
              <div
                key={index}
                className="tf-compare-col tf-compare-field text-center skeleton-col"
              >
                <div className="skeleton-text shimmer" />
              </div>
            ))}
          </div>

          {/* Add as many skeleton rows as needed */}
        </div>
      </div>
    </section>
  );
}
