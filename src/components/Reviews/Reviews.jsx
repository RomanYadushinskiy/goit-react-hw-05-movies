
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'services/api';
import { ListReviews } from "./ListReviews";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    reviewsMovie(movieId).then(setReviews)
  }, [movieId]);
    
  return (
    <>{reviews && <ListReviews reviews={reviews} />}</>
  );
};

export default Reviews