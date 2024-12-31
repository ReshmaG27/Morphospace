import React, { useState, useEffect } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const ADD_REVIEW_API = "http://localhost:8888/addReview";
  const GET_REVIEWS_API = "http://localhost:8888/getReviews";

  const fetchReviews = async () => {
    try {
      const response = await fetch(GET_REVIEWS_API);
      if (!response.ok) {
        throw new Error("Failed to fetch reviews");
      }
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !review) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      const response = await fetch(ADD_REVIEW_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, review }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setName("");
      setReview("");
      fetchReviews();
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your review.");
    }
  };

  return (
    <div className="review-form-container">
      <div className="reviews-container">
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <span className="review-name">{r.name}</span>
                {/* Optional: Add review date */}
                <span className="review-date">{r.date}</span>
              </div>
              <div className="review-body">
                <p className="review-text">{r.review}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          <textarea
            placeholder="Enter your Review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default ReviewForm;
