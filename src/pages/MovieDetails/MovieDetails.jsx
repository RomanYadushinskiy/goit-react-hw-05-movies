import { useState, useEffect, Suspense} from "react";
import { useParams, useNavigate, useLocation, Link, Outlet} from "react-router-dom";
import { detailsMovie } from 'services/api';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        detailsMovie(movieId).then(setMovieDetails);
    }, [movieId])

    if (!movieDetails) {
        return null
    }

    console.log(movieDetails)
    
    const { poster_path, title, release_date, vote_average, overview, genres } = movieDetails;
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)}>Go bBack</button>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                    
                    <hr />
                        
                </div>
                <div>
                        <h2>{movieDetails.title} ({release_date})</h2>
                        <p>Vote Average: {vote_average}</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        {genres.map(genre => (
                            <p key={genre.id}>{genre.name}</p>
                        )
                        )}
                </div>
                <div>
                    <h3>Additional information</h3>
                    <Link to="cast" state={{ from: location?.state?.from }}>Cast</Link>
                </div>
                <div>
                    <Link to="reviews" state={{ from: location?.state?.from }}>Reviews</Link>
                </div>
            </div>
            
              <Outlet />
            
        </div>
    );
};