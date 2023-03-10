import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Link, Outlet} from "react-router-dom";
// import { detailsMovie } from 'services/api';
import * as API from 'services/api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    // const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState([]);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    
    useEffect(() => {
        API.detailsMovie(movieId).then(setMovieDetails);
    }, [movieId])

    if (!movieDetails) {
        return null
    }

    const { poster_path, title, release_date, vote_average, overview, genres, name } = movieDetails;
    return (
        <div>
            <div>
                <Link to={backLinkHref}>
                   <button>Go Back</button>
                </Link>
                {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
                <div className={styles.info}>
                   <div>
                      <img src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}`} alt={title || name} />
                    
                      <hr />
                        
                   </div>
                   <div>
                       <h2>{title} ({release_date})</h2>
                       <p>Vote Average: {vote_average}</p>
                       <h3>Overview</h3>
                       <p>{overview}</p>
                       <h3>Genres</h3>
                         <ul>
                            {genres
                             ? genres.map(({ id, name }) => (
                               <li key={id}>{name}</li>
                            ))
                             : ''}
                         </ul>
                    </div>
                </div>
                
                <div>
                    <h3>Additional information</h3>
                    <Link to="cast" state={location.state}>Cast</Link>
                </div>
                <div>
                    <Link to="reviews" state={location.state}>Reviews</Link>
                </div>
            </div>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
              
            
        </div>
    );
};

export default MovieDetails