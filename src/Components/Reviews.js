import React, { useState, useEffect } from "react";
import { customerReviews } from "../Scripts/reviews";
import "../Styles/Reviews.css";

function Reviews() {
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle reviews every 5 seconds
  useEffect(() => {
    if (!isPaused && customerReviews.length > 1) {
      const interval = setInterval(() => {
        setReview(prevReview => prevReview >= reviewsLength ? 0 : prevReview + 1);
      }, 5000); // Change review every 5 seconds

      return () => clearInterval(interval);
    }
  }, [reviewsLength, isPaused]);

  // back to previous review
  const backBtnClick = () => {
    setIsPaused(true); // Pause auto-cycling when user manually navigates
    setReview(review <= 0 ? reviewsLength : review - 1);
    
    // Resume auto-cycling after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // go to newer review
  const frontBtnClick = () => {
    setIsPaused(true); // Pause auto-cycling when user manually navigates
    setReview(review >= reviewsLength ? 0 : review + 1);
    
    // Resume auto-cycling after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Pause auto-cycling on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Get current review data
  const currentReview = customerReviews[review] || customerReviews[0];
  const { name: rName, location: rLocation, message: rMessage } = currentReview;

  return (
    <div 
      className="review-section" 
      id="reviews"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rw-text-content">
        <p className="rw-text-desc">Our Customers Have Said...</p>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtnClick}
              aria-label="Previous review"
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtnClick}
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>

        {/* Optional: Add review indicators */}
        <div className="rw-indicators">
          {customerReviews.map((_, index) => (
            <button
              key={index}
              className={`rw-indicator ${index === review ? 'active' : ''}`}
              onClick={() => {
                setReview(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;