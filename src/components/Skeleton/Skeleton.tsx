import React from "react";
import "./Skeleton.scss";

interface SkeletonProps {
    count?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ count = 5 }) => {
    return (
        <div className="results-skeleton">
            <ul className="results-skeleton-list">
                {Array.from({ length: count }).map((_, index) => (
                    <li key={index} className="results-skeleton-list__item">
                        <div className="results-skeleton-list__skeleton">
                            <div className="skeleton__url" />
                            <div className="skeleton__title" />
                            <div className="skeleton__description" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skeleton;
