import { Link, useLocation } from "react-router-dom"

export const MovieList = ({ movies }) => {
  
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, name }) => {
        return (
          <li key={id}><Link to={`/movies/${id}`} state={{ from: location }}>{title || name}</Link></li>
        )
      })}
    </ul>
  );

};
