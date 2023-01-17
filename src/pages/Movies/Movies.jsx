import { MovieSearch } from "./MovieSearch";
import { MovieList } from "./MovieList";
import { searchMovie } from 'services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
    
  useEffect(() => {
    if (!query) {
        return 
    }
    searchMovie(query)
      .then(resp => {
        setMovies(resp);
      })
      .catch(err => console.log(err))
  }, [query]);
    
    

  return (
    <>
      <MovieSearch setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </>
  );
};

