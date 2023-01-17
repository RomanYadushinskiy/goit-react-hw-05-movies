import { useState, useEffect, } from "react";
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
    return (
        <div>
            <div>
                <button onClick={() => navigate(-1)}>Go Back</button>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
                </div>
                <div>
                    <hr />
                    <h3>movie info</h3>
                    <Link to="cast" state={{ from: location?.state?.from }}>Cast</Link>
                </div>
                <div>
                    <Link to="reviews" state={{ from: location?.state?.from }}>Reviews</Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};