import React, { useState, useContext } from 'react';
import { ReviewsContext } from '../../../App';
import './ReviewForm.css';

function ReviewForm() {
  const { setReviews } = useContext(ReviewsContext); // Access setReviews from context

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(1); // Default rating is 1
  const [productReview, setProductReview] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && productReview.trim()) {
      const newReview = {
        name,
        email,
        review_star: rating,
        review: productReview,
      };

      try {
        // Send the data to your API
        const response = await fetch('http://localhost:8888/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newReview),
        });

        const result = await response.json();

        if (response.ok) {
          // Update the reviews context if API call is successful
          setReviews((prevReviews) => [...prevReviews, newReview]);

          // Clear form inputs after submission
          setName('');
          setEmail('');
          setRating(1);
          setProductReview('');

          alert(result.message || 'Review added successfully!');
        } else {
          alert(result.message || 'Failed to add review.');
        }
      } catch (error) {
        console.error('Error submitting review:', error);
        alert('An error occurred while submitting the review.');
      }
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="review-form">
      <h2>Add Your Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Rating Selection - Dropdown */}
        <label htmlFor="rating">Rating (1 to 5):</label>
        <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>

        {/* Review about the Products */}
        <div>
          <label htmlFor="productReview">Share your Experience:</label>
          <textarea
            id="productReview"
            value={productReview}
            onChange={(e) => setProductReview(e.target.value)}
            placeholder="Write your review about the products"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
