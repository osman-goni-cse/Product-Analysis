import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <h1 className='my-5'>All reviews: {reviews.length} </h1>
      <div className="row row-cols-1 row-cols-md-3 g-3 home-review">
        {reviews.map((review) => (
          <Review key={review.id} review={review}>
            
          </Review>
        ))}
        
      </div>
    </div>
  );
};

export default Reviews;