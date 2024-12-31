import React, { useEffect, useState } from 'react';
import './ReviewPage.css';
import img from '../../images/cust.jpeg'

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8888/disfeedback'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError(error.message);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="reviews-page">
      <h2 className='title'>CUSTOMER REVIEWS</h2>
      {error && <p className="error">{error}</p>}
      {reviews.length === 0 ? (
        <p>No reviews added yet. Be the first to add a review!</p>
      ) : (
        <div className="review-cards">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="card-header">
                <div className="profile-image">
                  <img src={img} alt={review.name} />
                </div>
                <div className="card-info">
                  <h3>{review.name}</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="review-text">{review.review}</p>
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`star ${i < review.review_star ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewsPage;


// import React, { useEffect, useState } from 'react';
// import './ReviewPage.css';

// function ReviewsPage() {
//   const [reviews, setReviews] = useState([]); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch('http://localhost:8888/disfeedback'); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error('Failed to fetch reviews');
//         }
//         const data = await response.json();
//         setReviews(data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//         setError(error.message);
//       }
//     };

//     fetchReviews();
//   }, []); // Empty dependency array ensures it runs only once on mount

//   return (
//     <div className="reviews-page">
//       <h2>Customer Reviews</h2>
//       {error && <p className="error">{error}</p>} {/* Display error if any */}
//       {reviews.length === 0 ? (
//         <p>No reviews added yet. Be the first to add a review!</p>
//       ) : (
//         <ul>
//           {reviews.map((review, index) => (
//             <li key={index} className="review-item">
//               <h3>{review.name}</h3>
//               <p><strong>Rating:</strong> {review.review_star} - {getRatingText(review.review_star)}</p>
//               <p><strong>Review:</strong> {review.review}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// const getRatingText = (rating) => {
//   switch (parseInt(rating, 10)) {
//     case 1:
//       return 'Poor';
//     case 2:
//       return 'Fair';
//     case 3:
//       return 'Good';
//     case 4:
//       return 'Very Good';
//     case 5:
//       return 'Excellent';
//     default:
//       return ''; // Return empty string for invalid ratings
//   }
// };

// export default ReviewsPage;
