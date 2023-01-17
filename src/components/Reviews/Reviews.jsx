
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsMovie } from 'services/api';
import { ListReviews } from "./ListReviews";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
    
  useEffect(() => {
    reviewsMovie(movieId)
      .then(resp => {
        setReviews(resp);
      })
      .catch(err => console.log(err))
  }, [movieId]);
    
  return (
    <>{reviews && <ListReviews reviews={reviews} />}</>
  );
};