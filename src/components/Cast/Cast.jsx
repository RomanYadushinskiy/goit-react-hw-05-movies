import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { creditsMovie } from 'services/api';
import { CastList } from './CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
    
  useEffect(() => {
    creditsMovie(movieId).then(setCredits)
  }, [movieId]);

  return (
    <div>
      {credits && <CastList credits={credits.cast} />}
    </div>
  );
};

export default Cast