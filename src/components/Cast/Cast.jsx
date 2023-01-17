import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovie } from 'services/api';
import { CastList } from './CastList';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
    
  useEffect(() => {
    creditsMovie(movieId)
      .then(resp => {
        setCredits(resp);
      })
      .catch(err => console.log(err))
  }, [movieId]);

  return (
    <div>
      {credits && <CastList credits={credits.cast} />}
    </div>
  );
};