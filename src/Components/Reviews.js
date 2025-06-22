import React, { useState, useEffect, useRef } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);
  const [autoAdvanceEnabled, setAutoAdvanceEnabled] = useState(true);
  const timerRef = useRef(null);

  // Clear the auto-advance timer when auto advance is disabled or on unmount
  useEffect(() => {
    if (autoAdvanceEnabled) {
      timerRef.current = setInterval(() => {
        setReview(prev => (prev >= reviewsLength ? 0 : prev + 1));
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoAdvanceEnabled, reviewsLength]);

  // disable auto advance on user click
  const disableAutoAdvance = () => {
    if (autoAdvanceEnabled) {
      setAutoAdvanceEnabled(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const backBtnClick = () => {
    disableAutoAdvance();
    setReview(review <= 0 ? reviewsLength : review - 1);
  };

  const frontBtnClick = () => {
    disableAutoAdvance();
    setReview(review >= reviewsLength ? 0 : review + 1);
  };

  // Compute the current review
  const currentReview = customerReviews[review];

  return (
    <div className="review-section" id="reviews">
      <div className="rw-text-content">
        <p className="rw-text-desc">Read Our Reviews!</p>
        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{currentReview.message}</span>
          <span className="rw-text-quote2">''</span>
        </p>
        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{currentReview.name}</p>
            <p className="rw-reviewer-place">{currentReview.location}</p>
          </div>
          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
