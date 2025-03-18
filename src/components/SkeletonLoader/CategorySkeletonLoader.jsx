import React from "react";
import "./skeleton.css"; // Create a CSS file for shimmer animations

export default function CategorySkeletonLoader() {
  return (
    <div className="collection-circle hover-img skeleton-category">
      {/* Circular image placeholder */}
      <div className="circle-img skeleton-shimmer" />
      {/* Title placeholder */}
      <div className="collection-content text-center">
        <div className="skeleton-text skeleton-shimmer" />
      </div>
    </div>
  );
}
