import React, { useState } from 'react';
import '../Styles/AddReviewForm.css';
import { Link } from "react-router-dom";
import { faBottleDroplet } from '@fortawesome/free-solid-svg-icons';

const AddReviewForm = () => {
  const [ratings, setRatings] = useState({
    aspect1: 0,
    aspect2: 0,
    aspect3: 0,
    aspect4: 0,
    name: "",
  });

  const handleStarClick = (aspect, rating) => {
    setRatings({ ...ratings, [aspect]: rating });
  };

  const handleSubmit = () => {
    const reviewData = JSON.stringify(ratings);
    console.log(reviewData);
    alert('Review submitted successfully');
  };

  const handleNameChange = (e) => {
    setRatings({ ...ratings, name: e.target.value });
  };

  return (
    <div className='main-content'>
        <h1 className="legal-siteTitle">
            <Link to="/">
            Heartland Restoration<span className="legal-siteSign"></span>
            </Link>
        </h1>
        <div className="review-container">
        <h2 className="review-heading">Leave a Review</h2>
        <div className="reviewer-name" style={{marginBottom: "10px"}}>
            <label htmlFor="name"><h2>Your Name: </h2></label>
            <input
              type="text"
              id="name"
              name="name"
              value={ratings.name}
              onChange={handleNameChange}
            />
        </div>
        <div className="aspect-container">
            <h3 className="aspect-heading">How was your interaction with us?</h3>
            <div className="star-container">
            {[1, 2, 3, 4, 5].map(star => (
                <span
                key={star}
                onClick={() => handleStarClick('aspect1', star)}
                className={`star ${ratings.aspect1 >= star ? 'active' : ''}`}
                >
                ★
                </span>
            ))}
            </div>
            {ratings.aspect1 !== 0 && <span className="rating">Rating: {ratings.aspect1}</span>}
        </div>
        <div className="aspect-container">
            <h3 className="aspect-heading">Did we do a good job?</h3>
            <div className="star-container">
            {[1, 2, 3, 4, 5].map(star => (
                <span
                key={star}
                onClick={() => handleStarClick('aspect2', star)}
                className={`star ${ratings.aspect2 >= star ? 'active' : ''}`}
                >
                ★
                </span>
            ))}
            </div>
            {ratings.aspect2 !== 0 && <span className="rating">Rating: {ratings.aspect2}</span>}
        </div>
        <div className="aspect-container">
            <h3 className="aspect-heading">Did we arrive quickly?</h3>
            <div className="star-container">
            {[1, 2, 3, 4, 5].map(star => (
                <span
                key={star}
                onClick={() => handleStarClick('aspect3', star)}
                className={`star ${ratings.aspect3 >= star ? 'active' : ''}`}
                >
                ★
                </span>
            ))}
            </div>
            {ratings.aspect3 !== 0 && <span className="rating">Rating: {ratings.aspect3}</span>}
        </div>
        <div className="aspect-container">
            <h3 className="aspect-heading">How likely are you to use us again?</h3>
            <div className="star-container">
            {[1, 2, 3, 4, 5].map(star => (
                <span
                key={star}
                onClick={() => handleStarClick('aspect4', star)}
                className={`star ${ratings.aspect4 >= star ? 'active' : ''}`}
                >
                ★
                </span>
            ))}
            </div>
            {ratings.aspect4 !== 0 && <span className="rating">Rating: {ratings.aspect4}</span>}
        </div>
        <button onClick={handleSubmit} className="submit-button">Submit Review</button>
        </div>
    </div>
  );
};

export default AddReviewForm;