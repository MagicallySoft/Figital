import React from "react";
import "./skeleton.css"
import { Link } from "react-router-dom";

export default function SkeletonLoader() {
    return (
        <>
            <div className="skeleton-card mt-3">
                <div className="skeleton-img shimmer"></div>
                <div className="skeleton-text shimmer"></div>
                <div className="skeleton-text shimmer"></div>
            </div>

        </>
    );
}
