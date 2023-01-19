import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { trendingMovie } from "services/api";


const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        trendingMovie().then(setMovies)
  }, []);
    
    return (
        <div>
            <h2>Trending today</h2>
            <ul>
                {movies.map(({ id, title, name}) => {
                    return (
                        <li key={id}>
                            <Link to={`movies/${id}`} state={{from:location}}>{title || name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Home