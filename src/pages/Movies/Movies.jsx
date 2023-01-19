import { MovieSearch } from "./MovieSearch";
import { MovieList } from "./MovieList";
import { searchMovie } from 'services/api';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
    
  useEffect(() => {
    if (!query) {
        return 
    }
    searchMovie(query).then(setMovies);
  }, [query]);
    
  return (
    <>
      <MovieSearch setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
    </>
    
  );
};

export default Movies